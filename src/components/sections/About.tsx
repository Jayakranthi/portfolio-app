import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

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

const AboutContainer = styled.section`
  padding: var(--spacing-xl) var(--spacing-md);
  background: linear-gradient(135deg, var(--color-background) 0%, var(--color-card-bg) 100%);
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

const AboutContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.div`
  font-size: 2.5rem;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
  text-align: center;
  font-weight: 700;
  width: 100%;
  animation: ${fadeIn} 0.8s ease-out;
`;

const AboutCard = styled.div`
  background: var(--color-card-bg);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  animation: ${fadeIn} 1s ease-out;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
    border-top-left-radius: var(--border-radius-lg);
    border-top-right-radius: var(--border-radius-lg);
  }
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text-secondary);
  max-width: 800px;
  margin: 0 auto;
  
  strong {
    color: var(--color-primary);
    font-weight: 600;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
  animation: ${fadeIn} 1.2s ease-out;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1rem;
  color: var(--color-text-secondary);
  background-color: rgba(67, 97, 238, 0.05);
  padding: 0.7rem 1.2rem;
  border-radius: 30px;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-sm);
  
  &:hover {
    background-color: rgba(67, 97, 238, 0.1);
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`;

const IconWrapper = styled.span`
  color: var(--color-primary);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const About: React.FC = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <SectionTitle>About Me</SectionTitle>
        <AboutCard>
          <AboutText>
            I am a <strong>Senior Software Engineer</strong> with over 10 years of experience in designing and developing web applications.
            I specialize in creating <strong>clean, efficient, and intuitive</strong> user interfaces using modern technologies like <strong>React,
            TypeScript, and Redux</strong>.
            <br /><br />
            My approach to development is centered around creating <strong>scalable, maintainable code</strong> that delivers exceptional
            user experiences. I am passionate about staying current with the latest technologies and best practices in
            front-end development.
          </AboutText>
          <ContactInfo>
            <ContactItem>
              <IconWrapper>{FaMapMarkerAlt({})}</IconWrapper>
              Aldie, VA
            </ContactItem>
            <ContactItem>
              <IconWrapper>{FaPhone({})}</IconWrapper>
              (860) 977-1430
            </ContactItem>
            <ContactItem>
              <IconWrapper>{FaEnvelope({})}</IconWrapper>
              jayakranthi@gmail.com
            </ContactItem>
          </ContactInfo>
        </AboutCard>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;