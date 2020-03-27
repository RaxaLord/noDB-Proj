import React from "react";

export default function DeleteButton(props) {
  return (
    <div>
      <button onClick={() => props.deletePost(props.id)}>{props.delete}</button>
    </div>
  );
}
