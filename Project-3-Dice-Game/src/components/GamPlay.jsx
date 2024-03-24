import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, Outline } from "../styled/Button";
import Rules from "./Rules";

const GamPlay = () => {
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectorNumber, setSelectorNumber] = useState();
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generatedRandomNumbers = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectorNumber) {
      setError("You have not selected any Number");
      return;
    }
    const randomeNumber = generatedRandomNumbers(1, 7);
    setCurrentDice((prev) => randomeNumber);

    if (selectorNumber === randomeNumber) {
      setScore((prev) => prev + randomeNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectorNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="topSection">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectorNumber={selectorNumber}
          setSelectorNumber={setSelectorNumber}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        {" "}
        <Outline onClick={resetScore}>Reset</Outline>
        {}
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamPlay;

const MainContainer = styled.main`
  padding: 70px;
  .topSection {
    display: flex;
    align-items: end;
    justify-content: space-around;
  }
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
  }
`;
