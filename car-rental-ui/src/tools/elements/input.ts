import styled, { CSSProp } from 'styled-components';

export const CustomInput = styled.div<{
  isInputValid?: boolean;
  customStyle?: CSSProp;
}>`
  position: relative;
  width: 100%;
  height: 40px;
  margin: 0;
  padding: 0;
  border: 1px solid
    ${({ isInputValid }) => (isInputValid ? 'rgba(56, 62, 86, 0.2)' : '#ff6868')};
  box-sizing: border-box;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;

  input {
    outline: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.palette.dark.inputTextColor};
    border: none;
  }

  label {
    position: absolute;
    bottom: 0px;
    left: 0%;
    width: 100%;
    height: 100%;
    pointer-events: none;
    color: ${({ isInputValid }) => (isInputValid ? ' rgba(56, 62, 86, 0.4)' : 'rgb(255, 0, 0, .4)')};
    font-weight: bold;

    span {
      position: absolute;
      bottom: 10px;
      left: 0px;
      transition: all 0.3s ease;
      padding-left: 5px;
      padding-right: 5px;
    }
  }

  input:valid + label span {
    color: ${({ isInputValid }) => (isInputValid ? ' rgba(56, 62, 86, 0.4)' : 'rgb(255, 0, 0, .4)')};
  }

  input:focus + label span {
    color: ${({ isInputValid }) => (isInputValid ? ' rgba(56, 62, 86, 0.8)' : 'rgb(255, 0, 0, .8)')};
  }

  input:focus + label span,
  input:valid + label span {
    bottom: 5px;
    transform: translateY(-150%);
    background-color: white;
    margin-left: 5px;
  }

  &:focus-within {
    border: 1px solid
      ${({ isInputValid }) => (isInputValid ? ' #383e56' : '#f60000')};
    transition: all 0.3s ease;
  }

  ${(props) => props.customStyle};
`;

export const LabeledInput = styled.div<{ isInputValid?: boolean }>`
  position: relative;
  width: 100%;
  height: 40px;
  margin: 0;
  padding: 0;
  border: 1px solid
    ${({ isInputValid }) => (isInputValid ? 'rgba(56, 62, 86, 0.2)' : '#ff6868')};
  box-sizing: border-box;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;

  input {
    outline: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.palette.dark.inputTextColor};
    border: none;
    font-weight: bold;
    font-size: 12px;
  }

  // Remove autofill background
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s; color: red !important
  }

  input:-webkit-autofill:active {
    color: red!important;
  }
  input[data-autocompleted] {
     color: red!important;
}

  label {
    position: absolute;
    bottom: 0px;
    left: 0%;
    width: 100%;
    height: 100%;
    pointer-events: none;
    color: ${({ isInputValid }) => (isInputValid ? ' rgba(56, 62, 86, 0.4)' : 'rgb(255, 0, 0, .4)')};
    font-weight: bold;

    span {
      position: absolute;
      bottom: 10px;
      left: 0px;
      transition: all 0.2s ease;
      padding-left: 5px;
      padding-right: 5px;
    }
  }

  input:valid + label span {
    color: ${({ isInputValid }) => (isInputValid ? ' rgba(56, 62, 86, 0.4)' : 'rgb(255, 0, 0, .4)')};
  }

  input:focus + label span {
    color: ${({ isInputValid }) => (isInputValid ? ' rgba(56, 62, 86, 0.8)' : 'rgb(255, 0, 0, .8)')};
  }

  input:not([type="date"]):focus + label span,
  input:not([type="date"]):valid + label span {
    bottom: 5px;
    transform: translateY(-150%);
    /* background-color: white; */
    background: linear-gradient(to bottom, transparent 70%, white 50%);
    margin-left: 5px;
    background-color: white;
  }

  input[type="date"] + label span {
    bottom: 5px;
    transform: translateY(-150%);
    /* background-color: white; */
    background: linear-gradient(to bottom, transparent 70%, white 50%);
    margin-left: 5px;
    background-color: white;
  }

  &:focus-within {
    border: 1px solid
      ${({ isInputValid }) => (isInputValid ? ' #383e56' : '#f60000')};
    transition: all 0.2s ease;
  }
`;
