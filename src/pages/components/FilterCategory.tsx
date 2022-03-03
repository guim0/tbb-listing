import { SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
interface FilterProps {
  isOpen: boolean;
  onClose: React.Dispatch<SetStateAction<boolean>>;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
}

export function FilterCategory({
  isOpen,
  onClose,
  option1,
  option2,
  option3,
  option4,
}: FilterProps) {
  return (
    <ScreenContainer IsVisible={isOpen}>
      <Container>
        {isOpen && (
          <>
            <OverLay onClick={() => onClose(false)} />
            <FilterContainer>
              <Option>{option1}</Option>
              <Option>{option2}</Option>
              <Option>{option3}</Option>
              <Option>{option4}</Option>
            </FilterContainer>
          </>
        )}
      </Container>
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div<{ IsVisible: boolean }>`
  position: relative;

  display: flex;
  z-index: 2;
  width: 95%;
  justify-content: flex-end;
  margin-bottom: ${(props) => (props.IsVisible ? "-90px" : "100px")};
  pointer-events: ${(props) => (props.IsVisible ? "auto" : "none")};
`;

const Container = styled.div`
  width: 257px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;
`;

const FilterContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  border: 3px solid white;
  border-radius: 8px;
  background-color: #356167;
  padding: 20px;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const Option = styled.button`
  background-color: #356167;
  border: none;

  color: white;
  font-weight: 500;
  font-size: 18px;
  font-family: "Poppins";
  padding-bottom: 6px;
  border-bottom: 2px solid white;

  :hover {
    cursor: pointer;
   
  }
`;
const OverLay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
 
  :hover {
    cursor: pointer;
  }
`;
