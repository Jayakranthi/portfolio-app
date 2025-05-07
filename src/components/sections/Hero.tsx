import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaEnvelope, FaGithub, FaArrowDown } from 'react-icons/fa';

// Animations
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled Components
const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(-45deg, var(--color-primary-dark), var(--color-primary), var(--color-secondary-dark), var(--color-secondary));
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  color: #fff;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
`;

const BackgroundShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

const Shape = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 50%;
  
  &:nth-child(1) {
    width: 300px;
    height: 300px;
    top: -150px;
    right: -100px;
  }
  
  &:nth-child(2) {
    width: 200px;
    height: 200px;
    bottom: -100px;
    left: -50px;
  }
  
  &:nth-child(3) {
    width: 150px;
    height: 150px;
    top: 40%;
    left: 10%;
  }
  
  &:nth-child(4) {
    width: 100px;
    height: 100px;
    bottom: 20%;
    right: 10%;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
`;

const Name = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  letter-spacing: -1px;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: ${fadeInUp} 1s ease-out;
  background: linear-gradient(to right, #fff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  font-weight: 500;
  animation: ${fadeInUp} 1s ease-out 0.3s forwards;
  opacity: 0;
  
  span {
    color: #fff;
    background: var(--color-secondary);
    padding: 0.2rem 0.8rem;
    border-radius: 4px;
    font-weight: 600;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Summary = styled.p`
  max-width: 800px;
  margin-bottom: 2.5rem;
  line-height: 1.8;
  font-size: 1.2rem;
  animation: ${fadeInUp} 1s ease-out 0.6s forwards;
  opacity: 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  animation: ${fadeInUp} 1s ease-out 0.9s forwards;
  opacity: 0;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  
  svg {
    font-size: 1.2rem;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  background: linear-gradient(to right, var(--color-secondary), var(--color-secondary-dark));
  color: #fff;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  margin-top: 2.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 1s ease-out 1.2s forwards, ${pulse} 2s ease-in-out 3s infinite;
  opacity: 0;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    
    &:before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-2px);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${float} 2s ease-in-out infinite;
  cursor: pointer;
  
  svg {
    color: #fff;
    font-size: 1.5rem;
  }
`;

const Hero: React.FC = () => {
  const handleScrollClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <HeroContainer id="home">
      <BackgroundShapes>
        <Shape />
        <Shape />
        <Shape />
        <Shape />
      </BackgroundShapes>
      
      <HeroContent>
        <NameWrapper>
          <Name>Jayakranthi Katam</Name>
        </NameWrapper>
        
        <Title>
          <span>Senior Software Engineer</span>
        </Title>
        
        <Summary>
          A passionate and highly skilled Senior Software Engineer with 10+ years of experience in designing and developing clean, efficient, and intuitive web applications.
        </Summary>
        
        <ContactLinks>
          <ContactLink href="https://www.linkedin.com/in/jayakatam" target="_blank" rel="noopener noreferrer">
            {FaLinkedin({})} LinkedIn
          </ContactLink>
          <ContactLink href="mailto:jayakranthi@gmail.com">
            {FaEnvelope({})} jayakranthi@gmail.com
          </ContactLink>
          <ContactLink href="https://github.com" target="_blank" rel="noopener noreferrer">
            {FaGithub({})} GitHub
          </ContactLink>
        </ContactLinks>
        
        {/* Removed Get In Touch button as requested */}
      </HeroContent>
      
      <ScrollIndicator onClick={handleScrollClick}>
        {FaArrowDown({})}
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;