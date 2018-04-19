import React from 'react';

import TitleSection from './Overview/TitleSection.jsx';

import OverviewStyles from './styles/OverviewStyles.css.js';

class Overview extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div class="home-container tab-container">
                <TitleSection />
            </div>
        );
    }
}

export default Overview;