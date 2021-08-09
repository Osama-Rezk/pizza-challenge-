import styled from "@emotion/styled";

export const Container = styled.header({
  display: "flex",
  alignItems: "center",
  height: 60,
  background: "#fff",
  borderBottom: "1px solid #D9DDE4",
  overflow: "hidden",
  justifyContent: "space-between",
  marginBottom: 10,
  border: "1px solid rgb(0 11 38 / 12%)",
  boxShadow: "0 1px 0 0 rgb(0 11 38 / 12%)",
});

export const NameBtnContainer = styled.div({
  display: "flex",
  alignItems: "center",
});

export const UserName = styled.div({
  margin: "0 10px",
});
