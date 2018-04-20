import React from 'react';

import Styles from '../styles/OverviewStyles.css.js';

class SkillsSection extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			skills: [
				{
					name: "Laravel"
				},
				{
					name: "Rails"
				},
				{
					name: "Vue"
				},
				{
					name: "React"
				},
				{
					name: "SQL"
				},
				{
					name: "Python"
				},
				{
					name: "PHP"
				},
				{
					name: "Ruby"
				},
				{
					name: "JavaScript"
				},
				{
					name: "CSS"
				},
				{
					name: "JAVA"
				},
				{
					name: "HTML"
				}

			]
		};
	}

	render(){
		return(
		    <div>
		        <p className="text-center">Relevant Web Technologies:</p>
		        <div className="container clear-section-container">
	                <div className="row">
	                	{this.state.skills.map((skill, i) => 
	                		<div className="col-md-2 col-sm-4" key={i}>
		                        <div className="thumb-container">
		                            <div style={Styles.skillTitle}>{skill.name}</div>
		                        </div>
	                		</div>
	                	)}
                	</div>
		        </div>
		    </div>
		);
	}
}

export default SkillsSection;