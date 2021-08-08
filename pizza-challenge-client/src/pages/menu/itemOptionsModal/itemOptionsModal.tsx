import { ChangeEvent, useState } from "react";
import { Modal, CheckInput, Accordion } from "../../../components";
import { PizzaItem, Size, Addon } from "../../../types";
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
  OptionsContainer,
} from "./itemOptionsModal.style";

interface ItemOptionsModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedItem: PizzaItem;
}

export const ItemOptionsModal = (props: ItemOptionsModalProps) => {
  const { setIsOpen, isOpen, selectedItem } = props;
  const [size, setSize] = useState("");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const { name, description, sizes = [], addons = [] } = selectedItem;

  const renderSizes = () => {
    return sizes.map(({ name, price }: Size, index) => (
      <CheckInput
        value={name.toLowerCase()}
        onChange={(e) => setSize(e.target.value)}
        checked={name.toLowerCase() === size}
        key={index}
        label={`${name} (${price})`}
      />
    ));
  };

  const renderAddOns = () => {
    return addons.map(({ name, price }: Addon, index) => (
      <CheckInput
        value={name.toLowerCase()}
        onChange={handleAddonChange}
        checked={selectedAddons.includes(name.toLowerCase())}
        key={index}
        type="checkbox"
        label={`${name} (${price})`}
      />
    ));
  };

  function handleAddonChange(e: ChangeEvent<HTMLInputElement>) {
    let addonsCopy = [...selectedAddons];

    if (e.target.checked) {
      addonsCopy.push(e.target.value);
    } else {
      addonsCopy = addonsCopy.filter((x) => x !== e.target.value);
    }
    setSelectedAddons(addonsCopy);
  }

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
        <OptionsContainer>{renderSizes()}</OptionsContainer>
      </Accordion>

      <Accordion
        title="Topping (Choose items from the list)"
        isOpenDefault={true}
      >
        <OptionsContainer>{renderAddOns()}</OptionsContainer>
      </Accordion>
    </Modal>
  );
};
