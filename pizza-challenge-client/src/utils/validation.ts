import valid from "card-validator";
import { string, object } from "yup";

export const creditCardSchema = object().shape({
  cardNumber: string()
    .test(
      "test-number",
      "Credit Card number is invalid",
      (value) => valid.number(value).isValid
    )
    .required(),

  creditCardName: string().required("Please Enter Credit Card Name "),

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

export const userDetailsSchema = object().shape({
  name: string().required("Please Enter Your Name "),

  city: string().required("Please Enter Your City Name "),

  street: string().required("Please Enter Your  street Name "),

  phoneNumber: string().required("Please Enter Your Phone Number   "),

  houseNumber: string().required("Please Enter Your House Number "),

  postalCode: string().required("Please Enter Your Postal Code "),
});

export const checkoutSchema = object().shape({
  ...creditCardSchema.fields,
  ...userDetailsSchema.fields,
});
