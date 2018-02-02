import React, { Component } from 'react';

class HeaderRow extends Component {
	render() {
		return (
			<div className="col-md-12 header">
				<img className="img-responsive" src={this.props.mainImage} alt="main background image" />
					<div id="headshot">
						<div id ="headPic">
							<img src={this.props.headshot} alt="headshot" />
						</div>
						<h1 id="name">Ryan Dunton</h1>
						<h3 id = "position">Front-End Developer</h3>
						<h4 id ="position2">Front-End Developer</h4>
						<p id="info">Experienced in building with technologies such as <span id="tech">Javascript, HTML/CSS, React, Bootstrap, and various APIs including Google Maps, Foursquare and Yelp</span>.</p>
						<p id ="info">Below are links to some of my work, my resume and my contact information. <br/> I also built and deployed this website from scratch. Enjoy!</p>
					</div>
			</div>
		)
	}
}

export default HeaderRow;