import React from 'react';

import TitleSection from './Overview/TitleSection.jsx';
import SkillsSection from './Overview/SkillsSection.jsx';

import OverviewStyles from './styles/OverviewStyles.css.js';

class Overview extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="home-container tab-container">
                <TitleSection />
                <SkillsSection />
            </div>
        );
    }
}

export default Overview;