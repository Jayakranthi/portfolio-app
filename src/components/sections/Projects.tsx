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
  padding: var(--spacing-lg) var(--spacing-md);
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
  font-size: 2rem;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
  text-align: center;
  font-weight: 700;
  width: 100%;
  animation: ${fadeIn} 0.8s ease-out;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-sm);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div<IndexProps>`
  background: var(--color-card-bg);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.8s ease-out forwards;
  opacity: 0;
  animation-delay: ${props => props.index * 0.15}s;
  position: relative;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
    
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
    height: 3px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
    opacity: 0;
    transition: opacity var(--transition-normal);
  }
`;

const ProjectImage = styled.div`
  height: 150px;
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
    font-size: 2.5rem;
    color: rgba(255, 255, 255, 0.3);
  }
`;

const ProjectInfo = styled.div`
  padding: var(--spacing-sm);
  flex: 1;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
  position: relative;
  display: inline-block;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: var(--spacing-xs) 0;
  flex: 1;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin: var(--spacing-xs) 0;
`;

const TechTag = styled.span`
  background-color: rgba(67, 97, 238, 0.08);
  color: var(--color-primary);
  padding: 0.2rem 0.6rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: rgba(67, 97, 238, 0.15);
    transform: translateY(-1px);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-xs);
  justify-content: flex-end;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  border-radius: var(--border-radius-sm);
  transition: all var(--transition-fast);
  background-color: rgba(67, 97, 238, 0.05);
  
  &:hover {
    color: var(--color-primary);
    background-color: rgba(67, 97, 238, 0.1);
    transform: translateY(-1px);
  }
  
  svg {
    font-size: 0.9rem;
  }
`;

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Smart Shipping Label Generator',
      description: 'An intelligent tool that generates shipping labels with smart validation and error checking, making the shipping process more efficient and error-free.',
      technologies: ['React', 'TypeScript', 'Styled Components'],
      demoLink: 'https://jayakranthi.github.io/smart-shipping-label-generator',
      codeLink: '#'
    },
    {
      title: 'Shipping Rate Comparison Tool',
      description: 'A comprehensive tool that helps users compare shipping rates across different carriers and services, enabling informed shipping decisions.',
      technologies: ['React', 'TypeScript', 'Redux', 'Styled Components'],
      demoLink: 'https://jayakranthi.github.io/shipping-rate-comparison-tool',
      codeLink: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'A modern dashboard for monitoring and analyzing social media metrics, providing insights and analytics for better social media management.',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Styled Components'],
      demoLink: 'https://jayakranthi.github.io/social-media-dashboard',
      codeLink: '#'
    }
  ];

  return (
    <ProjectsContainer id="projects">
      <ProjectsContent>
        <SectionTitle>Featured Projects</SectionTitle>
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
                    {FaExternalLinkAlt({})} Live Demo
                  </ProjectLink>
                  {project.codeLink !== '#' && (
                    <ProjectLink href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      {FaGithub({})} View Code
                    </ProjectLink>
                  )}
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