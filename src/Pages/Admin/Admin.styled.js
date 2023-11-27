import styled from "styled-components";

export const AdminContainer = styled.div`
  padding: 20px;
  background-color: #f0f2f5;
`;

export const Heading = styled.h1`
  color: #333;
  text-align: start;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`;

export const Th = styled.th`
  background-color: #555;
  color: white;
  padding: 10px;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

export const UserRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f9;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  margin-right: 5px;
  color: ${({ flag }) => (flag ? "green" : "red")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

export const Section = styled.section`
  margin-bottom: 40px;
`;
