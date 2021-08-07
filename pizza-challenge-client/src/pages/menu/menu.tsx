import { useState } from "react";
import { List } from "./list";
import { PizzaItem } from "../../types";
import { ItemOptionsModal } from "./itemOptionsModal";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({} as PizzaItem);

  const onItemClick = (item: PizzaItem) => {
    setSelectedItem(item);
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
      <ItemOptionsModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedItem={selectedItem}
      />
    </div>
  );
}
