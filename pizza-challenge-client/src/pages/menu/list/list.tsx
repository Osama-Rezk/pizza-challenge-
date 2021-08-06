import { PizzaItem } from "../../../types";
import { ItemCard } from "../itemCard";
import { Container } from "./list.style";
interface ListProps {
  items: PizzaItem[];
}

export function List(props: ListProps) {
  const { items } = props;
  return (
    <Container>
      {items.map((item: PizzaItem) => (
        <ItemCard item={item} />
      ))}
    </Container>
  );
}
