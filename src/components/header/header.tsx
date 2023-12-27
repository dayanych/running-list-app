import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from 'src/common/hooks/use-auth';
import styles from 'src/components/header/header.module.scss';

const Header = () => {
  const user = useUser();

  return (
    <header>
      <nav>
        <ul className={styles.navUl}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {!user && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
