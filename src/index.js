import React, {Component} from 'react';
import reactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from './components/video_list';

const API_KEY = "AIzaSyBPM_A9Nw60e4V3uzm012JJ0we1jtw0Dio";

//Create a new component. This component should produce some html
//const App = function() { ES5
//const App = () => { //ES6 function based component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'sufbords'}, (videos) => {  //earch surfboad
            this.setState({videos}) // = this.setState({videos: videos})
        });

    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }   
}
//Take this component's generated html and put it on the page (in the DOME)
reactDOM.render(<App />, document.querySelector('.container'));


