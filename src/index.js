"use strict";
import React from 'react';
import ReactDOM from 'react-dom';

/*ReactDOM.render(
   React.createElement('h2',null,'Hello React'),
   document.getElementById('root')
);*/
const color=Math.random()>0.5 ? 'green':'red';

/*ReactDOM.render(
   <h2 className="text-center" style={{color: color}}>Hello React with JSX!</h2>,
   document.getElementById('root')
);*/
const App = (props) => {
	return (
		<h2 className="text-center" style={{color: color}}>
			Hello React Component! {props.msg}
		</h2>
		);
}

App.propTypes = {
   msg: React.PropTypes.string
}

ReactDOM.render(
   <App msg="hello Buddy"/>,
   /*<App msg={4}/>,*/
   document.getElementById('root')
);


