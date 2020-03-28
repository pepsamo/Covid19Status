import React from 'react';
import { render } from '@testing-library/react';

class Countries extends React.Component {
	// Set the state of countries
	state = {
		countries: [],
		isLoading: false,
		errors: null
	};

	// Create method to retrieve the countries
	getCountries() {
		fetch("https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "ajayakv-rest-countries-v1.p.rapidapi.com",
			"x-rapidapi-key": "f23eff6546mshb3d1c9131f8ade5p19a1b0jsn6dbab3e517ea"
		}
		})
		.then(res => {
		res.json().then(
    	data => {
        	this.setState({
				countries: JSON.parse(JSON.stringify(data)),
				isLoading: false
			});
    		}
  		);
	})
	.catch(error => {
		this.setState({
			error, isLoading: false
		});
	});	
	}

	componentDidMount() {
		this.getCountries();
	}
	render() {
		const { isLoading, countries } = this.state;
		return (
			<table>
				<thead>
					<tr>
						<th>Countries</th>
					</tr>
				</thead>
				<tbody>
					{!isLoading ? countries.map(country => {
						const { name, alpha3Code } = country;
						return (
							<tr key= {alpha3Code}>
								<td>{name}</td>
							</tr>
						)
					}) : <tr>
						<td>Loading...</td> 
					</tr>}
				</tbody>
			</table>
		)
	}
};

export default Countries;