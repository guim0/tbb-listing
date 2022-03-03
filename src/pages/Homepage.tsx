import { useEffect, useState } from "react";
import styled from "styled-components";
import TbbLogo from "../assets/icons/logo.svg";
import data from "../services/data.json";
import { FilterCategory } from "./components/FilterCategory";
import { Listing } from "./components/Listing";

import { ReactComponent as FilterIcon } from "../assets/icons/filter.svg";
import ArrowDown from "../assets/icons/downarrow.svg";

export function Homepage() {

  const [filterSelected, setFilterSelected] = useState<string>("");
  const [openModal, setOpenModal]= useState<boolean>(false)
  return (
    <Container>
      <Header>
        <img src={TbbLogo} alt="The Brooklyn Brothers" />
      </Header>
      <FilterContainer>
        <FilterHeader>
          <FilterIcon /> <p>Filter by Category</p>
          <ArrowDownSection onClick={()=> setOpenModal(true)} >
            <ArrowDownIcon src={ArrowDown} alt="Click here" />
          </ArrowDownSection>
        </FilterHeader>
        <FilterCategory
     option1="Stick"
     option2="Role On"
     option3="Aerosol"
     option4="See All"
     onClose={setOpenModal}
     isOpen={openModal}
        />{console.log(filterSelected)}
      </FilterContainer>
      <ContainerListing>
        {data.data.nodes.map((item: any) => (
          <Listing
            photo={item.images[0].src}
            alt={item.images[0].alt}
            title={item.name}
            description={item.shortDescription}
            category={item.category.name}
          />
        ))}
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
`;
const FilterHeader = styled.div`
  width: 93%;
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
