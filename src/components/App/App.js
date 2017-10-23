import React from 'react';
import SearchForm from '../../containers/SearchForm/SearchForm';
import AddForm from '../../containers/AddForm/AddForm';
//import SearchForm from '../../containers/SearchForm/SearchForm';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <h1 className="title">LineRR !</h1>
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Search</Link></li>
                        <li><Link to="/add">Add</Link></li>
                    </ul>
                    <Route exact path="/" component={SearchForm} />
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
