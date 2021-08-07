import { useState } from "react";
import { Modal, RadioButton, Accordion } from "../../../components";
import { PizzaItem, Size } from "../../../types";
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
  SizesContainer,
} from "./itemOptionsModal.style";

interface ItemOptionsModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedItem: PizzaItem;
}

export const ItemOptionsModal = (props: ItemOptionsModalProps) => {
  const { setIsOpen, isOpen, selectedItem } = props;
  const [size, setSize] = useState("");
  const { name, description, sizes = [] } = selectedItem;

  const renderSizes = () => {
    return sizes.map(({ name, price }: Size, index) => (
      <RadioButton
        value={name.toLowerCase()}
        onChange={(e) => setSize(e.target.value)}
        checked={name.toLowerCase() === size}
        key={index}
        label={`${name} (${price})`}
      />
    ));
  };

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
        <SizesContainer>{renderSizes()}</SizesContainer>
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
