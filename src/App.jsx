import { useState } from "react";
import "./App.css";
import Posts from "./Posts";

function App() {
  const [toggled, setToggled] = useState(false);

  const HandleSetToggled = () => {
    setToggled((prev) => !prev);
  };

  return (
    <>
      <button onClick={HandleSetToggled}>Toggle Posts</button>
      {toggled && <Posts />}
    </>
  );
}

export default App;
