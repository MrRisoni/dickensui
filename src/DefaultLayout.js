import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SideBar from "./SideBar";

const DefaultLayout = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={matchProps => (
            <main>
                <div className="d-flex" id="wrapper">
                    <SideBar/>
                    <Component {...matchProps} />
                </div>
            </main>
        )}
    />
);


export default DefaultLayout;
