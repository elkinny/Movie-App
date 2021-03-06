import styled from 'styled-components';

export const StyledSubheader = styled.div`{
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  color: #7488ab;
  border-top: 1px solid #7488ab;
  border-bottom: 1px solid #7488ab;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
