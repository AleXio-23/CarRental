export type ThemeType = typeof themes;

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const themes = {
  palette: {
    light: {},
    dark: {
      headerMenuBackgroundColor: "#3b3b3b",
      headerMenuItemHoverColor: "#918E93",
      inputTextColor: "#595f6e",
    },
  },
  breakPoints: {
    mobileS: `(min-width: ${sizes.mobileS}) `,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
  },
  spacing: {},
};

const theme = themes; // set the light theme as the default.
export default theme;
