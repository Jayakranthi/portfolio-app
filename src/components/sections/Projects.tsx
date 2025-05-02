import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaLaptopCode } from 'react-icons/fa';

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

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Interface for index props
interface IndexProps {
  index: number;
}

// Styled Components
const ProjectsContainer = styled.section`
  padding: var(--spacing-xl) var(--spacing-md);
  background-color: var(--color-background);
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

const ProjectsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.div`
  font-size: 2.5rem;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-lg);
  text-align: center;
  font-weight: 700;
  width: 100%;
  animation: ${fadeIn} 0.8s ease-out;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div<IndexProps>`
  background: var(--color-card-bg);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.8s ease-out forwards;
  opacity: 0;
  animation-delay: ${props => props.index * 0.15}s;
  position: relative;
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: var(--shadow-lg);
    
    &::after {
      opacity: 1;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
    opacity: 0;
    transition: opacity var(--transition-normal);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-secondary-dark) 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 200% 100%;
    animation: ${shimmer} 3s infinite;
  }
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.3);
  }
`;

const ProjectInfo = styled.div`
  padding: var(--spacing-md);
  flex: 1;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
  position: relative;
  display: inline-block;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: var(--spacing-sm) 0;
  flex: 1;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: var(--spacing-sm) 0;
`;

const TechTag = styled.span`
  background-color: rgba(67, 97, 238, 0.08);
  color: var(--color-primary);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: rgba(67, 97, 238, 0.15);
    transform: translateY(-2px);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
  justify-content: flex-end;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
  background-color: rgba(67, 97, 238, 0.05);
  
  &:hover {
    color: var(--color-primary);
    background-color: rgba(67, 97, 238, 0.1);
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 1rem;
  }
`;

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Rate Advisor',
      description: 'A tool that empowers users to make informed shipping decisions by comparing rates across various carriers and services.',
      technologies: ['React', 'TypeScript', 'Redux', 'Styled Components'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'E-commerce Integration',
      description: 'Integrated Amazon SP-API using Monoauth, ensuring a seamless transition for users and preventing downtime.',
      technologies: ['React', 'Node.js', 'API Integration', 'Auth0'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Support Chatbot',
      description: 'Developed a support chatbot that contributed to a measurable reduction in call volume to the support team, improving operational efficiency.',
      technologies: ['JavaScript', 'NLP', 'API Integration'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Security Scan Automation',
      description: 'A web application for automating Static and Dynamic Scans, a crucial tool for developers to schedule application security scans and manage scan results.',
      technologies: ['Angular', 'Node.js', 'Express', 'Highcharts.js'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Consolidated Bill Payment Portal',
      description: 'An interactive website/single portal for consolidated bill payment, simplifying the bill payment process for users.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Payment Gateway Integration'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Insurance Company Portal',
      description: 'A portal for an insurance company, enabling users to manage policy details and payment methods, with features for registration, authentication, and transactions.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Authentication'],
      demoLink: '#',
      codeLink: '#'
    }
  ];

  return (
    <ProjectsContainer id="projects">
      <ProjectsContent>
        <SectionTitle>Projects</SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index}>
              <ProjectImage>
                {FaLaptopCode({})}
              </ProjectImage>
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTech>
                  {project.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </ProjectTech>
                <ProjectLinks>
                  <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    {FaExternalLinkAlt({})} Demo
                  </ProjectLink>
                  <ProjectLink href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    {FaGithub({})} Code
                  </ProjectLink>
                </ProjectLinks>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default Projects;