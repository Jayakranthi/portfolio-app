import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #1a1a2e;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #4cc9f0;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #4cc9f0;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer>
      <Logo to="/">JK</Logo>
      <Nav>
        <NavLink to="/" onClick={() => scrollToSection('home')}>Home</NavLink>
        <NavLink to="/#about" onClick={() => scrollToSection('about')}>About</NavLink>
        <NavLink to="/#experience" onClick={() => scrollToSection('experience')}>Experience</NavLink>
        <NavLink to="/#projects" onClick={() => scrollToSection('projects')}>Projects</NavLink>
      </Nav>
      <MobileMenuButton>☰</MobileMenuButton>
    </HeaderContainer>
  );
};

export default Header;