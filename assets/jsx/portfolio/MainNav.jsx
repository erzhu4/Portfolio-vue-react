import React from 'react';

import MainNavStyles from './styles/MainNavStyles.css.js';

class MainNav extends React.Component {
	constructor(props){
		super(props);
	}

    render() {
        return (
        	<div style={MainNavStyles.mainNav}>
	        	<div className="row" style={MainNavStyles.navTop}>
		            <div className="container">
		                <div className="text-center">
		                	<img style={MainNavStyles.picture} src="images/eric-zhu.jpg"></img>
		                </div>
		                <div style={MainNavStyles.nameDiv}>ERIC ZHU</div>
		            </div>
	            </div>
				<div className="row" style={MainNavStyles.navBottom}>
					<div className="container">
						<div className="row menu-row visible-md-block visible-lg-block">
							<div className="col-lg-3 hoverable" style={MainNavStyles.navButton} onClick={this.props.tabChange.bind(this, 'overview')}>
								<div className="nav-text"><i className="fa fa-users" aria-hidden="true"></i> Overview</div>
							</div>
							<div className="col-lg-3 hoverable" style={MainNavStyles.navButton} onClick={this.props.tabChange.bind(this, 'projects')}>
								<div className="nav-text"><i className="fa fa-futbol-o" aria-hidden="true"></i> Projects</div>
							</div>
							<div className="col-lg-3 hoverable" style={MainNavStyles.navButton} onClick={this.props.tabChange.bind(this, 'resume')}>
								<div className="nav-text"><i className="fa fa-file-image-o" aria-hidden="true"></i> Resume</div>
							</div>
							<div className="col-lg-3 hoverable" style={MainNavStyles.navButton} onClick={this.props.tabChange.bind(this, 'contact')}>
								<div className="nav-text"><i className="fa fa-paper-plane" aria-hidden="true"></i> Contact</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        );
    }
}

export default MainNav;