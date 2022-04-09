import {
  faHome,
  faInfoCircle,
  faMailBulk,
  faAngleUp,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import theme from "../../theme/theme";
import UnAuthorizedDrop from "./unAuthorizedDrop";

const HeaderMenu = (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAuthorized, setAuthorized] = useState(false);
  const [isActiveDropDown, setActiveDropDown] = useState(false);

  const navigate = useNavigate();

  const ref = useRef<any>();

  const handleClickOutside = (event: { target: any }) => {
    if (ref.current && ref.current.contains(event.target)) {
      //setActiveDropDown(true);
    } else {
      setActiveDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <HeaderArea>
      <FaBarsArea>
        <FontAwesomeIcon icon={faBars} />
      </FaBarsArea>
      <HeaderLogo onClick={() => navigate("/home")}>
        <span>Ca</span>
        <div>
          <span className="firstR">R</span>
          <span className="secondR">R</span>
        </div>
        <span>ental</span>
      </HeaderLogo>
      <HeaderMenuUl>
        <li>
          <FontAwesomeIcon icon={faHome} className="menuIcon" />
          <a href="/">Home</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faInfoCircle} className="menuIcon" />
          <a href="/">About Us</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faMailBulk} className="menuIcon" />
          <a href="/">Contact</a>
        </li>

        <AuthArea ref={ref}>
          {!isAuthorized ? (
            <SignInUpBtn
              onClick={() => {
                setActiveDropDown(!isActiveDropDown);
                props?.setSignInPopupActive(!isActiveDropDown);
              }}
            >
              <span>Sign In</span>
              <FontAwesomeIcon icon={faAngleUp} />
            </SignInUpBtn>
          ) : (
            ""
          )}

          <AuthDropDown isActive={isActiveDropDown}>
            {!isAuthorized ? <UnAuthorizedDrop /> : ""}
          </AuthDropDown>
        </AuthArea>
      </HeaderMenuUl>
    </HeaderArea>
  );
};
export default HeaderMenu;

