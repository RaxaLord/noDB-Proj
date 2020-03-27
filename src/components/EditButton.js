import React from "react";

export default function EditButton(props) {
  return (
    <div>
      <button onClick={() => props.editPost(props.id)}>{props.edit}</button>
    </div>
  );
}
