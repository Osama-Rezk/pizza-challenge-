import { Link } from "react-router-dom";
import { Container, NameBtnContainer, UserName } from "./header.style";
import { useAuth } from "../../context/authContext";
import { HTMLAttributes } from "react";

export const Header = (props: HTMLAttributes<HTMLHeadElement>) => {
  const { user } = useAuth();

  return (
    <Container {...props}>
      <Link to="/" data-testid="home" aria-label="home page">
        <div>Home</div>
      </Link>
      <NameBtnContainer>
        <UserName data-testid="name">Welcome {user.name}</UserName>
      </NameBtnContainer>
    </Container>
  );
};
