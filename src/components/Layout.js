import React from "react";
import { createGlobalStyle } from "styled-components";
import Appbackground from "../img/calendar_backdrop.jpg"
import { Outlet, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
export default function Layout() {

    const GlobalStyle = createGlobalStyle`
        body {
            background: center / cover url(${Appbackground});
            margin: 0;
        }
        header {
            display: flex,
            align-items: center;
            justify-content: center;
            text-align: center;

        }
    `;

    return (
        <>
        <GlobalStyle />
        <div className="container">
        <Outlet />
        </div>
        </>
    );
}