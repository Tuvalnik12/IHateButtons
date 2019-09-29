import React, {Component} from 'react';
import './App.css';
import Background from './components/background/Background';
import Navigation from './components/navigation/Navigation';
import FootballAPI from './containers/FootballAPI';


class App extends Component {
 	render() {

 		return (
    		<div>
    			<Navigation />
       			<Background />
       			<FootballAPI />
    		</div>
  		);
	}
}

export default App;

/*


*/