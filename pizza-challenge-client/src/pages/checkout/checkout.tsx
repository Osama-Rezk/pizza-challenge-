import { useMutation } from "react-query";
import {
  Container,
  SectionTitle,
  Section,
  SectionBody,
  DetailsRaw,
  DetailsContainer,
  Title,
  Value,
} from "./checkout.style";
import { Size, Addon } from "../../types";
import { calculatePizzaPrice, client } from "../../utils";
import { CreditCardForm } from "../../components/creditCardForm";

interface CheckoutProps {}

export const Checkout = (props: CheckoutProps) => {
  const { isLoading, isError, isSuccess, mutate } = useMutation(
    (updates) =>
      client(`orders`, {
        data: updates,
      }),
    {
      mutationKey: "orders",
    }
  );

  const {
    name,
    description,
    size,
    selectedAddons = [],
  } = JSON.parse(localStorage.getItem("pizza") || "") as {
    name: string;
    description: string;
    size: Size;
    selectedAddons: Addon[];
  };

  return (
    <Container>
      <Section>
        <SectionTitle>Order Summary </SectionTitle>
        <SectionBody>
          <DetailsContainer>
            <DetailsRaw>
              <Title> Name :</Title>
              <Value data-testid="pizza-name"> {name}</Value>
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

      <Section>
        <SectionTitle>Payment </SectionTitle>
        <SectionBody>
          <CreditCardForm order={mutate} />
        </SectionBody>
      </Section>
    </Container>
  );
};
