import { useAuth } from "../../context/authContext";

export const OrderConfirmation = () => {
  const { user } = useAuth();

  return (
    <div data-testid="confirmation-page">
      <h1>Thank You{user.name} For Your Order </h1>
    </div>
  );
};
