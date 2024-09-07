import Centerbox from "./components/Centerbox.jsx";
import { useState } from "react";

export default function App() {
  const [state, setState] = useState(false);

  function handleState() {
    setState(!state);
  }

  return (
    <div className="container">
      <Centerbox state={state} setState={handleState} />
    </div>
  );
}
