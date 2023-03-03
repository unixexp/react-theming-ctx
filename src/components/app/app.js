import React, { useState } from "react";
import { useCookies } from "react-cookie";
import "./app.scss";

import Button from "../button/button"

const PREFFERENCE_THEME_COOKIE = "preffered-theme"
const DARK_THEME_NAME = "theme-dark"
const LIGHT_THEME_NAME = "theme-light"

const App = () => {

    const [cookieTheme, setCookieTheme] = useCookies([PREFFERENCE_THEME_COOKIE])
    const preferredTheme = cookieTheme && cookieTheme[PREFFERENCE_THEME_COOKIE]
        ? cookieTheme[PREFFERENCE_THEME_COOKIE]
        : DARK_THEME_NAME
    const [theme, setTheme] = useState(preferredTheme);

    const toggleTheme = () => {
        const selectedTheme = theme === DARK_THEME_NAME ? LIGHT_THEME_NAME : DARK_THEME_NAME
        setTheme(selectedTheme)
        setCookieTheme(PREFFERENCE_THEME_COOKIE, selectedTheme)
    }

    return (
        <div className={`app ${theme}`}>
            <h1>Welcome to empty react application!</h1>
            <Button onClick={toggleTheme} theme={theme}>Toggle theme</Button>
        </div>
    );

};

export default App;