import { useState } from "react";
import StartGame from "./components/StartGame";
import GamPlay from "./components/GamPlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <GamPlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
