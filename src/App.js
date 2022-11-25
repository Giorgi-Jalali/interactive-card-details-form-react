import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { useState } from "react";

import Head from "./components/Head";
import FormStateContainer from "./components/FormStateContainer";
import CompletedState from "./components/CompletedState";

export default function App() {
  const [completed, setCompleted] = useState(false);
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState(null);
  const [cvc, setCVC] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  return (
    <div>
      <GlobalStyle />
      <Main>
        <Head
          name={name}
          cardNumber={cardNumber}
          cvc={cvc}
          month={month}
          year={year}
        />
        {completed ? (
          <CompletedState
            setCompleted={setCompleted}
            setName={setName}
            setCardNumber={setCardNumber}
            setCVC={setCVC}
            setMonth={setMonth}
            setYear={setYear}
          />
        ) : (
          <FormStateContainer
            setCompleted={setCompleted}
            name={name}
            setName={setName}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            cvc={cvc}
            setCVC={setCVC}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
          />
        )}
      </Main>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    color: #21092F;
  }

`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;
