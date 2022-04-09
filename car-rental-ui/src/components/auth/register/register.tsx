import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { LabeledInput } from "../../../tools/elements/input";
import {} from "@fortawesome/free-solid-svg-icons";
import FileBrowser from "../../../tools/elements/filebroserinput";

function Register() {
  const [isMailValid, setMailValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);
  const [isRepPasswordValid, setRepPasswordValid] = useState(true);

  const [isFirstnameValid, setFirstanmeValid] = useState(true);
  const [isLastnameValid, setLastnameValid] = useState(true);

  const [isBirthdateValid, setBirthdateValid] = useState(true);
  const [isPersIdValid, setPersIdValid] = useState(true);
  const [isMob1Valid, setMob1Valid] = useState(true);

  const [imageBase64, setImageBase] = useState<any>();
  return (
    <RegisterArea>
      <AreaHeader>Create New Account</AreaHeader>
      <UserRegisterArea>
        <InputPairsRow>
          <LabeledInput isInputValid>
            <input type="text" id="usernameInp" required /> {/* wtf? */}
            <label htmlFor="usernameInp">
              <span>Username</span>
            </label>
          </LabeledInput>

          <LabeledInput
            isInputValid={isMailValid}
            onChange={() => setMailValid(true)}
          >
            <input type="text" id="emailInp" required />
            <label htmlFor="emailInp">
              <span>Email*</span>
            </label>
          </LabeledInput>
        </InputPairsRow>

        <InputPairsRow>
          <LabeledInput
            isInputValid={isPasswordValid}
            onChange={() => setPasswordValid(true)}
          >
            <input type="password" id="passwordInp" required />
            <label htmlFor="passwordInp">
              <span>Password*</span>
            </label>
          </LabeledInput>

          <LabeledInput
            isInputValid={isRepPasswordValid}
            onChange={() => setRepPasswordValid(true)}
          >
            <input type="password" id="reppasswordInp" required />
            <label htmlFor="reppasswordInp">
              <span>Repeat password*</span>
            </label>
          </LabeledInput>
        </InputPairsRow>
      </UserRegisterArea>
      <AreaHeader>Profile Information</AreaHeader>

      <UserRegisterArea>
        <InputPairsRow>
          <LabeledInput
            isInputValid={isFirstnameValid}
            onChange={() => setFirstanmeValid(true)}
          >
            <input type="text" id="firstnameInp" required />
            <label htmlFor="firstnameInp">
              <span>Firstname*</span>
            </label>
          </LabeledInput>

          <LabeledInput
            isInputValid={isLastnameValid}
            onChange={() => setLastnameValid(true)}
          >
            <input type="text" id="lastnameInp" required />
            <label htmlFor="lastnameInp">
              <span>Lastname*</span>
            </label>
          </LabeledInput>
        </InputPairsRow>

        <InputPairsRow>
          <LabeledInput
            isInputValid={isBirthdateValid}
            onChange={() => setBirthdateValid(true)}
          >
            <input type="date" id="datePicker" required />
            <label htmlFor="persId">
              <span>Birth date*</span>
            </label>
          </LabeledInput>

          <LabeledInput
            isInputValid={isPersIdValid}
            onChange={() => setPersIdValid(true)}
          >
            <input type="text" id="persId" required />
            <label htmlFor="persId">
              <span>Personal number*</span>
            </label>
          </LabeledInput>
        </InputPairsRow>

        <InputPairsRow>
          <LabeledInput
            isInputValid={isMob1Valid}
            onChange={() => setMob1Valid(true)}
          >
            <input type="text" id="mob1" required />
            <label htmlFor="mob1">
              <span>Mobile 1*</span>
            </label>
          </LabeledInput>

          <LabeledInput isInputValid>
            <label htmlFor="mob2">
              <input type="text" id="mob2" required />
              <span>Mobile 2</span>
            </label>
          </LabeledInput>
        </InputPairsRow>

        <InputPairsRow>
          <FileBrowser setImageBase={setImageBase} />

          <div>test</div>
        </InputPairsRow>
      </UserRegisterArea>
    </RegisterArea>
  );
}

export default Register;

const RegisterArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AreaHeader = styled.div`
  width: 100%;
  border-bottom: 3px solid #0089a6;
  font-weight: bold;
  font-size: 14px;
  padding-bottom: 5px;
  box-sizing: border-box;

  @media ${(props) => props.theme.breakPoints.mobileS} {
    padding-left: 5px;
    padding-right: 5px;
  }
  @media ${(props) => props.theme.breakPoints.mobileM} {
    padding-left: 5px;
    padding-right: 5px;
  }
  @media ${(props) => props.theme.breakPoints.mobileL} {
    padding-left: 5px;
    padding-right: 5px;
  }
  @media ${(props) => props.theme.breakPoints.tablet} {
  }
  @media ${(props) => props.theme.breakPoints.laptop} {
  }
  @media ${(props) => props.theme.breakPoints.laptopL} {
  }
  @media ${(props) => props.theme.breakPoints.desktop} {
  }
`;

const UserRegisterArea = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  box-sizing: border-box;

  @media ${(props) => props.theme.breakPoints.mobileS} {
    padding-left: 5px;
    padding-right: 5px;
  }
  @media ${(props) => props.theme.breakPoints.mobileM} {
    padding-left: 5px;
    padding-right: 5px;
  }
  @media ${(props) => props.theme.breakPoints.mobileL} {
    padding-left: 5px;
    padding-right: 5px;
  }
  @media ${(props) => props.theme.breakPoints.tablet} {
  }
  @media ${(props) => props.theme.breakPoints.laptop} {
  }
  @media ${(props) => props.theme.breakPoints.laptopL} {
  }
  @media ${(props) => props.theme.breakPoints.desktop} {
  }
`;

const InputPairsRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  @media ${(props) => props.theme.breakPoints.mobileS} {
    gap: 15px;
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakPoints.mobileM} {
    gap: 15px;
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakPoints.mobileL} {
    gap: 15px;
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakPoints.tablet} {
    gap: 20%;
    flex-direction: row;
  }
  @media ${(props) => props.theme.breakPoints.laptop} {
    gap: 20%;
    flex-direction: row;
  }
  @media ${(props) => props.theme.breakPoints.laptopL} {
    gap: 20%;
    flex-direction: row;
  }
  @media ${(props) => props.theme.breakPoints.desktop} {
    gap: 20%;
    flex-direction: row;
  }
`;
