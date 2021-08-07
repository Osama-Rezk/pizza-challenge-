import { useState } from "react";
import { List } from "./list";
import { Modal } from "../../components/modal";
import { PizzaItem } from "../../types";
import { Accordion } from "../../components";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(false);

  const onItemClick = (item: PizzaItem) => {
    setCurrentItem(currentItem);
    setIsOpen(true);
  };

  return (
    <div style={{ width: "100%" }}>
      <List
        onItemClick={onItemClick}
        items={[
          {
            id: "pizza",
            name: "Pizza",
            price: 15,
            description: "A classic pizza with our special sauce.",
            images: [],
          },
          {
            id: "pizza",
            name: "Pizza",
            price: 15,
            description: "A classic pizza with our special sauce.",
            images: [],
          },
          {
            id: "pizza",
            name: "Pizza",
            price: 15,
            description: "A classic pizza with our special sauce.",
            images: [],
          },
          {
            id: "pizza",
            name: "Pizza",
            price: 15,
            description: "A classic pizza with our special sauce.",
            images: [],
          },
          {
            id: "pizza",
            name: "Pizza",
            price: 15,
            description: "A classic pizza with our special sauce.",
            images: [],
          },
          {
            id: "pizza",
            name: "Pizza",
            price: 15,
            description: "A classic pizza with our special sauce.",
            images: [],
          },
          {
            id: "pizza",
            name: "Pizza",
            price: 15,
            description: "A classic pizza with our special sauce.",
            images: [],
          },
        ]}
      />
      <Modal
        title={"Add Item Choices"}
        onClose={() => {
          setIsOpen(false);
        }}
        open={isOpen}
      >
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
    </div>
  );
}
