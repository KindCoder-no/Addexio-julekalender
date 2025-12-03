import React from "react";
import { createGlobalStyle } from "styled-components";
import Appbackground from "../img/calendar_backdrop.jpg"
import { Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
export default function Layout() {

    const GlobalStyle = createGlobalStyle`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');

        * {
            box-sizing: border-box;
        }

        body {
            background: center / cover fixed url(${Appbackground});
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            min-height: 100vh;
        }

        header {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        ::selection {
            background: rgba(196, 30, 58, 0.3);
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