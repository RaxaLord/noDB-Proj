import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import Date from "./Date";
import Entry from "./Entry";
import "./Posts.css";

export default function AllPost(props) {
  const mappedPosts = props.posts.map(elem => {
    return (
      <div className="entries" key={elem.id}>
        <div className="post-header">
          <Date date={elem.date} />

          {/* <div className="post-buttons"> */}
          <DeleteButton
            id={elem.id}
            deletePost={props.deletePost}
            delete={"Delete"}
          />
        </div>
        {/* </div> */}

        <EditButton
          content={elem.content}
          id={elem.id}
          editPost={props.editPost}
          edit={"Edit"}
        />

        {/* <Entry content={elem.content} /> */}
      </div>
    );
  });

  return <div className="posts">{mappedPosts}</div>;
}
