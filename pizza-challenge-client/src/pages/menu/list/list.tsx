import { PizzaItem } from "../../../types";
import { ItemCard } from "../itemCard";

interface ListProps {
  items: PizzaItem[];
}

export function List(props: ListProps) {
  const { items } = props;
  return (
    <div>
      {items.map((item: PizzaItem) => (
        <ItemCard item={item} />
      ))}
    </div>
  );
}
