import { useEffect, useState } from "react";
import styled from "styled-components";
import TbbLogo from "../assets/icons/logo.svg";
import data from "../services/data.json";
import { Listing } from "./components/Listing";


export function Homepage() {
  return (
    <Container>
      <Header>
        <img src={TbbLogo} alt="The Brooklyn Brothers" />
      </Header>
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
  img{
      padding: 20px;
      max-width: 180px;
  }
`;

const ContainerListing = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap:32px;
`;
