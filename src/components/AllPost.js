import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import Date from "./Date";
import Entry from "./Entry";
import "./AllPost.css";

export default function AllPost(props) {
  const mappedPosts = props.posts.map(elem => {
    return (
      <div className="entries" key={elem.id}>
        <div className="post-header">
          <Date date={elem.date} />

          <div className="post-buttons">
            <EditButton
              id={elem.id}
              editPost={props.deletePost}
              edit={"Edit"}
            />
            <DeleteButton
              id={elem.id}
              deletePost={props.deletePost}
              delete={"Delete"}
            />
          </div>
        </div>

        <Entry content={elem.content} />
      </div>
    );
  });

  return <div className="posts">{mappedPosts}</div>;
}
