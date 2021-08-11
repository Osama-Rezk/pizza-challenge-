import { useFormikContext } from "formik";
import { Input } from "../input";
import { UserDetailsFormFields } from "../../types";

export const UserDetailsForm = () => {
  const { values, handleChange, handleBlur, errors, touched } =
    useFormikContext<UserDetailsFormFields>();

  const { name, street, city, phoneNumber, houseNumber, postalCode } = values;

  return (
    <>
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
        label="Street"
        name="street"
        placeholder="street"
        value={street}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.street && touched.street ? errors.street : ""}
      />

      <Input
        label=" City"
        placeholder="City Name e.g Berlin"
        name="city"
        value={city}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.city && touched.city ? errors.city : ""}
      />

      <Input
        label=" House Number"
        placeholder="20B"
        name="houseNumber"
        value={houseNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          errors.houseNumber && touched.houseNumber ? errors.houseNumber : ""
        }
      />

      <Input
        label=" Postal Code "
        placeholder="Postal Code e.g. 11234"
        name="postalCode"
        value={postalCode}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.postalCode && touched.postalCode ? errors.postalCode : ""}
      />

      <Input
        label="Phone Number"
        placeholder="+4912345875"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : ""
        }
      />
    </>
  );
};
