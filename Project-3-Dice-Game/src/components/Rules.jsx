import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to ply Dice Game</h2>
      <div className="text">
        <p>Select any Number</p>
        <p>Click on dice image</p>
        <p>
          After click on dice if selected number is equal to dice number you
          will get 2 points
        </p>
        <p>If you are wrong guess then 2 points will be deducted</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 24px;
  border-radius: 10px;

  h2 {
    font-size: 24px;
  }

  .text {
    margin-top: 24px;
  }
`;
