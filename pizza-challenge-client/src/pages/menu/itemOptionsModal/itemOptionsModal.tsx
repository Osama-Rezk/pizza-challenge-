import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Modal,
  CheckInput,
  Accordion,
  Button,
  Error,
} from "../../../components";
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
  ButtonContainer,
} from "./itemOptionsModal.style";
import { calculatePizzaPrice } from "../../../utils";

interface ItemOptionsModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedItem: PizzaItem;
}

export const ItemOptionsModal = (props: ItemOptionsModalProps) => {
  const { setIsOpen, isOpen, selectedItem } = props;
  const [size, setSize] = useState({} as Size);
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);
  const [error, setError] = useState("");

  const { name, description, sizes = [], addons = [] } = selectedItem;

  const price = calculatePizzaPrice(size, selectedAddons);

  const canCheckout = !!(size.name && selectedAddons.length);

  const history = useHistory();

  useEffect(() => {
    if (!isOpen) {
      setSize({} as Size);
      setSelectedAddons([]);
    }
  }, [isOpen]);

  const renderSizes = () => {
    return sizes.map(({ name, price }: Size, index) => (
      <CheckInput
        value={name}
        onChange={() => setSize({ name, price })}
        checked={name === size.name}
        key={index}
        label={`${name} (${price})`}
      />
    ));
  };

  const renderAddOns = () => {
    return addons.map(({ name, price }: Addon, index) => (
      <CheckInput
        value={name}
        onChange={(e) => handleAddonChange({ name, price }, e.target.checked)}
        checked={selectedAddons.findIndex((addon) => addon.name === name) > -1}
        key={index}
        type="checkbox"
        label={`${name} (${price})`}
      />
    ));
  };

  function handleAddonChange({ name, price }: Addon, checked: boolean) {
    let addonsCopy = [...selectedAddons];

    if (checked) {
      addonsCopy.push({ name, price });
    } else {
      addonsCopy = addonsCopy.filter((addon) => addon.name !== name);
    }
    setSelectedAddons(addonsCopy);
  }

  function goToCheckout() {
    if (!canCheckout) {
      return setError(`You must select a size and at least addons`);
    }
    localStorage.setItem(
      "pizza",
      JSON.stringify({
        ...selectedItem,
        size,
        selectedAddons,
      })
    );

    history.push("/checkout");
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

        {price > 0 ? (
          <PriceContainer>
            <PriceLabel>Price:</PriceLabel>
            <QtyPriceContainer>
              <CurrencySymbol>$</CurrencySymbol>
              <Quantity>{price}</Quantity>
            </QtyPriceContainer>
          </PriceContainer>
        ) : (
          "Price On Selection"
        )}
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

      <ButtonContainer>
        <div>
          {!canCheckout && error && <Error>{error}</Error>}
          <Button
            style={{ width: "200px" }}
            label="CHECKOUT"
            onClickHandler={goToCheckout}
          />
        </div>
      </ButtonContainer>
    </Modal>
  );
};
