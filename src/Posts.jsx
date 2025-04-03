import React from "react";
import { useQuery } from "@tanstack/react-query";

const Posts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const fetchPosts = async () => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error fetching posts");

    const data = await response.json();
    console.log(data);
    return data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 10000,
    select: (data) => data.slice(0, 10),
  });
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error occured: {error.message}</p>;

  return (
    <>
      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
};

export default Posts;
