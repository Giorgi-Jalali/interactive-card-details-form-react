// import styled, { css } from "styled-components";
import styled from "styled-components";
import complete from "../images/icon-complete.svg";

export default function CompletedState(props) {
  const { setCompleted, setName, setCardNumber, setCVC, setMonth, setYear } =
    props;

  const handleReset = () => {
    setCompleted(false);
    setName("");
    setCardNumber(null);
    setCVC(null);
    setMonth(null);
    setYear(null);
  };

  return (
    <ThanksContainer>
      <Icon />
      <H1>Thank you!</H1>
      <Paragraph>We've added your card details</Paragraph>
      <Continue onClick={() => handleReset()}>Continue</Continue>
    </ThanksContainer>
  );
}

const ThanksContainer = styled.div`
  max-width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  margin: 0 auto;
`;

const Icon = styled.div`
  background: url(${complete});
  background-repeat: no-repeat;
  background-size: cover;
  width: 80px;
  height: 80px;
  margin: 30px 0;
`;

const H1 = styled.h1`
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 3.42222px;
`;

const Paragraph = styled.p`
  color: #8f8694;
  margin: 16px 0 40px 0;
`;

const Continue = styled.div`
  background-color: #21092f;
  border-radius: 8px;
  color: white;
  width: 100%;
  text-align: center;
  padding: 15px 0;
  margin-bottom: 50px;
  cursor: pointer;
`;
