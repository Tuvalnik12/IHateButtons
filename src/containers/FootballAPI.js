import React, {Component} from 'react';
import CardList from '../components/cardlist/CardList';
import Scroll from '../components/scroll/Scroll';
import FormMenu from '../components/formmenu/FormMenu';
import CircularIndeterminate from '../components/loader/loader';
import Title from '../components/title/title';
import './FootballAPI.css'
//const APIKEY =  '8cd109a7cd8a4fd599ae76de90536c6a';

class FootballAPI extends Component {
 	constructor() {
 		super();
		this.BASE_URL = 'http://api.football-data.org/v2';
		this.state = {
			competitions: [],
			league: '',
			fixture: '',
			area: '',
			competitionId: 0,
			matches: [],
			CircularIndeterminate: false
			//group-stage: 91
			}
		}

	componentDidMount() {
		this.getCompetiotionsRaw();
	}

	async getCompetiotionsRaw() {
		let rawCompetitions = [];
		let competitions = [];
		const loader = await this.showLoader();
   		const request = 
   			await fetch('http://api.football-data.org/v2/competitions', {
   				method: 'get', 
   				headers: {
   					'Content-Type': 'application/json',
   					'X-Auth-Token': '8cd109a7cd8a4fd599ae76de90536c6a'
   				}
   			})
   		const data = await request.json();
   		rawCompetitions.push({ data });
   		//console.log('data', rawCompetitions[0].data.competitions);
   		const map = await rawCompetitions[0].data.competitions.map((competition, i) => {
   			if (rawCompetitions[0].data.competitions[i].plan === 'TIER_ONE') {
   			competitions.push( competition )
   		}
   		})
   		console.log('competition', competitions)
   		this.setState(() => {
			return {competitions: competitions};
			})
   		console.log('state', this.state.competitions)
   		const err = await ((err) => console.log(err, 'err')) 
   		const unloader = this.hideLoader();
  	}

	hideLoader = () => {
    	this.setState({ CircularIndeterminate: false });
  	}

  	showLoader = () => {
   		this.setState({ CircularIndeterminate: true });
  	}

	handleMenuChanges = async ({ fixture, league, competitionId, area }) => {
		await this.showLoader()
		await this.setState({
			league: league,
			fixture: fixture,
			competitionId: competitionId,
			area: area
			})
		await console.log(
			'handleMenuChanges',
			this.state.league, 
			this.state.fixture,
			this.state.competitionId, 
			this.state.area
			)
		await this.getCompititionFixtures();
	}

	getCompititionFixtures = async () => {
		let allMatches = [];
		let fixture = [];
		const request = 
			await fetch(`http://api.football-data.org/v2/competitions/${this.state.competitionId}/matches`, {
            	method: 'get',
            	headers: {
            		'Content-Type': 'application/json',
					'X-Auth-Token':	'8cd109a7cd8a4fd599ae76de90536c6a'	
					},
           		})
		const data = await request.json();
		allMatches.push( data );
		const map = await allMatches[0].matches.map((match, i) => {
			if (match.matchday === this.state.fixture) {
				fixture.push({match})
			}
		})
		this.setState(() => {
			return {matches: fixture}
			}
		)
		console.log('state - matches', this.state.matches)
		this.hideLoader();
		}


 	render() {
 		return this.state.CircularIndeterminate ? 
 		<CircularIndeterminate /> :
 		 (
    	<div className='center-body'>
			<FormMenu 
			handleMenuChanges={this.handleMenuChanges} 
			competitions={this.state.competitions} />
    		<Title 
    		league={this.state.league}
    		area={this.state.area}
    		fixture={this.state.fixture}
    		/>
    		<Scroll >
				<CardList 
				matches={this.state.matches}
				 />
			</Scroll>
  		</div>
  		);
	}
}

export default FootballAPI;


