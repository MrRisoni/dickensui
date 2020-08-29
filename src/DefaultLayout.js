import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import SideBar from "./SideBar";

const DefaultLayout = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={matchProps => (
            <main>
                <div className="d-flex" id="wrapper">


                    <SideBar/>

                    <div id="page-content-wrapper">

                        <div className="container-fluid">
                            <Component {...matchProps} />
                        </div>
                    </div>
                </div>
            </main>
        )}
    />
);


export default DefaultLayout;
