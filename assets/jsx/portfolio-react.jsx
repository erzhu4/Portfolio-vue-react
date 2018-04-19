import React from 'react';
import ReactDom from 'react-dom';

import MainNav from './portfolio/MainNav.jsx';
import Overview from './portfolio/Overview.jsx';
import Projects from './portfolio/Projects.jsx';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage: 'overview'
        };
    }

    componentDidMount(){
        
    }

    componentDidUpdate(prevProps, prevState) {
      
    }

    getCorrectMainComponent(){
        if (this.state.currentPage == 'overview'){
            return <Overview />;
        }
        if (this.state.currentPage == 'projects'){
            return <Projects />;
        }
    }

    tabChange(val){
        this.setState({currentPage: val});
    }

    render(){
        return (
            <div className="page-container">
                <MainNav tabChange={this.tabChange.bind(this)} currentPage={this.state.currentPage} />
                {this.getCorrectMainComponent.call(this)}
            </div>
        );
    }
}

ReactDom.render(<Main />, document.getElementById('react-target'));