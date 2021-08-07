import { PizzaItem } from "../../../types";
import {
  Container,
  StyledImage,
  Name,
  Description,
  InfoContainer,
  Price,
  PriceBtnContainer,
} from "./itemCard.style";
import { Plus } from "../../../components/icons";

interface ItemCardProps {
  item: PizzaItem;
  onClick: (item: PizzaItem) => void;
}

export function ItemCard(props: ItemCardProps) {
  const { item, onClick } = props;
  const { name, images, description } = item;
  return (
    <Container onClick={() => onClick(item)}>
      <StyledImage
        alt={`a picture of Pizza ${name}`}
        id="artistpic"
        src={images[0]}
        placeHolderStyle={{ height: 200 }}
      />
      <InfoContainer>
        <Name aria-label="Pizza Name" data-testid="name">
          {name}
        </Name>
        <Description aria-label="Pizza description" data-testid="description">
          {description}
        </Description>
        <PriceBtnContainer>
          <Price aria-label="Pizza Price " data-testid="category">
            $ Price based on Selection
          </Price>
          <Plus style={{ cursor: "pointer" }} />
        </PriceBtnContainer>
      </InfoContainer>
    </Container>
  );
}
