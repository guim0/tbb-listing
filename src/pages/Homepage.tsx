import { useEffect, useState } from "react";
import styled from "styled-components";
import TbbLogo from "../assets/icons/logo.svg";
import data from "../services/data.json";
import { Listing } from "./components/Listing";
import 'animate.css';
import { ReactComponent as FilterIcon } from "../assets/icons/filter.svg";
import ArrowDown from "../assets/icons/downarrow.svg";
import Refresh from "../assets/icons/refresh.png";

export function Homepage() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");


  useEffect(() => {

  }, [filter])
  
  return (
    <Container>
      <Header>
        <img src={TbbLogo} alt="The Brooklyn Brothers" />
      </Header>
      <FilterContainer>
       
        <FilterHeader>
          <FilterIcon /> <p>Filter by Category</p>
          <ArrowDownSection onClick={() => setOpenModal(true)}>
            <ArrowDownIcon src={ArrowDown} alt="Click here" />
          </ArrowDownSection>
 
        </FilterHeader>
        {filter !== ''&& ( <FilterSelected>Filter Selected : {filter ?? ''}</FilterSelected>)}
        <ContainerDropdown IsVisible={openModal}>
          <ContentDropdown>
            {openModal && (
              <>
                <OverLay onClick={() => setOpenModal(false)} />
                <FilterDropdownContainer >
                  <Option onClick={() => setFilter("Roll On")}>Roll On</Option>
                  <Option onClick={() => setFilter("Stick")}>Stick</Option>
                  <Option onClick={() => setFilter("Aerosol")}>Aerosol</Option>
                  <Option onClick={() => document.location.reload()}>
                    See all <img src={Refresh} alt="Reload Page" />
                  </Option>
                </FilterDropdownContainer>
              </>
            )}
          </ContentDropdown>
        </ContainerDropdown>
      </FilterContainer>
      <ContainerListing >
        {filter === "" ? (
          <>
            {data.data.nodes.map((item: any) => (
              <Listing
                photo={item.images[0].src}
                alt={item.images[0].alt}
                title={item.name}
                description={item.shortDescription}
                category={item.category.name}
              />
            ))}
          </>
        ) : (
          <>
            {data.data.nodes
              .filter((find) => find.category.name === filter)
              .map((item: any) => (
                <Listing
                  photo={item.images[0].src}
                  alt={item.images[0].alt}
                  title={item.name}
                  description={item.shortDescription}
                  category={item.category.name}
                />
              ))}
          </>
        )}
      </ContainerListing>
    </Container>
  );
}

const Container = styled.main`
  max-width: 2560px;
  height: auto;
`;

const Header = styled.header`
  margin: 0 auto;
  img {
    padding: 20px;
    max-width: 180px;
  }
`;
const FilterContainer = styled.section`
  margin: 0 auto;
  width: 80%;
`;
const FilterHeader = styled.div`

  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
  p {
    color: white;
    font-weight: 500;
    font-size: 18px;
    font-family: "Poppins";
  }

  @media screen and (max-width: 700px){
    
    justify-content: center;
  }
`;

const FilterSelected = styled.h3`
font-size: 18px;
color: white;
font-family: 'Poppins' ;
font-weight: 500 ;
`

const ContainerDropdown = styled.div<{ IsVisible: boolean }>`
  display: flex;
  justify-content: flex-end;
  pointer-events: ${(props) => (props.IsVisible ? "auto" : "none")};
`;

const ContentDropdown = styled.div``;
const FilterDropdownContainer = styled.div`
  border-radius: 8px;
  height: 200px;
  width: 220px;
  border: 3px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: absolute;
  z-index: 2;
  top: 220px ;
  right: 15px;
  background-color: #356167;
  @media screen and (min-width: 2160px){
    right: 4vw;
  }
`;

const Option = styled.button`
  background-color: #356167;
  border: none;
  margin-bottom: 10px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  font-family: "Poppins";
  width: 80%;

  border-bottom: 2px solid white;

  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }

  img {
    max-width: 25px;
    object-fit: fill;
  }
`;
const OverLay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  :hover {
    cursor: pointer;
  }
`;

const ArrowDownSection = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  :hover {
    cursor: pointer;
  }
`;
const ArrowDownIcon = styled.img``;

const ContainerListing = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
