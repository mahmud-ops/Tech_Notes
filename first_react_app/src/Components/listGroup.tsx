import { useState } from "react";

let array = ["Apple", "Banana", "Pineapple", "Orange","kiwi"];

function ListGroup() {
  // -1 is the initial state (index -1)
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  return array.length === 0 ? (
    <p>No item found</p>
  ) : (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {array.map((item, index) => {
          return (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index); // Call
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
