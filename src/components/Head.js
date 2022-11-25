import styled from "styled-components";
import mobileBackground from "../images/bg-main-mobile.png";
import cardBack from "../images/bg-card-back.png";
import cardFront from "../images/bg-card-front.png";
import cardLogo from "../images/card-logo.svg";
import ReactInputMask from "react-input-mask";

export default function Head(props) {
  const { name, cardNumber, cvc, month, year } = props;

  return (
    <Header>
      <Cards>
        <CardBack>
          <CVC>{cvc || "000"}</CVC>
        </CardBack>
        <CardFront>
          <CardLogo></CardLogo>
          <Details>
            <Number
              mask="9999 9999 9999 9999"
              maskChar={null}
              value={cardNumber || "0000 0000 0000 0000"}
            />
            <NameDate>
              <Name>{name || "JANE APPLESEED"}</Name>
              <Date>{month && year ? `${month}/${year}` : "00/00"}</Date>
            </NameDate>
          </Details>
        </CardFront>
      </Cards>
    </Header>
  );
}

const Header = styled.header`
  background-image: url(${mobileBackground});
  background-repeat: no-repeat;
  background-size: cover;
  width: 99vw;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  z-index: -1;
  @media (min-width: 900px) {
    width: 30vw;
    height: 100vh;
    margin-bottom: 0;
    justify-content: end;
  }
`;

const Cards = styled.div`
  width: 342px;
  margin-bottom: -80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardBack = styled.div`
  width: 286px;
  height: 157px;
  border-radius: 6px;
  background-image: url(${cardBack});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 72px 35px 73px 229px;
  margin-left: 50px;
  order: 1;
  @media (min-width: 900px) {
    order: 2;
    margin-top: 30px;
    margin-right: -15vw;
  }
`;

const CVC = styled.div`
  color: white;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 1.28571px;
`;

const CardFront = styled.div`
  border-radius: 6px;
  background-image: url(${cardFront});
  background-repeat: no-repeat;
  background-size: cover;
  width: 285px;
  height: 156px;
  margin-top: -50px;
  padding: 20px 45px 20px 20px;
  order: 2;
  @media (min-width: 900px) {
    order: 1;
    margin-top: -150px;
    margin-right: -10vw;
  }
`;

const CardLogo = styled.div`
  background-image: url(${cardLogo});
  background-repeat: no-repeat;
  background-size: contain;
  width: 60px;
  height: 30px;
`;

const Details = styled.div`
  margin-top: 37px;
`;

const Number = styled(ReactInputMask)`
  background: none;
  border: none;
  color: white;
  letter-spacing: 2.2px;
`;

const NameDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 17px;
`;

const Name = styled.div`
  color: white;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
`;

const Date = styled.div`
  color: white;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 1.28571px;
`;
