import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './NextPage.module.scss';

interface DynamicTextProps {
  linkText: string;
  namePage: string;
}

const NextPage: React.FC<DynamicTextProps> = ({ linkText, namePage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      className={styles.pageNext}
      to={`/${linkText}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-2 transition-all duration-300">
        {/* Aplica a classe de hover dinamicamente */}
        <p className={isHovered ? styles.textHover : ""}>{namePage}</p>
        
        <svg
          className={`${styles.iconNext} transition-all duration-300 ${isHovered ? styles.iconHover : ""}`}
          width="30"
          height="30"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#009D96" />
          <path d="M20 15L30 25L20 35" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Link>
  );
};

export default NextPage;


