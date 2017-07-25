/*
 * Bootstrap
 *
 * This is the first thing users see of our App, at the '/materialDesign' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FlatButton, RaisedButton, FloatingActionButton, Subheader, IconButton, LinearProgress, CircularProgress } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {GridList, GridTile} from 'material-ui/GridList';


export default class MaterialUi extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
	constructor(props){
		super(props);
		injectTapEventPlugin();
		this.state = {
	      completed: 0,
	    };
	}

	 componentDidMount() {
	    this.timer = setTimeout(() => this.progress(5), 1000);
	  }

	  componentWillUnmount() {
	    clearTimeout(this.timer);
	  }

	  progress(completed) {
	    if (completed > 100) {
	      this.setState({completed: 100});
	    } else {
	      this.setState({completed});
	      const diff = Math.random() * 10;
	      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
	    }
	  }

	 getRandomColor() {
	  var letters = '0123456789ABCDEF';
	  var color = '#';
	  for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)];
	  }
	  return color;
	}

  render() {
  	const RaisedButtonStyle = {
	  margin: 12,
	};

	const FloatingActionButtonStyle = {
	  marginRight: 20,
	};

	const marginElements = {
		marginTop: 20,
		marginBottom: 20
	};

	const gridStyles = {
	  root: {
	    display: 'flex',
	    flexWrap: 'wrap',
	    justifyContent: 'space-around',
	  },
	  gridList: {
	    width: 500,
	    height: 450,
	    overflowY: 'auto',
	  },
	  gridTileStyle: {
	  	backgroundColor: 'red',
	  	color: 'red'
	  }
	};

	const preStyle = {
		display: 'block',
	    padding: '9.5px',
	    margin: '0 0 10px',
	    fontSize: '13px',
	    lineHeight: '1.42857143',
	    color: '#333',
	    wordBreak: 'break-all',
	    wordWrap: 'break-word',
	    backgroundColor: '#f5f5f5',
	    border: '1px solid #ccc',
	    borderRadius: '4px'
	}

	const tilesData = [
	{
	    img: 'images/grid-list/00-52-29-429_640.jpg',
	    title: 'Breakfast',
	    author: 'jill111',
	    featured: true,
	  },
	  {
	    img: 'images/grid-list/burger-827309_640.jpg',
	    title: 'Tasty burger',
	    author: 'pashminu',
	  },
	  {
	    img: 'images/grid-list/camera-813814_640.jpg',
	    title: 'Camera',
	    author: 'Danson67',
	  },
	  {
	    img: 'images/grid-list/morning-819362_640.jpg',
	    title: 'Morning',
	    author: 'fancycrave1',
	    featured: true,
	  },
	  {
	    img: 'images/grid-list/hats-829509_640.jpg',
	    title: 'Hats',
	    author: 'Hans',
	  },
	  {
	    img: 'images/grid-list/honey-823614_640.jpg',
	    title: 'Honey',
	    author: 'fancycravel',
	  },
	  {
	    img: 'images/grid-list/vegetables-790022_640.jpg',
	    title: 'Vegetables',
	    author: 'jill111',
	  },
	  {
	    img: 'images/grid-list/water-plant-821293_640.jpg',
	    title: 'Water plant',
	    author: 'BkrmadtyaKarki',
	  },
	];

    return (
    	<MuiThemeProvider>
	      <div>
	        <h1>
	          <FormattedMessage {...messages.header} />
	        </h1>

	        <h2> Buttons </h2>
	        <h5> Flat Buttons: </h5>
	        <div>
			    <FlatButton label="Default" />
			    <FlatButton label="Primary" primary={true} />
			    <FlatButton label="Secondary" secondary={true} />
			    <FlatButton label="Disabled" disabled={true} />
			    <br />
			    <br />
			    <FlatButton label="Full width" fullWidth={true} />
			</div>
			<br />

			<pre style={preStyle}>{`			<div>
			    <FlatButton label="Default" />
			    <FlatButton label="Primary" primary={true} />
			    <FlatButton label="Secondary" secondary={true} />
			    <FlatButton label="Disabled" disabled={true} />

			    <FlatButton label="Full width" fullWidth={true} />
			</div>
			`}</pre>

			<h5> Raised Buttons: </h5>
	        <div>
			    <RaisedButton label="Default" style={RaisedButtonStyle} />
			    <RaisedButton label="Primary" primary={true} style={RaisedButtonStyle} />
			    <RaisedButton label="Secondary" secondary={true} style={RaisedButtonStyle} />
			    <RaisedButton label="Disabled" disabled={true} style={RaisedButtonStyle} />
			    <br />
			    <br />
			    <RaisedButton label="Secondary Full width" secondary={true} fullWidth={true} />
			  </div>
			  <br />
			  <pre style={preStyle}>{`			<div>
			    <RaisedButton label="Default" style={RaisedButtonStyle} />
			    <RaisedButton label="Primary" primary={true} style={RaisedButtonStyle} />
			    <RaisedButton label="Secondary" secondary={true} style={RaisedButtonStyle} />
			    <RaisedButton label="Disabled" disabled={true} style={RaisedButtonStyle} />
			    <br />
			    <br />
			    <RaisedButton label="Secondary Full width"  secondary={true} fullWidth={true} />
			  </div>
			  	`}</pre>

			 <h5>Action Buttons: </h5>  
	        <div style={marginElements}>
			    <FloatingActionButton style={FloatingActionButtonStyle}>
			      <ContentAdd />
			    </FloatingActionButton>
			    <FloatingActionButton mini={true} style={FloatingActionButtonStyle}>
			      <ContentAdd />
			    </FloatingActionButton>
			    <FloatingActionButton secondary={true} style={FloatingActionButtonStyle}>
			      <ContentAdd />
			    </FloatingActionButton>
			    <FloatingActionButton mini={true} secondary={true} style={FloatingActionButtonStyle}>
			      <ContentAdd />
			    </FloatingActionButton>
			    <FloatingActionButton disabled={true} style={FloatingActionButtonStyle}>
			      <ContentAdd />
			    </FloatingActionButton>
			    <FloatingActionButton mini={true} disabled={true} style={FloatingActionButtonStyle}>
			      <ContentAdd />
			    </FloatingActionButton>
			</div>
		  	<br />

		  	<pre style={preStyle}>{`			<div style={marginElements}>
			    <FloatingActionButton style={FloatingActionButtonStyle}>
			      <ContentAdd />
			    </FloatingActionButton>
			    <FloatingActionButton mini={true} style={FloatingActionButtonStyle}>
			      <ContentAdd />
			    </FloatingActionButton>
			    <FloatingActionButton secondary={true} style={FloatingActionButtonStyle}>
			      <ContentAdd />
			    </FloatingActionButton>
			    <FloatingActionButton mini={true} secondary={true} style={FloatingActionButtonStyle}>
			      <ContentAdd />
			    </FloatingActionButton>
			    <FloatingActionButton disabled={true} style={FloatingActionButtonStyle}>
			      <ContentAdd />
			    </FloatingActionButton>
			    <FloatingActionButton mini={true} disabled={true} style={FloatingActionButtonStyle}>
			      <ContentAdd />
			    </FloatingActionButton>
			</div>
			  	`}</pre>


	        <h2> Grid List:</h2>
	        
	         <div style={gridStyles.root}>
			    <GridList
			      cols={2}
			      cellHeight={200}
			      padding={1}
			      style={gridStyles.gridList}
			    >
			      {tilesData.map((tile) => (
			        <GridTile
			          key={tile.img}
			          title={tile.title}
			          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
			          actionPosition="left"
			          titlePosition="top"
			          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
			          cols={tile.featured ? 2 : 1}
			          rows={tile.featured ? 2 : 1}
			          style={{backgroundColor: this.getRandomColor()}}
			        >
			        </GridTile>
			      ))}
			    </GridList>
			  </div>
			  <br />
			  <pre style={preStyle}>{`		<GridList
			      cols={2}
			      cellHeight={200}
			      padding={1}
			      style={gridStyles.gridList}
			    >
			      {tilesData.map((tile) => (
			        <GridTile
			          key={tile.img}
			          title={tile.title}
			          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
			          actionPosition="left"
			          titlePosition="top"
			          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
			          cols={tile.featured ? 2 : 1}
			          rows={tile.featured ? 2 : 1}
			          style={{backgroundColor: this.getRandomColor()}}
			        >
			        </GridTile>
			      ))}
			    </GridList>
			  	`}</pre>


	        <h2> Progress Bar </h2>

	        <h5>Circular Progress:</h5>
	        <CircularProgress
	          mode="determinate"
	          value={this.state.completed}
	          size={60}
	          thickness={7}
	        />

	        <h5>Linear Progress:</h5>
	        <LinearProgress mode="determinate" value={this.state.completed} style={marginElements}/>

	        <pre style={preStyle}>{`		<CircularProgress
	          mode="determinate"
	          value={this.state.completed}
	          size={60}
	          thickness={7}
	        />

	        <LinearProgress mode="determinate" value={this.state.completed} style={marginElements}/>
			  	`}</pre>
	      
	      </div>
      	</MuiThemeProvider>
    );
  }
}
