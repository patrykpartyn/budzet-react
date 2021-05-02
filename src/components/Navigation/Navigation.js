import React from 'react';
import theme from 'utils/theme';
import { Container, List, NavigationWrapper } from './Navigation.css';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from 'react-i18next';

function Navigation({ items = [], RightElement }){
    const { t } = useTranslation();
    return(
        <Container>
            <NavigationWrapper>
                <List>
                    {
                      items.map(item =>(
                        <li key={item.to}>
                            <Link to={item.to}>
                                {
                                    t(item.content)
                                }
                            </Link>
                        </li>
                      )) 
                    }
                </List>
                {
                    RightElement
                }
            </NavigationWrapper>
        </Container>
    )
}

export default Navigation;

Navigation.propTypes = {
    items: PropTypes.array.isRequired,

};