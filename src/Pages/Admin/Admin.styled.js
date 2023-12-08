import styled from "styled-components";

export const AdminContainer = styled.div`
  padding: 20px;
  background-color: #f0f2f5;
  margin-bottom: 120px;
`;

export const Heading = styled.h1`
  color: #333;
  text-align: start;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;

  @media (max-width: 768px) {
    border: 0;
    thead {
      display: none;
    }
    tr {
      margin-bottom: 10px;
      display: block;
      border-bottom: 2px solid #ddd;
    }
    td {
      display: block;
      align-items: center;
      position: relative;
      &:before {
        content: attr(data-label);
        position: absolute;
        left: 10px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        text-align: left;
        font-weight: bold;
      }
    }
  }
`;

export const Th = styled.th`
  background-color: #555;
  color: white;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
  vertical-align: middle;
`;

export const UserRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f9;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  margin-right: 5px;
  color: ${({ $flag }) => ($flag === "true" ? "green" : "red")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Section = styled.section`
  margin-bottom: 40px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const PaginationButton = styled.button`
  padding: 10px 15px;
  margin: 0 10px;
  background-color: ${({ theme }) => theme.button.primary};
  color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.borderColor.primary};
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.button.hover};
    color: ${({ theme }) => theme.color.hover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.button.disabled};
    color: ${({ theme }) => theme.color.disabled};
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    margin: 5px;
  }
`;
