import React, {Component} from 'react';
//CLASS BASED COMPONENT,it has added functionality compared to the functional based component.
class SearchBar extends Component {
    constructor (props){
        super(props);

        this.state = {term: ''}; // this.state is an object, only done in constructure use this.setState to manupulate state elsewhere
    }
    render() { //every react method created that is class based must have a render method
        return (
            <div>
                <input
                    value={this.state.term} 
                    onChange={event => this.setState({term: event.target.value })} />
            </div>
        );
    }
}
//FUNCTIONAL BASED COMPONENT
//const SearchBar = () => { // contains just an input 
//    return <input />; // React.createElement
//};

export default SearchBar;

