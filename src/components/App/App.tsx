import React, {ReactElement} from 'react';
import './App.css';
import FoundProducts from "../FoundProducts/FoundProducts";
import SelectedProduct from "../SelectedProduct/SelectedProduct";
import SearchBar from "../SearchBar/SearchBar";
import {
    BrowserRouter as Router,
    Route, Switch
} from "react-router-dom";


const MeliApp = (): ReactElement => {
    // @ts-ignore
    return (
        <Router>
            <div className='background'>
                <Switch>
                    <Route path='/product/items/10'>
                        <SearchBar/>
                        <SelectedProduct/>
                    </Route>
                    <Route path='/product'>
                        <SearchBar/>
                        <FoundProducts/>
                    </Route>
                    <Route path='/'>
                        <SearchBar/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default MeliApp;
