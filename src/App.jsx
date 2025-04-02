import { useQuery } from "@tanstack/react-query";
import "./App.css";
const url = "https://jsonplaceholder.typicode.com/posts";

const fetchPosts = async () => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Error fetching posts");

  const data = await response.json();
  console.log(data);
  return data;
};

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
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
}

export default App;
