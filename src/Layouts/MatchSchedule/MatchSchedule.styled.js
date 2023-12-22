import styled from "styled-components";

const ScheduleContainer = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.background.primary};
  margin-bottom: 120px;
`;
const Title = styled.h1`
  color: #d32f21;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
`;

export { ScheduleContainer, Title };
