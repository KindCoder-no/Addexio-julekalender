import styled from "styled-components";

export const StyledApp = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 16px;
    padding: 1rem;
  }
`;