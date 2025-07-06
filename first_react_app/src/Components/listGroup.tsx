import { useState } from "react";

interface ListGroupProps {
  item: string[];
  heading: string;
  onSelect: (item: string) => void;
}

let array = ["Apple", "Banana", "Pineapple", "Orange", "kiwi"]; // Array (Global)

function ListGroup({ item, heading, onSelect }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return item.length === 0 ? (
    <p>No item found</p>
  ) : (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {item.map((item, index) => {
          return (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelect(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
export { array };
