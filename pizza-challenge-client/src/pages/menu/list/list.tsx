import { PizzaItem } from "../../../types";
import { ItemCard } from "../itemCard";
import { Container } from "./list.style";
interface ListProps {
  items: PizzaItem[];
}

export function List(props: ListProps) {
  const { items } = props;
  return (
    <Container data-testid="pizza-list">
      {items.map((item: PizzaItem) => (
        <ItemCard item={item} />
      ))}
    </Container>
  );
}
