import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import {
  Container,
  SectionTitle,
  Section,
  SectionBody,
  DetailsRaw,
  DetailsContainer,
  Title,
  Value,
  ButtonContainer,
} from "./checkout.style";
import { Size, Addon } from "../../types";
import { calculatePizzaPrice, client, checkoutSchema } from "../../utils";
import {
  CreditCardForm,
  UserDetailsForm,
  Button,
  Error,
} from "../../components";
import { Form, Formik } from "formik";
import { UserDetailsFormFields, CreditCardFormFields } from "../../types";
import { useEffect } from "react";

type CheckoutForm = UserDetailsFormFields & CreditCardFormFields;

interface Order {
  id?: string;
  userDetails: UserDetailsFormFields;
  selectedAddons: Addon[];
  size: Size;
}

export const Checkout = () => {
  const history = useHistory();
  const { isLoading, isError, mutate } = useMutation(
    (updates: Order) =>
      client(`orders`, {
        data: updates,
      }),
    {
      mutationKey: "orders",
    }
  );

  const {
    id: itemId,
    name: pizzaName,
    description,
    size,
    selectedAddons = [],
  } = JSON.parse(localStorage.getItem("pizza") || "{}") as {
    name: string;
    description: string;
    size: Size;
    selectedAddons: Addon[];
    id: string;
  };

  const onSubmit = (values: CheckoutForm) => {
    const { name, street, city, phoneNumber, houseNumber, postalCode } = values;
    const data = {
      itemId,
      size,
      selectedAddons,
      userDetails: {
        name,
        street,
        city,
        phoneNumber,
        houseNumber,
        postalCode,
      },
    };

    mutate(data, {
      onSuccess: (order: Order) => {
        history.push(`/order/${order.id}`);
        localStorage.removeItem("pizza");
      },
    });
  };

  // handle if user go directly to checkout page
  useEffect(() => {
    if (!itemId) {
      setTimeout(() => history.push("/"), 2000);
    }
  }, []);

  if (!itemId) {
    return <div>please select a pizza first</div>;
  }

  return (
    <Container>
      <Section>
        <SectionTitle>Order Summary </SectionTitle>
        <SectionBody>
          <DetailsContainer>
            <DetailsRaw>
              <Title> Name :</Title>
              <Value data-testid="pizza-name"> {pizzaName}</Value>
            </DetailsRaw>

            <DetailsRaw>
              <Title>Description :</Title>
              <Value data-testid="pizza-description">{description} </Value>
            </DetailsRaw>

            <DetailsRaw>
              <Title>Size :</Title>
              <Value data-testid="size-name">{size.name} </Value>
            </DetailsRaw>

            <DetailsRaw>
              <Title>Topping :</Title>
              <Value data-testid="pizza-description">
                {selectedAddons.map((addOn: Addon) => addOn.name).join(", ")}
              </Value>
            </DetailsRaw>

            <DetailsRaw>
              <Title>Total Price :</Title>
              <Value data-testid="pizza-description">
                {calculatePizzaPrice(size, selectedAddons)} $
              </Value>
            </DetailsRaw>
          </DetailsContainer>
        </SectionBody>
      </Section>

      <Formik
        initialValues={{
          name: "",
          cardNumber: "",
          expirationDate: "",
          cvv: "",
          creditCardName: "",
          street: "",
          city: "",
          phoneNumber: "",
          houseNumber: "",
          postalCode: "",
        }}
        validationSchema={checkoutSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Section>
            <SectionTitle>User Details </SectionTitle>
            <SectionBody>
              <UserDetailsForm />
            </SectionBody>
          </Section>

          <Section>
            <SectionTitle>Payment </SectionTitle>
            <SectionBody>
              <CreditCardForm />
              <ButtonContainer>
                <div>
                  {isError && <Error>Some thing bad happen in ordering </Error>}
                  <Button
                    style={{ width: "200px" }}
                    label={isLoading ? "loading .." : "Order Now"}
                    type="submit"
                    disabled={isLoading}
                  />
                </div>
              </ButtonContainer>
            </SectionBody>
          </Section>
        </Form>
      </Formik>
    </Container>
  );
};
