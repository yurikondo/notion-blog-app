import React from "react";
type Props = {
  title: string;
  description: string;
  date: string;
  tag: string;
};

const SinglePost = (props: Props) => {
  const { title, description, date, tag } = props;
  return <div>{title}</div>;
};

export default SinglePost;
