import React, {Component} from 'react';
//CLASS BASED COMPONENT,it has added functionality compared to the functional based component.
class SearchBar extends Component {
    constructor (props){
        super(props);

        this.state = {term: ''}; // this.state is an object, only done in constructure use this.setState to manupulate state elsewhere
    }
    render() { //every react method created that is class based must have a render method
        return (
            <div className="search-bar">
                <input
                    value={this.state.term} 
                    onChange={event => this.onInputChange(event.target.value)} />     
            </div>//onchange event, when the content of the inpuch change it no call oniput... function
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}
//FUNCTIONAL BASED COMPONENT
//const SearchBar = () => { // contains just an input 
//    return <input />; // React.createElement
//};

export default SearchBar;

