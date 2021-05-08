import React,{useEffect} from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from './index.css';
import { 
  Navigation, 
  Wrapper, 
  LoadingIndicator, 
  Button } from 'components';
import theme from "utils/theme";
import { useTranslation } from 'react-i18next';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { connect } from 'react-redux';
import { fetchBudget, fetchBudgetedCategories } from 'data/actions/budget.actions';

function App({ budget, fetchBudget, fetchBudgetedCategories }) {
 
  useEffect(() => {
    fetchBudget(1);
    fetchBudgetedCategories(1);
  },[fetchBudget,fetchBudgetedCategories]);

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
            <Button variant='regular' onClick={ () => i18n.changeLanguage('pl')}>
              pl
            </Button>
            <Button variant='regular' onClick={ () => i18n.changeLanguage('en')}>
              en
            </Button>
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

const ConnectedApp = connect(state =>{
  return {
    budget: state.budget.budget
  }
}, {fetchBudget,fetchBudgetedCategories} )(App);

function RootApp(){
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator/>}>
        <ConnectedApp/>
      </React.Suspense>
    </ThemeProvider>
  )
}

export default RootApp;
