import React, { Component } from 'react';

class ProjectRow extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<div id ={this.props.name} className="mainPic">
						<a href={this.props.link + ".html" }>
							<img className="img-responsive" src={this.props.image} />
							<h2>{this.props.name}</h2>
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default ProjectRow;