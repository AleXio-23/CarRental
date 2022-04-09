import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

function FileBrowser({
  setImageBase,
}: {
  setImageBase: Dispatch<
    SetStateAction<{ base64: string; url: string; filename: string }>
  >;
}) {
  const inputChangeHandler = (data: any) => {
    toBase64(data);
  };

  const toBase64 = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setImageBase({
      base64: reader?.result?.toString() || '',
      url: URL.createObjectURL(file),
      filename: file.name,
    });
    //   reader.onerror = (error) => reject(error);
  };
  return (
    <SelectorArea>
      <MainInputHidden
        type="file"
        aria-label="File Browser"
        onChange={(e) => inputChangeHandler(e.target.files ? e.target.files[0] : 'test')}
        accept=".gif,.jpg,.jpeg,.png"
      />
      <InputVisibleSpan />
    </SelectorArea>
  );
}

export default FileBrowser;

const SelectorArea = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

const MainInputHidden = styled.input`
  margin: 0;
  opacity: 0;
  width: 100%;
`;

const InputVisibleSpan = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  height: 100%;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  color: #555;
  background-color: #fff;
  border: 0.075rem solid #ddd;
  border-radius: 0.25rem;
  box-shadow: inset 0 0.2rem 0.4rem rgb(0 0 0 / 5%);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &::before {
    position: absolute;
    top: -0.075rem;
    right: -0.075rem;
    bottom: -0.075rem;
    padding-left: 10px;
    padding-right: 10px;
    z-index: 6;
    display: flex;
    justify-content: center;
    align-items: center;
    content: "Browse";
    height: 100%;
    line-height: 1.5;
    color: #555;
    background-color: #eee;
    border: 0.075rem solid #ddd;
    border-radius: 0 0.25rem 0.25rem;
  }

  &::after {
    content: "Choose image...";
  }
`;
