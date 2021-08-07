import { Modal } from "../../../components/modal";
import { Accordion } from "../../../components";
import { PizzaItem } from "../../../types";
import {
  Name,
  Description,
  NameDescriptionContainer,
  InfoContainer,
  PriceContainer,
  PriceLabel,
  Quantity,
  CurrencySymbol,
  QtyPriceContainer,
} from "./itemOptionsModal.style";

interface ItemOptionsModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedItem: PizzaItem;
}

export const ItemOptionsModal = (props: ItemOptionsModalProps) => {
  const { setIsOpen, isOpen, selectedItem } = props;

  const { name, description } = selectedItem;

  return (
    <Modal
      title={"Add Item Choices"}
      onClose={() => {
        setIsOpen(false);
      }}
      open={isOpen}
    >
      <InfoContainer>
        <NameDescriptionContainer>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </NameDescriptionContainer>

        <PriceContainer>
          <PriceLabel>Price:</PriceLabel>
          <QtyPriceContainer>
            <CurrencySymbol>$</CurrencySymbol>
            <Quantity>550</Quantity>
          </QtyPriceContainer>
        </PriceContainer>
      </InfoContainer>

      <Accordion title="Please Choose (choose one )" isOpenDefault={true}>
        Sizes
      </Accordion>

      <Accordion
        title="Topping (Choose items from the list)"
        isOpenDefault={true}
      >
        Topping
      </Accordion>
    </Modal>
  );
};
