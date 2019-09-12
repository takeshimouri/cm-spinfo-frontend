import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import NavigationBar from './components/common/NavigationBar';
import Footer from './components/common/Footer';

import AppContainer from './AppContainer';

import './App.css';

const App: React.FC = () => {
  const title = '「致知」顧客情報参照システム';
  const footerText = 'Chichi Publishing Co.,Ltd. © 2019';

  return (
    <div className="app">
      <Helmet htmlAttributes={{ lang: 'ja' }}>
        <title>{title}</title>
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */}
      </Helmet>

      <NavigationBar title={title} />

      <div className="app-body">
        <Route path="/" component={AppContainer} />
      </div>

      <Footer footerText={footerText} />
    </div>
  );
};

// TODO: typescript reduxの型付けを見直す
// TODO: typescript アサーションを使う
// TODO: typescript anyを見直す
// TODO: typescript 共通interfaceをファイルに移すか検討
// TODO: eslint warningを見直す
// TODO: buttonをinput type=buttonに見直す

export default withRouter(App);
