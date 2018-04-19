import React from 'react';

import Styles from '../styles/OverviewStyles.css.js';

class SkillsSection extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
		    <div>
		        <p className="text-center">Relevant Web Technologies:</p>
		        <div className="container clear-section-container">
		            <div className="row">
		                <div className="col-md-2 col-sm-4">
		                        <div className="thumb-container">
		                            <div style={Styles.skillTitle}>Laravel</div>
		                        </div>
		                </div>
		                <div className="col-md-2 col-sm-4">
		                        <div className="thumb-container">
		                            <div style={Styles.skillTitle}>Ruby on Rails</div>
	                            </div>
		                </div>
		                <div className="col-md-2 col-sm-4">
		                        <div className="thumb-container">
		                            <div style={Styles.skillTitle}>Vue.js</div>
	                            </div>
		                </div>
		                <div className="col-md-2 col-sm-4">
		                        <div className="thumb-container">
		                            <div style={Styles.skillTitle}>React.js</div>
	                            </div>
		                </div>
		                <div className="col-md-2 col-sm-4">
		                        <div className="thumb-container">
		                            <div style={Styles.skillTitle}>MySQL</div>
	                            </div>
		                </div>
		                <div className="col-md-2 col-sm-4">
		                        <div className="thumb-container">
		                            <div style={Styles.skillTitle}>PostgreSQL</div>
	                            </div>
		                </div>
		            </div>
		            <div className="row">
		                <div className="col-md-2 col-sm-4">
		                        <div className="thumb-container">
		                            <div style={Styles.skillTitle}>PHP</div>
	                            </div>
		                </div>
		                <div className="col-md-2 col-sm-4">
		                        <div className="thumb-container">
		                            <div style={Styles.skillTitle}>Ruby</div>
	                            </div>
		                </div>
		                <div className="col-md-2 col-sm-4">
		                        <div className="thumb-container">
		                            <div style={Styles.skillTitle}>JavaScript</div>
	                            </div>
		                </div>
		                <div className="col-md-2 col-sm-4">
		                        <div className="thumb-container">
		                            <div style={Styles.skillTitle}>CSS</div>
	                            </div>
		                </div>
		                <div className="col-md-2 col-sm-4">
		                        <div className="thumb-container">
		                            <div style={Styles.skillTitle}>Vagrant</div>
	                            </div>
		                </div>
		                <div className="col-md-2 col-sm-4">
		                        <div className="thumb-container">
		                            <div style={Styles.skillTitle}>NGINX</div>
	                            </div>
		                </div>
		            </div>
		        </div>
		    </div>
		);
	}
}

export default SkillsSection;