const HeaderArea = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;

  @media ${(props) => props.theme.breakPoints.mobileS} {
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
  @media ${(props) => props.theme.breakPoints.mobileM} {
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
  @media ${(props) => props.theme.breakPoints.mobileL} {
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
  @media ${(props) => props.theme.breakPoints.tablet} {
    width: 70%;
    height: 100%;
    justify-content: space-between;
  }
  @media ${(props) => props.theme.breakPoints.laptop} {
    width: 70%;
    height: 100%;
    justify-content: space-between;
  }
  @media ${(props) => props.theme.breakPoints.laptopL} {
    width: 70%;
    height: 100%;
    justify-content: space-between;
  }
  @media ${(props) => props.theme.breakPoints.desktop} {
    width: 70%;
    height: 100%;
    justify-content: space-between;
  }
`;

const HeaderLogo = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:wght@100;400&family=Roboto&family=Source+Code+Pro:wght@300&display=swap");
  color: white;
  display: flex;
  flex-direction: row;
  font-family: "Lobster", cursive;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  div {
    background-color: #0089a6;
    border-radius: 50%;
    padding: 2px;
    padding-left: 10px;
    padding-right: 10px;
    font-weight: 300;
    font-size: 25px;
  }
  .firstR {
    position: absolute;
    margin-left: 5px;
    margin-top: 4px;
  }
`;
const HeaderMenuUl = styled.ul`
  list-style-type: none;
  box-sizing: border-box;
  height: 100%;
  margin: 0;
  padding: 0;
  color: white;

  @media ${(props) => props.theme.breakPoints.mobileS} {
    li,
    a,
    .menuIcon,
    li:hover {
      display: none;
    }
    display: flex;
    flex-direction: row;
  }
  @media ${(props) => props.theme.breakPoints.mobileM} {
    li,
    a,
    .menuIcon,
    li:hover {
      display: none;
    }
    display: flex;
    flex-direction: row;
  }
  @media ${(props) => props.theme.breakPoints.mobileL} {
    li,
    a,
    .menuIcon,
    li:hover {
      display: none;
      visibility: hidden;
    }
    display: flex;
    flex-direction: row;
  }
  @media ${(props) => props.theme.breakPoints.tablet} {
    li,
    a,
    .menuIcon,
    li:hover {
      display: flex;
      flex-direction: row;
      visibility: visible;
    }
    display: flex;
    flex-direction: row;
  }
  @media ${(props) => props.theme.breakPoints.laptop} {
    li,
    a,
    .menuIcon,
    li:hover {
      display: flex;
      flex-direction: row;
      visibility: visible;
    }
    display: flex;
    flex-direction: row;
  }
  @media ${(props) => props.theme.breakPoints.laptopL} {
    li,
    a,
    .menuIcon,
    li:hover {
      display: flex;
      flex-direction: row;
      visibility: visible;
    }
    display: flex;
    flex-direction: row;
  }
  @media ${(props) => props.theme.breakPoints.desktop} {
    li,
    a,
    .menuIcon,
    li:hover {
      display: flex;
      flex-direction: row;
      visibility: visible;
    }
    display: flex;
    flex-direction: row;
  }

  li a {
    text-decoration: none;
    color: white;
    font-weight: 500;
  }

  li {
    box-sizing: border-box;
    height: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
    gap: 5px;
  }

  li:hover {
    background-color: ${theme.palette.dark.headerMenuItemHoverColor};
    transition: background-color 0.3s ease;
  }
`;

const AuthArea = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SignInUpBtn = styled.div`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0089a6;
  color: white;
  padding: 0;
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;
  font-weight: 500;
  gap: 5px;
  font-size: 14px;
  transition: background-color 200ms ease;

  span {
  }

  &:hover {
    background-color: #25bad8;
    transition: background-color 200ms ease;
  }
`;

const FaBarsArea = styled.div`
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 25px;
  @media ${(props) => props.theme.breakPoints.mobileS} {
  }
  @media ${(props) => props.theme.breakPoints.mobileM} {
  }
  @media ${(props) => props.theme.breakPoints.mobileL} {
  }
  @media ${(props) => props.theme.breakPoints.tablet} {
    display: none;
  }
  @media ${(props) => props.theme.breakPoints.laptop} {
    display: none;
  }
  @media ${(props) => props.theme.breakPoints.laptopL} {
    display: none;
  }
  @media ${(props) => props.theme.breakPoints.desktop} {
    display: none;
  }
`;

const AuthDropDown = styled.div<{ isActive?: boolean }>`
  width: 300px;
  background-color: ${theme.palette.dark.headerMenuBackgroundColor};
  position: absolute;
  top: 60px;
  right: 0;
  box-sizing: border-box;
  overflow: hidden;
  height: 0;

  @media ${(props) => props.theme.breakPoints.mobileS} {
    height: 0;
  }
  @media ${(props) => props.theme.breakPoints.mobileM} {
    height: 0;
  }
  @media ${(props) => props.theme.breakPoints.mobileL} {
    height: 0;
  }
  @media ${(props) => props.theme.breakPoints.tablet} {
    animation: ${({ isActive }) => (isActive ? dropShowAnim : dropHideAnim)}
      300ms linear forwards;
  }
  @media ${(props) => props.theme.breakPoints.laptop} {
    animation: ${({ isActive }) => (isActive ? dropShowAnim : dropHideAnim)}
      300ms linear forwards;
  }
  @media ${(props) => props.theme.breakPoints.laptopL} {
    animation: ${({ isActive }) => (isActive ? dropShowAnim : dropHideAnim)}
      ${({ isActive }) => (isActive ? "300ms" : "1ms")} linear forwards;
  }
  @media ${(props) => props.theme.breakPoints.desktop} {
    animation: ${({ isActive }) => (isActive ? dropShowAnim : dropHideAnim)}
      300ms linear forwards;
  }
`;

const dropShowAnim = keyframes`
    from{
        height: 0;
    }to {
        height: 440px;
    }
`;

const dropHideAnim = keyframes`
       from{
        height:440px;
    }to {
        height: 0;
    }
`;
