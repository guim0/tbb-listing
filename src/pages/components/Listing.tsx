import styled from "styled-components";

interface ProductDetails {
  photo: string;
  alt: string;
  title: string;
  description: string;
  category: string;
}

export function Listing({
  photo,
  alt,
  title,
  description,
  category,
}: ProductDetails) {
  return (
    <Container>
      <ImageProduct>
        <img src={photo} alt={alt} />
      </ImageProduct>
      <Title>{title}</Title>
      <Description>
          <h2>Description</h2>
          <p>{description}</p>
          
          </Description>
      <Category>
        Category <span>{category}</span>
      </Category>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid white;
  border-radius: 8px;
  width: 80%;
  gap: 16px;
  padding: 30px 40px;
  margin-bottom: 20px;
  margin-top: 20px;
margin: 0 auto;
  @media screen and (max-width: 870px) {
    flex-direction: column;
    max-width: 400px;
  }
`;

const ImageProduct = styled.div`
  background-color: white;
  border-radius: 8px;
  img {
    max-width: 200px;
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-family: "Poppins";
  font-weight: 500;
  color: white;
  max-width: 325px;
  text-align: left;
  font-size: 24px;
`;
const Description = styled.p`
  font-family: "Poppins";
  font-weight: 300;
  color: white;
  align-self: baseline;
`;
const Category = styled.p`
  font-family: "Poppins";
  font-weight: 500;
  color: white;
  align-self: flex-end;
  span{
      font-weight: 300;
  }
`;
