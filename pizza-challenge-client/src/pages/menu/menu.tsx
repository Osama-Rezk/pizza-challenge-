import { useState } from "react";
import { List } from "./list";
import { Modal } from "../../components/modal";
import { PizzaItem } from "../../types";

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
        here i am
      </Modal>
    </div>
  );
}
