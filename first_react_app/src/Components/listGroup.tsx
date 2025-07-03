import type { MouseEvent } from "react";

let array = ["Apple", "Banana", "Pineapple", "Orange"];

const handleClick = (event : MouseEvent) => console.log(event);

function ListGroup() {
  return array.length === 0 ? (
    <p>No item found</p>
  ) : (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {array.map((item) => {
          return (
            <li
              className="list-group-item"
              key={item}
              onClick={handleClick} // Added an onClick event
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
