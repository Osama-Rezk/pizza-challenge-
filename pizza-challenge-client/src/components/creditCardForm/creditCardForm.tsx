import valid from "card-validator";
import { useFormik } from "formik";
import { string, object } from "yup";
import { ButtonContainer } from "./creditCardForm.style";

import { Input } from "../input";
import { Button } from "../button";
import { useHistory } from "react-router-dom";

const creditCardSchema = object().shape({
  cardNumber: string()
    .test(
      "test-number",
      "Credit Card number is invalid",
      (value) => valid.number(value).isValid
    )
    .required(),

  name: string().required("Please Enter Credit Card Name "),

  cvv: string()
    .test(
      "test-cvv",
      "cvv  number is invalid",
      (value) => valid.cvv(value).isValid
    )
    .required(),

  expirationDate: string()
    .test(
      "test-exp",
      "Expiration Date is invalid",
      (value) => valid.expirationDate(value).isValid
    )
    .required(),
});

export const CreditCardForm = () => {
  const history = useHistory();

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        history.push("/order/1");
      } catch (error) {
        setSubmitting(false);
      }
    },
    validationSchema: creditCardSchema,
  });

  const { name, cardNumber, expirationDate, cvv } = values;

  return (
    <div>
      <Input
        label="Name"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.name && touched.name ? errors.name : ""}
      />

      <Input
        label="Card Number"
        name="cardNumber"
        placeholder="Card Number"
        value={cardNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.cardNumber && touched.cardNumber ? errors.cardNumber : ""}
      />

      <Input
        label="Expiration Date"
        placeholder="20/21"
        name="expirationDate"
        value={expirationDate}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          errors.expirationDate && touched.expirationDate
            ? errors.expirationDate
            : ""
        }
      />

      <Input
        label="cvv"
        placeholder="123"
        name="cvv"
        value={cvv}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.cvv && touched.cvv ? errors.cvv : ""}
      />
      <ButtonContainer>
        <Button
          style={{ width: "200px" }}
          label="Order Now"
          type="submit"
          onClickHandler={handleSubmit}
          disabled={isSubmitting}
        />
      </ButtonContainer>
    </div>
  );
};
