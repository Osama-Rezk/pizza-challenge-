import { useFormikContext } from "formik";
import { Input } from "../input";
import { CreditCardFormFields } from "../../types";

export const CreditCardForm = () => {
  const { values, handleChange, handleBlur, errors, touched } =
    useFormikContext<CreditCardFormFields>();

  const { creditCardName, cardNumber, expirationDate, cvv } = values;

  return (
    <>
      <Input
        label="Card Name"
        name="creditCardName"
        placeholder="Credit Card Name"
        value={creditCardName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          errors.creditCardName && touched.creditCardName
            ? errors.creditCardName
            : ""
        }
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
    </>
  );
};
