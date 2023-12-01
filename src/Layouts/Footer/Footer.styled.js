import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #e1e1e1;
  position: static;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FooterLink = styled.a`
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.brand};
  }
`;

export const SocialMediaIcons = styled.div`
  & > a {
    margin: 0 10px;
    color: #333;
    &:hover {
      color: ${({ theme }) => theme.color.brand};
    }
  }
`;

export const CopyRightText = styled.p`
  color: ${({ theme }) => theme.color.brand};
  font-size: 0.8rem;
  margin-top: 20px;
`;
