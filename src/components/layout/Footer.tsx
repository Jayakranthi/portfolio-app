import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1a1a2e;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, #4cc9f0, transparent);
  }
`;

const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #aaa;
  letter-spacing: 0.5px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  
  &:hover {
    color: #4cc9f0;
    transform: translateY(-3px);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialLink href="https://www.linkedin.com/in/jayakatam" target="_blank" rel="noopener noreferrer">
            {FaLinkedin({})}
          </SocialLink>
          <SocialLink href="mailto:jayakranthi@gmail.com">
            {FaEnvelope({})}
          </SocialLink>
          <SocialLink href="#" target="_blank" rel="noopener noreferrer">
            {FaGithub({})}
          </SocialLink>
        </SocialLinks>
        <Copyright>
          &copy; {currentYear} Jayakranthi Katam. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;