import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactContainer = styled.section`
  padding: var(--spacing-xl) var(--spacing-md);
  background: linear-gradient(135deg, var(--color-background) 0%, rgba(248, 249, 250, 0.8) 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(67, 97, 238, 0.03) 0%, rgba(76, 201, 240, 0.03) 100%);
    z-index: 0;
  }
`;

const ContactContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled.div`
  font-size: 2.5rem;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-lg);
  text-align: center;
  grid-column: 1 / -1;
  font-weight: 700;
  width: 100%;
  animation: ${fadeIn} 0.8s ease-out;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  background: var(--color-card-bg);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  height: fit-content;
  position: relative;
  animation: ${fadeIn} 1s ease-out;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(to bottom, var(--color-primary), var(--color-secondary));
    border-top-left-radius: var(--border-radius-lg);
    border-bottom-left-radius: var(--border-radius-lg);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    transition: all var(--transition-normal);
  }
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
  font-weight: 600;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--color-primary);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 1rem;
  color: var(--color-text-secondary);
  padding: var(--spacing-xs) 0;
  transition: all var(--transition-fast);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    transform: translateX(8px);
    color: var(--color-primary);
  }
`;

const IconWrapper = styled.span`
  color: var(--color-primary);
  font-size: 1.2rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(67, 97, 238, 0.1);
  border-radius: 50%;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary);
    color: white;
    transform: scale(1.1);
  }
`;

const ContactLink = styled.a`
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--color-primary);
  }
`;

// Contact component starts here

const Contact: React.FC = () => {
  return (
    <ContactContainer id="contact">
      <ContactContent>
        <SectionTitle>Contact</SectionTitle>
        
        <ContactInfo>
          <ContactInfoTitle>Contact Information</ContactInfoTitle>
          <ContactItem>
            <IconWrapper>{FaEnvelope({})}</IconWrapper>
            <ContactLink href="mailto:jayakranthi@gmail.com">jayakranthi@gmail.com</ContactLink>
          </ContactItem>
          <ContactItem>
            <IconWrapper>{FaPhone({})}</IconWrapper>
            <ContactLink href="tel:+18609771430">(860) 977-1430</ContactLink>
          </ContactItem>
          <ContactItem>
            <IconWrapper>{FaMapMarkerAlt({})}</IconWrapper>
            Aldie, VA
          </ContactItem>
          <ContactItem>
            <IconWrapper>{FaLinkedin({})}</IconWrapper>
            <ContactLink href="https://www.linkedin.com/in/jayakatam" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/jayakatam
            </ContactLink>
          </ContactItem>
        </ContactInfo>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;