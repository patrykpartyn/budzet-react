import { ThemeProvider } from "styled-components";
import GlobalStyle from './index.css';
import { Navigation, Wrapper, LoadingIndicator } from 'components';
import theme from "utils/theme";
import { useTranslation } from 'react-i18next';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from "react";

function App() {
  const { i18n } = useTranslation();

  return (
    <React.Fragment>
      <GlobalStyle/>
      <Router>
        <Navigation 
        items={[
          {
            content: 'Homepage', to: '/'
          },
          {
            content: 'Budget', to: '/budget'
          }
        ]}
        RightElement={(
          <div>
            <button onClick={ () => i18n.changeLanguage('pl')}>
              pl
            </button>
            <button onClick={ () => i18n.changeLanguage('en')}>
              en
            </button>
          </div>
        )}
        />
        <Wrapper>
          <Switch>
            <Route exact path="/">
              Homepage
            </Route>
            <Route path="/budget">
              Budget page
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </React.Fragment>
  );
}

function RootApp(){
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator/>}>
        <App/>
      </React.Suspense>
    </ThemeProvider>
  )
}

export default RootApp;
