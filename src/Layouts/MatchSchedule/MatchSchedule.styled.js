import styled from "styled-components";

const ScheduleContainer = styled.div`
  padding: 40px;
  /* width: 80%; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.background.primary};
  
`;
const Title = styled.h1`
  color: #d32f21;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
`;

export { ScheduleContainer ,Title};