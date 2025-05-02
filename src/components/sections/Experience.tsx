import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Styled Components
const ExperienceContainer = styled.section`
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
    background: linear-gradient(135deg, rgba(67, 97, 238, 0.05) 0%, rgba(76, 201, 240, 0.05) 100%);
    z-index: 0;
  }
`;

const ExperienceContent = styled.div`
  max-width: 1000px;
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

// TypeScript interfaces for styled components with index prop
interface IndexProps {
  index: number;
}

const ExperienceCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const ExperienceCard = styled.div<IndexProps>`
  background: var(--color-card-bg);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  position: relative;
  animation: ${fadeIn} 0.8s ease-out forwards;
  opacity: 0;
  animation-delay: ${props => props.index * 0.2}s;
  border-top: 4px solid var(--color-primary);
  
  &:nth-child(2n) {
    border-top-color: var(--color-secondary);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
  display: flex;
  align-items: center;
`;

const CompanyName = styled.h4`
  font-size: 1.1rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const JobDetails = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  flex-wrap: wrap;
`;

const JobDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--color-text-tertiary);
  background-color: rgba(67, 97, 238, 0.05);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`;

const IconWrapper = styled.span`
  color: var(--color-primary);
`;

const Responsibilities = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ResponsibilityItem = styled.li<IndexProps>`
  padding: 0.4rem 0;
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  animation: ${slideIn} 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: ${props => 0.5 + props.index * 0.1}s;
  
  &:before {
    content: '•';
    color: var(--color-primary);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-right: 0.5rem;
  }
`;

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Stamps.com',
      location: 'Los Angeles, CA',
      period: 'March 2017 – Present',
      responsibilities: [
        'Led the redesign and development of the Stamps.com desktop and mobile web client, encompassing online postage printing, e-commerce integration (order management, contact management, order history, and reports).',
        'Enhanced the platform security by improving Auth0 login flow(Forgot Username/Password Reset).',
        'Implemented feature gating to strategically encourage plan upgrades, driving user engagement and facilitating smoother transitions to higher-value plans.',
        'Developed a support chatbot, which contributed to a measurable reduction in call volume to the support team, thereby improving operational efficiency.',
        'Contributed to the design, development, and integration of Storybook components for user interface (UI) libraries.',
        'Upgraded ReactJS, Node.js and Prime React to newer versions, enabling the adoption of new UI features.',
        'Implemented A/B testing and integrated analytics for both React and Ext.js applications.',
        'Developed reusable components to improve consistency and efficiency in the development process.',
        'Led the rebranding of legacy web applications, collaborating closely with product and design teams to significantly enhance the user experience.',
      ]
    },
    {
      title: 'Programmer Analyst',
      company: 'Cisco Systems',
      location: 'San Jose, CA',
      period: 'March 2016 – Feb 2017',
      responsibilities: [
        'Developed a web application for automating Static and Dynamic Scans, a crucial tool for Cisco developers to schedule application security scans and manage scan results.',
        'Implemented a metrics page with charts (using Highcharts.js) to display the top five vulnerabilities across Cisco applications.',
        'Created Trend reports for dynamic and static scans across internal applications using adapt-strap.js and angular-chart.js.',
      ]
    },
    {
      title: 'Software Developer',
      company: 'Izenice Technologies',
      location: 'San Jose, CA',
      period: 'March 2012 – June 2014',
      responsibilities: [
        'Developed an interactive website/single portal for consolidated bill payment, simplifying the bill payment process for users.',
        'Designed and implemented a portal for an insurance company, enabling users to manage policy details and payment methods, with features for registration, authentication, and transactions.'
      ]
    }
  ];

  return (
    <ExperienceContainer id="experience">
      <ExperienceContent>
        <SectionTitle>Work Experience</SectionTitle>
        <ExperienceCards>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} index={index}>
              <JobTitle>{exp.title}</JobTitle>
              <CompanyName>{exp.company}</CompanyName>
              <JobDetails>
                <JobDetail>
                  <IconWrapper>{FaCalendarAlt({})}</IconWrapper>
                  {exp.period}
                </JobDetail>
                <JobDetail>
                  <IconWrapper>{FaMapMarkerAlt({})}</IconWrapper>
                  {exp.location}
                </JobDetail>
              </JobDetails>
              <Responsibilities>
                {exp.responsibilities.map((resp, respIndex) => (
                  <ResponsibilityItem key={respIndex} index={respIndex}>
                    {resp}
                  </ResponsibilityItem>
                ))}
              </Responsibilities>
            </ExperienceCard>
          ))}
        </ExperienceCards>
      </ExperienceContent>
    </ExperienceContainer>
  );
};

export default Experience;