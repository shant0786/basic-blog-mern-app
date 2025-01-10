import React from "react";

export const BlogDetails = ({ list }) => {
  return (
    <div className="container my-16 p-9">
      <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
        <div className="card mx-auto bg-base-100 w-1/3 shadow-xl">
          <figure>
            <img src={list.postDetails.img} alt={list.postDetails.content} />
          </figure>
          <div className="card-body">
            <p>{list.postDetails.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
