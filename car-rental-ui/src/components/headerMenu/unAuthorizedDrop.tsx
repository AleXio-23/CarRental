import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css, CSSProp } from "styled-components";
import iconGoogle from "../../images/social/iconGoogle.png";
import iconFacebook from "../../images/social/iconFacebook.png";
import { useNavigate } from "react-router-dom";

const UnAuthorizedDrop = () => {
  //   const [isUsernameOrMailValid, setUsernameOrMailValid] = useState(true);
  const navigate = useNavigate();

  return (
    <UnauthorizedArea>
      <SignInForm>
        <InputPair>
          <label htmlFor="usernameInp">
            <span>User</span>
          </label>
          <InputWrapper>
            <div className="inputIcon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <input
              className="inputBox"
              //   onChange={(e) => setUserEmail(e.target.value)}
              type="text"
              placeholder="Username or mail"
            />
          </InputWrapper>
        </InputPair>

        <InputPair>
          <label htmlFor="usernameInp">
            <span>Password</span>
          </label>
          <InputWrapper>
            <div className="inputIcon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <input
              className="inputBox"
              //   onChange={(e) => setUserEmail(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </InputWrapper>
        </InputPair>

        <FormSubmitArea>
          <a href="/" className="rememberPass">
            Forgot password?
          </a>
          <a href="/" className="signInBtn ">
            Sign In
          </a>
        </FormSubmitArea>
      </SignInForm>

      <SeparatorLine>
        <div className="strike">
          <span>Login With</span>
        </div>
      </SeparatorLine>

      <SocialButtons>
        <SocialBtn customStyle={facebookCssClass}>
          <IconImageSocial
            customStyle={iconFacebookSt}
            src={iconFacebook}
            alt="facebookBtn"
          />
          <span className="socialBtnText">Login with Facebook</span>
        </SocialBtn>
        <SocialBtn customStyle={googleCssClass}>
          <IconImageSocial
            customStyle={iconGoogleSt}
            src={iconGoogle}
            alt="googleBtn"
          />
          <span className="socialBtnText">Login with Google</span>
        </SocialBtn>
      </SocialButtons>

      <SeparatorLine>
        <div className="strike">
          <span>Or</span>
        </div>
      </SeparatorLine>

      <SocialBtn
        customStyle={signUpBtnCss}
        onClick={() => navigate("/register")}
      >
        <span className="registerIcon">Cr</span>
        <span className="socialBtnText">Sign Up</span>
      </SocialBtn>
    </UnauthorizedArea>
  );
};

export default UnAuthorizedDrop;

const UnauthorizedArea = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
const InputPair = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 5px;
  font-weight: 100;
  margin-bottom: 15px;

  label span {
    letter-spacing: 1;
    font-size: 14px;
    font-weight: 400;
  }
`;
// const inputStyles = css``;

const SignInForm = styled.div`
  box-sizing: border-box;
  padding: 10px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 35px;
  border-radius: 5px;
  color: gray;
  background-color: white;

  .inputIcon {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inputBox {
    background: none;
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
  }
`;

const FormSubmitArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  a {
    text-decoration: none;
    color: #b9b9b9;
    font-weight: 500;
    letter-spacing: 0;
    font-size: 14px;
  }
  &:hover {
    color: #0089a6;
    transition: color 100ms linear;
  }
  .signInBtn {
    background-color: #0089a6;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
    color: white !important;
  }

  .signInBtn:hover {
    background-color: #25bad8;
    transition: background-color 200ms linear;
  }
  .rememberPass:hover {
    color: #0089a6;
    transition: color 200ms linear;
  }
`;

const SeparatorLine = styled.div`
  width: 100%;
  margin-bottom: 5px;
  padding: 10px;
  box-sizing: border-box;

  .strike {
    display: block;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
  }

  .strike > span {
    position: relative;
    display: inline-block;
    color: gray;
    font-size: 14px;
    font-weight: 500;
  }

  .strike > span:before,
  .strike > span:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 9999px;
    height: 1px;
    background: gray;
  }

  .strike > span:before {
    right: 100%;
    margin-right: 10px;
  }

  .strike > span:after {
    left: 100%;
    margin-left: 10px;
  }
`;

const SocialButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  padding-top: 0;
`;

const SocialBtn = styled.a<{
  customStyle?: CSSProp;
}>`
  box-sizing: border-box;
  position: relative;
  /* width: 13em;  - apply for fixed size */
  margin: 0.2em;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 13px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;

  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
  }

  .socialBtnText {
    width: 100%;
    padding-left: 10px;
  }

  ${(props) => props.customStyle};
`;

const facebookCssClass = css`
  background-color: #4c69ba;
  background-image: linear-gradient(#4c69ba, #3b55a0);
  display: flex;
  flex-direction: row;

  &:hover,
  &:focus {
    background-color: #5b7bd5;
    background-image: linear-gradient(#5b7bd5, #4864b1);
  }
`;

const googleCssClass = css`
  display: flex;
  flex-direction: row;
  background: #dd4b39;

  &:hover,
  &:focus {
    background: #e74b37;
  }
`;

const IconImageSocial = styled.img<{
  customStyle?: CSSProp;
}>`
  width: 20px;
  height: 20px;
  align-self: center;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  ${(props) => props.customStyle};
`;

const iconFacebookSt = css`
  border-right: 1px solid #3a539b;
`;

const iconGoogleSt = css`
  border-right: 1px solid #b83d2d;
`;

const signUpBtnCss = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #0089a6;
  font-size: 13px;
  font-weight: 500;
  padding: 3px;
  margin-bottom: 10px;

  &:hover,
  &:focus {
    background: #0fa4c2;
  }

  .registerIcon {
    align-self: center;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 15px;
    border-right: 1px solid #026c81;
    font-weight: bold;
  }
`;
