import { List } from "./list";

export function Menu() {
  return (
    <div>
      <List
        items={[
          {
            id: "pizza",
            name: "Pizza",
            price: 15,
            description: "A classic pizza with our special sauce.",
            images: [],
          },
        ]}
      />
    </div>
  );
}
