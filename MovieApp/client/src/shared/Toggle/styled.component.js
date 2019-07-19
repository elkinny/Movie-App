import styled from 'styled-components';

export const StyledToggle = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin: 20px 0;
  }
`;

export const StyledToggleBtn = styled.label`
  border: 2px solid #7488ab;
  color: #7488ab;
  display: inline-block;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  transition: background-color 600ms ease, color 600ms ease;
  user-select: none;
`;

export const StyledToggleLabel = styled.span`
  color: #7488ab;
  margin-right: 15px;
  margin-bottom: 0;

  @media screen and (max-width: 800px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const StyledToggleBody = styled.div`
  overflow: hidden;
`;

const leftAndRight = `
  display: none;

  & + ${StyledToggleBtn} {
    cursor: pointer;
    min-width: 60px;
  }

  & + ${StyledToggleBtn}:hover {
    background: none;
    color: #fff;
  }

  & + ${StyledToggleBtn}:after {
    background: #7488ab;
    content: '';
    height: 100%;
    position: absolute;
    top: 0;
    transition: left 200ms cubic-bezier(.77, 0, .175, 1);
    width: 100%;
    z-index: -1;
  }

  &:checked + ${StyledToggleBtn} {
    cursor: default;
    color: #17181c;
    transition: color 200ms;
  }

  &:checked + ${StyledToggleBtn}:after {
    left: 0;
  }
`;

export const StyledToggleItemLeft = styled.input`
  & + ${StyledToggleBtn} {
    border-right: 0;
  }

  & + ${StyledToggleBtn}:after {
    left: 100%;
  }

  ${leftAndRight}
`;

export const StyledToggleItemRight = styled.input`
  & + ${StyledToggleBtn} {
    margin-left: -5px;
  }

  & + ${StyledToggleBtn}:after {
    left: -100%;
  }

  ${leftAndRight}
`;
