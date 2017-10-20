import React from 'react';
import Lines from '../../containers/Lines/Lines';
import AddForm from '../../containers/AddForm/AddForm';
//import SearchForm from '../../containers/SearchForm/SearchForm';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <h1 className="title">My Line !</h1>
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/add">Add</Link></li>
                    </ul>
                    <Route exact path="/" component={Lines} />
                    <Route path="/add" component={AddForm} />
                </div>
            </Router>
            
        </div>
    )
}

export default App;

/*
    <SearchForm/>
    <AddForm/>
    <Lines/>
*/
