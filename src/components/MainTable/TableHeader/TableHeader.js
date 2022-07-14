import styled from "styled-components";
import EachRowStyle from "../EachRowStyle";

const TableHeaderStyle = styled(EachRowStyle)`
  font-weight: 900;
  :hover{
    background-color: none;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const HeaderStyle = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  padding:5px;
  border-bottom: 2px solid #484848;
`;

const TableHeader = () => {
  return (
    <>
      <HeaderStyle>Incidents</HeaderStyle>
      <TableHeaderStyle>
        <li>
          <p>Date and Time</p>
        </li>
        <li>
          <p>ID</p>
        </li>
        <li>
          <p>Location Name</p>
        </li>
        <li>
          <p>Incident Name</p>
        </li>
        <li>
          <p>Description</p>
        </li>
      </TableHeaderStyle>
    </>
  );
};

export default TableHeader;
