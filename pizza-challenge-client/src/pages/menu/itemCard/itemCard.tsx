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
}

export function ItemCard(props: ItemCardProps) {
  const { item } = props;
  const { name, images, description } = item;
  return (
    <Container>
      <StyledImage
        alt={`a picture of hotel ${name}`}
        id="artistpic"
        src={images[0]}
        placeHolderStyle={{ height: 200 }}
      />
      <InfoContainer>
        <Name aria-label="Hotel Name" data-testid="name">
          {name}
        </Name>
        <Description aria-label="Hotel description" data-testid="description">
          {description}
        </Description>
        <PriceBtnContainer>
          <Price aria-label="distance Price Category" data-testid="category">
            $ Price based on Selection
          </Price>
          <Plus />
        </PriceBtnContainer>
      </InfoContainer>
    </Container>
  );
}
