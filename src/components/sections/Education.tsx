import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const EducationContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
`;

const EducationContent = styled.div`
  max-width: 1000px;
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

const EducationCard = styled.div`
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  transition: all 0.3s ease;
  border-bottom: 4px solid #4cc9f0;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const IconContainer = styled.div`
  font-size: 3rem;
  color: #4cc9f0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(76, 201, 240, 0.1);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin: 0 auto;
  }
`;

const EducationDetails = styled.div`
  flex: 1;
`;

const Degree = styled.h3`
  font-size: 1.5rem;
  color: #1a1a2e;
  margin-bottom: 0.5rem;
`;

const University = styled.h4`
  font-size: 1.2rem;
  color: #4cc9f0;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const EducationInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #666;
  background-color: rgba(76, 201, 240, 0.05);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`;

const IconWrapper = styled.span`
  color: #4cc9f0;
`;

const Education: React.FC = () => {
  return (
    <EducationContainer id="education">
      <EducationContent>
        <SectionTitle>Education</SectionTitle>
        <EducationCard>
          <IconContainer>
            {FaGraduationCap({})}
          </IconContainer>
          <EducationDetails>
            <Degree>Master's in Computer Science</Degree>
            <University>University of Bridgeport</University>
            <EducationInfo>
              <InfoItem>
                <IconWrapper>{FaCalendarAlt({})}</IconWrapper>
                December 2015
              </InfoItem>
              <InfoItem>
                <IconWrapper>{FaMapMarkerAlt({})}</IconWrapper>
                Bridgeport, CT
              </InfoItem>
            </EducationInfo>
          </EducationDetails>
        </EducationCard>
      </EducationContent>
    </EducationContainer>
  );
};

export default Education;