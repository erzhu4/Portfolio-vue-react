import React from 'react';
import OverviewStyles from '../styles/OverviewStyles.css.js';

class TitleSection extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
		    <div className="container section-container">
		        <div className="row">
		            <div className="col-md-3 hidden-sm" style={OverviewStyles.titleLeft}>
		                <i className="fa fa-laptop" style={OverviewStyles.fa} aria-hidden="true"></i>
		            </div>
		            <div className="col-md-9 col-sm-12" style={OverviewStyles.titleRight}>
		                <h2 className="section-title">Hello and Welcome!</h2>
		                <p>Hi, my name is <b className="bold">Eric Zhu</b>. I am a <b className="bold">Web Developer</b> currently working in New York City. Thank you for stopping by and please feel free to explore my portfolio.</p>
		            </div>
		        </div>
		    </div>
        );
    }

};

export default TitleSection;