import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './NavigationBar.css';

interface NavigationProps {
  title: string;
}

const NavigationBar: React.FC<NavigationProps> = ({ title }) => {
  useEffect(() => {
    // 初期状態では、レンダリングごとに呼ばれる
    // （初回とその後の毎回）
    console.log('NavigationBar render!');

    // componentWillUnmountを実装したければ
    // ここから関数を返すと
    // Reactはアンマウントの直前にそれを呼び出す
    return () => console.log('unmounting...');
  });

  return (
    <nav className="navigationBar">
      <div className="navigationBar-container">
        <Link className="navigationBar-container-logo" to="/">
          {title}
        </Link>
        <ul className="navigationBar-container-menu">
          {/* <li>
            <Link className="navigationBar-container-menu-list" to="/">
              login
            </Link>
          </li>
          <li>
            <Link className="navigationBar-container-menu-list" to="/">
              logout
            </Link>
          </li> */}
          <li className="navigationBar-container-menu-list">
            <Link to="/">login</Link>
          </li>
          <li className="navigationBar-container-menu-list">
            <Link to="/">logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
