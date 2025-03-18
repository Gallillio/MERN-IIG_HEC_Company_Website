import React from "react";
import Title from "../../components/Title";
import BlogForm from "../../components/BlogForm";
const Index = () => {
  return (
    <div className="flex flex-col">
      <Title title={"Blog"} />
      <BlogForm />
    </div>
  );
};

export default Index;
