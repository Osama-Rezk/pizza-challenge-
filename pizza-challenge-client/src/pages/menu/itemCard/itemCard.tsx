import { PizzaItem } from "../../../types";

interface ItemCardProps {
  item: PizzaItem;
}

export function ItemCard(props: ItemCardProps) {
  const { item } = props;
  return (
    <div>
      <h1>Pizza Menu</h1>
      <p>This is the menu for a local pizza place.</p>
    </div>
  );
}
