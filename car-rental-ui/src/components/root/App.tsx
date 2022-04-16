/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled, { css, CSSProp, ThemeProvider } from 'styled-components';
import {
  faAngleDoubleUp,
  faExpandAlt,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderMenu from '../headerMenu/headerMenu';
import theme from '../../theme/theme';
import UnAuthorizedDrop from '../headerMenu/unAuthorizedDrop';
import Home from '../home/home';
import headerBackgroundImage from '../../images/background/headerBackgroundImage.jpg';
import StyledDropdown from '../../tools/elements/dropdown';

function App() {
  const [signInPopupActive, setSignInPopupActive] = useState(false);
  const [isHeaderExpanded, setHeaderExpanded] = useState(true);
  const [fakeData, setFakeData] = useState<any[]>([]);
  const [fakeSelectedData, setFakeSelectedData] = useState<any>({});

  useEffect(() => {
    const fakeArr : {key: number, value: number}[] = [];
    for (let i = 0; i < 100; i++) {
      const obj = {
        key: i,
        value: i * 102,
      };

      fakeArr.push(obj);
    }

    setFakeData(fakeArr);
  }, []);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  // const unauthorizedRoutes = ["sign-in", "sign-up", "password-recovery"];

  useEffect(() => {
    // const auth = localStorage.getItem("credits");
    // if (!auth && !unauthorizedRoutes.includes(pathname.substring(1))) {
    if (pathname !== '/home') {
      setHeaderExpanded(false);
    } else {
      setHeaderExpanded(true);
    }

    if (pathname === '/') {
      navigate('/home');
    }

    // }
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <AppArea>
        <AppHeaderArea>
          <HeaderMenu setSignInPopupActive={setSignInPopupActive} />
        </AppHeaderArea>

        <HeaderFilterArea isExpanded={isHeaderExpanded}>
          <HeaderContentArea isExpanded={isHeaderExpanded}>
            <h1>Find the best car.</h1>

            <span>take ypu car</span>

            <FilterArea isExpanded={isHeaderExpanded}>
              <StyledDropdown
                fieldTItle="City Picker"
                data={fakeData}
                setSelectedItemOutData={setFakeSelectedData}
                selectedItemName="value"
              />

              <StyledDropdown
                fieldTItle="Date Picker"
                data={fakeData}
                setSelectedItemOutData={setFakeSelectedData}
                selectedItemName="value"
              />

              <FilterBtn customStyle={expandBtnStyle}>
                <IconArea>
                  <FontAwesomeIcon icon={faExpandAlt} />
                </IconArea>

                <span>Expand Filter</span>
              </FilterBtn>

              <FilterBtn customStyle={searchBtnStyle}>
                <IconArea>
                  <FontAwesomeIcon icon={faSearch} />
                </IconArea>
              </FilterBtn>
            </FilterArea>
          </HeaderContentArea>

          <HeaderFooter
            onClick={() => setHeaderExpanded(!isHeaderExpanded)}
            isExpanded={isHeaderExpanded}
          >
            <FontAwesomeIcon icon={faAngleDoubleUp} className="arrow" />
          </HeaderFooter>
        </HeaderFilterArea>

        <PageContent>
          <Outlet />
        </PageContent>

        <AuthPopup isActive={signInPopupActive}>
          {true ? <UnAuthorizedDrop /> : ''}
        </AuthPopup>
      </AppArea>
    </ThemeProvider>
  );
}

export default App;

const AppArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
 align-items: center;
`;

const AppHeaderArea = styled.div`
  background-color: ${theme.palette.dark.headerMenuBackgroundColor};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 3;
`;

const AuthPopup = styled.div<{ isActive?: boolean }>`
  width: 100%;
  background-color: ${theme.palette.dark.headerMenuBackgroundColor};
  position: absolute;
  top: 60px;
  right: 0;
  box-sizing: border-box;
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
  display: none;
  @media ${(props) => props.theme.breakPoints.mobileS} {
    height: ${({ isActive }) => (isActive ? 'auto' : 0)};
    display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  }

  @media ${(props) => props.theme.breakPoints.mobileM} {
    height: ${({ isActive }) => (isActive ? 'auto' : 0)};
    display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  }

  @media ${(props) => props.theme.breakPoints.mobileL} {
    height: ${({ isActive }) => (isActive ? 'auto' : 0)};
    display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  }

  @media ${(props) => props.theme.breakPoints.tablet} {
    height: 0;
    display: none;
  }

  @media ${(props) => props.theme.breakPoints.laptop} {
    height: 0;
    display: none;
  }

  @media ${(props) => props.theme.breakPoints.laptopL} {
    height: 0;
    display: none;
  }

  @media ${(props) => props.theme.breakPoints.desktop} {
    height: 0;
    display: none;
  }
`;

const PageContent = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px; 

  @media ${(props) => props.theme.breakPoints.mobileS} {
    width: 100%;
  }

  @media ${(props) => props.theme.breakPoints.mobileM} {
    width: 100%;
  }

  @media ${(props) => props.theme.breakPoints.mobileL} {
    width: 100%;
  }

  @media ${(props) => props.theme.breakPoints.tablet} {
    width: 70%;
  }

  @media ${(props) => props.theme.breakPoints.laptop} {
    width: 70%;
  }

  @media ${(props) => props.theme.breakPoints.laptopL} {
    width: 70%;
  }

  @media ${(props) => props.theme.breakPoints.desktop} {
    width: 70%;
  }
`;

const HeaderFilterArea = styled.div<{ isExpanded?: boolean }>`
  background: ${({ isExpanded }) => (isExpanded
    ? `url(${headerBackgroundImage})`
    : `url(${headerBackgroundImage})`)}; // : "linear-gradient(#ffffff, rgb(0, 0,0, .3));"};

  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: left top;
  width: 100%;
  position: relative;
  height: ${({ isExpanded }) => (isExpanded ? '55%' : '100px')};
  transition: height 200ms linear;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

const HeaderFooter = styled.div<{ isExpanded?: boolean }>`
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
  height: 20px;
  position: absolute;
  bottom: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.8);
    transition: all 200ms linear;
  }

  .arrow {
    transform: ${({ isExpanded }) => (isExpanded ? 'rotate(0deg)' : 'rotate(180deg)')};
    transition: transform 200ms linear;
  }
`;

const HeaderContentArea = styled.div<{ isExpanded?: boolean }>`
  width: ${({ isExpanded }) => (isExpanded ? '50%' : '100%')};
  height: auto;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: ${({ isExpanded }) => (isExpanded ? '25px' : '0')};
  box-sizing: border-box;

  h1,
  span {
    padding: 0;
    margin: 0;
    display: ${({ isExpanded }) => (isExpanded ? 'block' : 'none')};
  }
`;

const FilterArea = styled.div<{ isExpanded?: boolean }>`
  background-color: ${({ isExpanded }) => (isExpanded ? 'none' : 'white')};
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: red;
  box-sizing: border-box;
  gap: 15px;
`;

const FilterBtn = styled.div<{ customStyle?: CSSProp }>`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: white;
  white-space: nowrap;
  color: #999999;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    margin-right: 15px;
  }

  ${(props) => props.customStyle};
`;

const IconArea = styled.div<{ isInputFocused?: boolean }>`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  > * {
    width: 15px;

    height: 15px;
  }
`;

const expandBtnStyle = css`
  &:hover {
    background-color: #e0e0e0;
    color: gray;
    transition: all 200ms linear;
  }
`;

const searchBtnStyle = css`
  background-color: #0089a6;
  color: white;

  &:hover {
    background-color: #25bad8;
    transition: background-color 200ms ease;
  }
`;
