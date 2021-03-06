import { PizzaItem } from "../../../types";
import { ItemCard } from "../itemCard";
import { Container } from "./list.style";
interface ListProps {
  items: PizzaItem[];
  onItemClick: (item: PizzaItem) => void;
}

export function List(props: ListProps) {
  const { items = [], onItemClick } = props;
  return (
    <Container data-testid="pizza-list">
      {items.map((item: PizzaItem, index) => (
        <ItemCard
          onClick={onItemClick}
          item={item}
          key={`${index}_${item.name}`}
        />
      ))}
    </Container>
  );
}
