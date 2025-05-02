import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
`;

const SkillsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.div`
  font-size: 2.5rem;
  color: #1a1a2e;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
  width: 100%;
`;

const SkillCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const SkillCategory = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border-top: 4px solid #4cc9f0;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  color: #1a1a2e;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(76, 201, 240, 0.3);
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  padding: 0.4rem 0;
  font-size: 0.95rem;
  color: #555;
  display: flex;
  align-items: center;
  
  &:before {
    content: '•';
    color: #4cc9f0;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-right: 0.5rem;
  }
`;

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Front-end Technologies',
      skills: ['JavaScript', 'ReactJS', 'Redux', 'TypeScript', 'ExtJS', 'Angular', 'Node', 'Webpack', 'Yarn', 'HTML 5', 'CSS 3', 'SASS', 'Bootstrap', 'Storybook']
    },
    {
      title: 'Back-end Technologies',
      skills: ['NodeJS', 'C#', 'Python', 'Java/J2EE']
    },
    {
      title: 'Web Services',
      skills: ['RESTful', 'Mock Api', 'SOAP']
    },
    {
      title: 'Collaboration Tools',
      skills: ['Git', 'Perforce', 'Splunk', 'Optimizely', 'Segment', 'Postman']
    },
    {
      title: 'Databases',
      skills: ['SQL Server', 'MongoDB']
    }
  ];

  return (
    <SkillsContainer id="skills">
      <SkillsContent>
        <SectionTitle>Technical Skills</SectionTitle>
        <SkillCategories>
          {skillCategories.map((category, index) => (
            <SkillCategory key={index}>
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex}>{skill}</SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillCategories>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default Skills;