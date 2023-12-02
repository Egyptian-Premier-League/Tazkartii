import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FooterContainer, FooterContent, FooterLink, SocialMediaIcons, CopyRightText } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLink href="/terms">Terms of Service</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/about">About Us</FooterLink>
        <FooterLink href="/contact">Contact Us</FooterLink>
        <SocialMediaIcons>
          <FooterLink href="https://facebook.com">
            <FaFacebookF />
          </FooterLink>
          <FooterLink href="https://twitter.com">
            <FaTwitter />
          </FooterLink>
          <FooterLink href="https://instagram.com">
            <FaInstagram />
          </FooterLink>
          <FooterLink href="https://linkedin.com">
            <FaLinkedinIn />
          </FooterLink>
        </SocialMediaIcons>
      </FooterContent>
      <CopyRightText>&copy; {new Date().getFullYear()} EFA. All Rights Reserved.</CopyRightText>
    </FooterContainer>
  );
};

export default Footer;
