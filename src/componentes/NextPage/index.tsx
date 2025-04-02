import React from "react";
import { Link } from 'react-router-dom';
import styles from './NextPage.module.scss';

interface DynamicTextProps {
  linkText: string;
  namePage: string;
}

const NextPage: React.FC<DynamicTextProps> = ({ linkText, namePage }) => {
  return (
    <>
      <Link className={styles.pageNext} to={`/{linkText}`}>
        <div className='flex' >
          <p >{namePage}</p>
          <img className={styles.iconNext} src='/img/base/iconNextPg.svg' alt="próxima página" />
        </div>

      </Link>
    </>
  );
};

export default NextPage;


