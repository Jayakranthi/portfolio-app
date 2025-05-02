import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Primary color palette */
    --color-primary: #4361ee;
    --color-primary-light: #4895ef;
    --color-primary-dark: #3a0ca3;
    
    /* Secondary color palette */
    --color-secondary: #f72585;
    --color-secondary-light: #ff6b6b;
    --color-secondary-dark: #7209b7;
    
    /* Neutral colors */
    --color-background: #f8f9fa;
    --color-card-bg: #ffffff;
    --color-text-primary: #2b2d42;
    --color-text-secondary: #555;
    --color-text-tertiary: #777;
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 3rem;
    --spacing-xl: 5rem;
    
    /* Border radius */
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 16px;
    --border-radius-xl: 24px;
    
    /* Shadows */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
    
    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px; /* Account for fixed header */
    font-size: 16px;
  }

  body {
    font-family: 'Poppins', 'Roboto', 'Segoe UI', 'Arial', sans-serif;
    line-height: 1.6;
    color: var(--color-text-primary);
    background-color: var(--color-background);
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: var(--color-primary);
    transition: color var(--transition-fast);
    
    &:hover {
      color: var(--color-primary-dark);
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button, input, textarea {
    font-family: inherit;
    font-size: 1rem;
    border: none;
    outline: none;
    border-radius: var(--border-radius-sm);
    transition: all var(--transition-fast);
  }

  button {
    cursor: pointer;
    padding: 0.75rem 1.5rem;
    background-color: var(--color-primary);
    color: white;
    font-weight: 600;
    
    &:hover {
      background-color: var(--color-primary-dark);
      transform: translateY(-2px);
    }
    
    &:active {
      transform: translateY(0);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--spacing-sm);
    color: var(--color-text-primary);
  }
  
  h1 {
    font-size: 3rem;
    letter-spacing: -0.5px;
  }
  
  h2 {
    font-size: 2.5rem;
    letter-spacing: -0.3px;
  }
  
  h3 {
    font-size: 1.75rem;
  }

  section {
    width: 100%;
    padding: var(--spacing-xl) 0;
    position: relative;
    overflow: hidden;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  /* Responsive design */
  @media (max-width: 1200px) {
    .container {
      max-width: 960px;
    }
  }
  
  @media (max-width: 992px) {
    .container {
      max-width: 720px;
    }
    
    html {
      font-size: 15px;
    }
  }
  
  @media (max-width: 768px) {
    .container {
      max-width: 540px;
    }
    
    html {
      font-size: 14px;
    }
    
    section {
      padding: var(--spacing-lg) 0;
    }
    
    h1 {
      font-size: 2.5rem;
    }
    
    h2 {
      font-size: 2rem;
    }
    
    h3 {
      font-size: 1.5rem;
    }
  }
  
  @media (max-width: 576px) {
    .container {
      width: 100%;
      padding: 0 var(--spacing-sm);
    }
    
    html {
      font-size: 13px;
    }
  }
`;

export default GlobalStyles;