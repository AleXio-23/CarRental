import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faTimes,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import {
  Dispatch, SetStateAction, useEffect, useRef, useState,
} from 'react';

function StyledDropdown({
  fieldTItle,
  data,
  setSelectedItemOutData,
  selectedItemName,
}: {
  fieldTItle: string;
  data: any[];
  setSelectedItemOutData: Dispatch<SetStateAction<unknown>>;
  selectedItemName: string;
}) {
  const [isInputFocused, setInputFocused] = useState(false);

  const ref = useRef<any>();

  useEffect(() => {
    ref?.current?.focus();
  }, [isInputFocused]);

  const handleClickOutside = (event: { target: any }) => {
    if (ref.current && ref.current.contains(event.target)) {
      setSelectedItemOutData({ test: data }); // for the test
      setInputFocused(true);
    } else {
      setInputFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const [selectedItem, setSelectedItem] = useState({
    searchParam: null,
    selectedItemData: {},
  });

  const [dataFromDataSelectors, setDataFromDataSelectors] = useState<any[]>([]);

  useEffect(() => {
    setDataFromDataSelectors(data);
  }, [data]);

  return (
    <CustomDropdown>
      <DropDownContent>
        <IconArea>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </IconArea>
        <input type="text" placeholder={fieldTItle} ref={ref} autoComplete="none" />
        <IconArea isInputFocused={isInputFocused}>
          {Object.entries(selectedItem.selectedItemData).length === 0 ? (
            <FontAwesomeIcon icon={faAngleUp} className="iconAngle" />
          ) : (
            <FontAwesomeIcon icon={faTimes} className="iconRemove" />
          )}
        </IconArea>
      </DropDownContent>

      <DropdownListArea isInputFocused={isInputFocused}>
        {Array.isArray(dataFromDataSelectors)
          && dataFromDataSelectors.map((item, index) => (
            <div key={index}>
              <div>{item[selectedItemName]}</div>
            </div>
          ))}
      </DropdownListArea>
    </CustomDropdown>
  );
}

export default StyledDropdown;

const CustomDropdown = styled.div`
  width: 100%;
  height: 100%;
  color: #999999;
  background-color: white;
  position: relative;
`;

const DropDownContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 15px;
  }
`;

const DropdownListArea = styled.div<{ isInputFocused?: boolean }>`
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  background-color: white;
  position: absolute;
  height: ${({ isInputFocused }) => (isInputFocused ? '300px' : 0)};
  transition: height 200ms ease;
  border-top: ${({ isInputFocused }) => (isInputFocused ? '1px solid #bdbdbd' : 'none')};
`;

const IconArea = styled.div<{ isInputFocused?: boolean }>`
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    width: 15px;
    height: 15px;
  }

  .iconAngle {
    transform: rotate(
      ${({ isInputFocused }) => (isInputFocused ? '180deg' : '0deg')}
    );
    transition: transform 200ms linear;
  }
`;
