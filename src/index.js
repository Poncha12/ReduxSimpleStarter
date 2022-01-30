import _ from 'lodash';
import React, {Component} from 'react';
import reactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from './components/video_list';
import VideoDetail from './components/vedeo_detail';

const API_KEY = "AIzaSyBPM_A9Nw60e4V3uzm012JJ0we1jtw0Dio";

//Create a new component. This component should produce some html
//const App = function() { ES5
//const App = () => { //ES6 function based component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('football');
    }

    videoSearch(term){ //A method, videoSearch
        YTSearch({key: API_KEY, term: term}, (videos) => {  //earch surfboad
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }) // = this.setState({videos: videos})
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} //function onVideoSelect that takes a video (selectedVideo) and update app state ith the ne video
                    videos={this.state.videos}/>
            </div>
        );
    }   
}
//Take this component's generated html and put it on the page (in the DOME)
reactDOM.render(<App />, document.querySelector('.container'));


