import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 45px 100px;
  background: #313131;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 60px 40px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2 ,auto);
  grid-gap: 35%;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2,auto);
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: #34c972;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;