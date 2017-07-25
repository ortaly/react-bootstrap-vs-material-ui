/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Button , ButtonToolbar} from 'react-bootstrap';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton} from 'material-ui';
import 'bootstrap/dist/css/bootstrap.css';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
  	const materialUiStyle = {
  	}

    const hompageHeader = {
      borderBottom: 'solid 1px #000',
      backgroundColor: '#dfdfdf',
      boxShadow: '0 0 2px 5px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      flex: '0 0 20vh',
      alignItems: 'center'
     }

     const homePageTitle = {
      fontSize: '24px',
      margin: '0',
    }

  	const homepageContainer = {
      display: 'flex',
      flex: '0 0 auto',
      flexDirection: 'column',
      width: '100%'
  	}

    const leftButton = {
      float: 'left',
      marginRight: 40
    }

    const container = {
      display: 'flex',
      flexDirection: 'row',
      flex: '0 0 auto',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    }

    return (
    	<div style={homepageContainer}>
        <header style={hompageHeader}>
      		<h1 style={homePageTitle}>
        		<FormattedMessage {...messages.header} />
      		</h1>
        </header>

          <div style={container}>
            <div style={leftButton}> 
            	<ButtonToolbar>
              		<Button bsStyle="primary" bsSize="large" href="/bootstrap"> Go To Bootstrap Page</Button>
            	</ButtonToolbar>
            </div>
           	<div >
              <MuiThemeProvider>
             		<div style={materialUiStyle}>
              			<RaisedButton primary={true} label="Go To Material-UI Page" href="/material-design"/>
             		</div>
             	</MuiThemeProvider>
            </div>
          </div>
     	</div>

    );
  }
}
