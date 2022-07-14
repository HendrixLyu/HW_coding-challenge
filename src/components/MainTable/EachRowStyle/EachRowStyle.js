import styled from "styled-components";

const EachRowStyle = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  border-bottom: 2px solid #484848;
  :hover {
    background-color: #202020;
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    max-width: 500px;
    flex-direction: column;
    align-items: flex-start;
  }
  > li {
    display: flex;
    width: 8rem;
    padding-right: 2rem;
    justify-content: flex-start;
    align-items: center;
    :nth-child(1) {
      width: 6rem;
      padding-left: 5px;
      display: flex;
      flex-direction: row;
    }
    :nth-child(2) {
      width: 1rem;
    }
    @media screen and (max-width: 600px) {
      min-width: 300px;
      line-height: 0.5rem;
      padding: 0 30px;
      :nth-child(1) {
        width: 100%;
      }
      :nth-child(2) {
        display: none;
      }
    }
  }
`;

export default EachRowStyle;
