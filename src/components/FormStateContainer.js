import styled, { css } from "styled-components";
import ReactInputMask from "react-input-mask";

export default function formStateContainer(props) {
  const {
    setCompleted,
    name,
    setName,
    cardNumber,
    setCardNumber,
    cvc,
    setCVC,
    month,
    setMonth,
    year,
    setYear,
  } = props;

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleNumber = (e) => {
    setCardNumber(e.target.value.replace(/[^0-9]+/g, ""));
  };

  const handleMonth = (e) => {
    setMonth(e.target.value.replace(/1[3-9]|[2-9][0-9]/, "12").substring(0, 2));
  };

  const handleYear = (e) => {
    setYear(e.target.value.substring(0, 2));
  };

  const handleCVC = (e) => {
    setCVC(e.target.value.substring(0, 3));
  };

  const handleClick = () => {
    if (name && cardNumber && cvc && month && year) {
      setCompleted(true);
    }
  };

  return (
    <Form>
      <Label htmlFor="name">CARDHOLDER NAME</Label>
      <Input
        type="text"
        maxLength={25}
        id="name"
        name="name"
        placeholder="e.g. Jane Appleseed"
        onChange={(e) => handleName(e)}
        required
      />
      <Error>
        {name.match(/[^a-zA-Z\s]/) ? "Wrong format, letters only" : ""}
      </Error>
      <Label htmlFor="card-number">CARD NUMBER</Label>

      <NumberInput
        type="text"
        mask="9999 9999 9999 9999"
        maskChar={null}
        id="card-number"
        name="card-number"
        placeholder="e.g. 1234 5678 9123 0000"
        onChange={(e) => handleNumber(e)}
        required
      />
      <DateCVC>
        <div>
          <Label htmlFor="date">Exp. Date (MM/YY)</Label>
          <MonthYear>
            <Month
              type="number"
              id="date"
              name="month"
              value={month}
              placeholder="MM"
              onChange={(e) => handleMonth(e)}
              required
            />
            <Year
              type="number"
              id="date"
              name="year"
              value={year}
              placeholder="YY"
              onChange={(e) => handleYear(e)}
              required
            />
          </MonthYear>
          <Error>{month && year ? "" : "Can't be blank"}</Error>
        </div>

        <div>
          <Label htmlFor="cvc">CVC</Label>
          <CVC
            type="number"
            id="cvc"
            name="cvc"
            value={cvc}
            placeholder="e.g. 123"
            onChange={(e) => handleCVC(e)}
            required
          />
          <Error>{cvc ? "" : "Can't be blank"}</Error>
        </div>
      </DateCVC>
      <SubmitButton
        type="submit"
        value="Confirm"
        onClick={() => handleClick()}
      />
    </Form>
  );
}

const Form = styled.form`
  max-width: 375px;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  margin: 0 auto;
  @media (min-width: 900px) {
    justify-content: center;
  }
`;

const Label = styled.label`
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 2px;
  margin-top: 20px;
`;

const sharedStyle = css`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  border: 1px solid #dfdee0;
  border-radius: 8px;
  outline: none;
  appearance: textfield;
  padding: 11px 0 11px 16px;
  margin: 9px 0;
`;

const NumberInput = styled(ReactInputMask)`
  ${sharedStyle}
`;

const Input = styled.input`
  ${sharedStyle}
`;

const Error = styled.div`
  color: #ff5050;
  font-size: 12px;
  line-height: 15px;
`;

const DateCVC = styled.div`
  display: flex;
  margin-top: 20px;
`;

const MonthYear = styled.div`
  display: flex;
`;

const Month = styled.input`
  max-width: 72px;
  ${sharedStyle}
`;

const Year = styled.input`
  ${sharedStyle}
  max-width: 72px;
  margin-left: 8px;
  margin-right: 11px;
`;

const CVC = styled.input`
  ${sharedStyle}
  max-width: 164px;
`;

const SubmitButton = styled.input`
  background-color: #21092f;
  border-radius: 8px;
  color: white;
  outline: none;
  border: none;
  padding: 15px 0;
  margin-top: 20px;
  margin-bottom: 50px;
  cursor: pointer;
`;
