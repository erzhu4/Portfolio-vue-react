import React from 'react';
import OverviewStyles from '../styles/OverviewStyles.css.js';

class TitleSection extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
		    <div class="container section-container">
		        <div class="row">
		            <div class="col-md-3 title-left hidden-sm">
		                <i class="fa fa-laptop" style={OverviewStyles.fa} aria-hidden="true"></i>
		            </div>
		            <div class="col-md-9 col-sm-12 title-right">
		                <h2 class="section-title">Hello and Welcome!</h2>
		                <p>Hi, my name is <b class="bold">Eric Zhu</b>. I am a <b class="bold">Web Developer</b> currently working in New York City. Thank you for stopping by and please feel free to explore my portfolio.</p>
		            </div>
		        </div>
		    </div>
        );
    }

};

export default TitleSection;