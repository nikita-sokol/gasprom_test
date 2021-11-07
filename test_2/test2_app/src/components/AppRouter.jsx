import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Services from "../pages/Services";
import ServiceIdPage from "../pages/ServiceIdPage";

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Services} />
                    <Route path="/:id/details" component={ServiceIdPage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default AppRouter;