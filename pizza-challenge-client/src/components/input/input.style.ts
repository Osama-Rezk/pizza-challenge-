import styled from "@emotion/styled";

export const StyledInput = styled.input({
  padding: ".375rem .75rem",
  fontSize: "1rem",
  lineHeight: 1.5,
  color: "#495057",
  backgroundColor: "#fff",
  border: "1px solid #ced4da",
  borderRadius: ".25rem",
  transition: " border-color .15s ease-in-out,box-shadow .15s ease-in-out",
  "&:focus": {
    borderColor: "#80bdff",
    outline: 0,
    boxShadow: "0 0 0 0.2rem rgb(0 123 255 / 25%)",
  },
});

export const InputContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  margin: "5px 0px",
});

export const InputLabel = styled.label({
  display: "inline-block",
  marginBottom: ".5rem",
});
