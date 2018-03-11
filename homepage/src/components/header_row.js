import React, { Component } from 'react';

class HeaderRow extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-12 header">
					<img className="img-responsive main-image" src={this.props.mainImage} alt="main background image" />
						<div id="headshot">
							<div id ="headPic">
								<img src={this.props.headshot} alt="headshot" />
							</div>
							<h1 id="name">Ryan Dunton</h1>
							<h3 id = "position">Front-End Developer</h3>
							<h4 id ="position2">Front-End Developer</h4>
							<p id ="info">Below are links to some of my work, my resume and my contact information. <br/> I also built and deployed this website from scratch. Enjoy!</p>
					</div>
				</div>
			</div>
		)
	}
}

export default HeaderRow;