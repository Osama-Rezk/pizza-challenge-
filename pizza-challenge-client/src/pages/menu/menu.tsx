import { useState } from "react";
import { useQuery } from "react-query";

import { List } from "./list";
import { PizzaItem } from "../../types";
import { ItemOptionsModal } from "./itemOptionsModal";
import { client } from "../../utils";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({} as PizzaItem);

  const { isLoading, error, data } = useQuery("pizzas", () => client("pizzas"));

  const onItemClick = (item: PizzaItem) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div> An error has occurred: </div>;

  return (
    <div style={{ width: "100%" }}>
      <List onItemClick={onItemClick} items={data} />
      <ItemOptionsModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedItem={selectedItem}
      />
    </div>
  );
}
