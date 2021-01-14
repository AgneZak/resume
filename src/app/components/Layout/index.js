import Header from "../Header";
import {useState} from "react";

function Layout ({children, setLanguage, language}) {

    return (
        <div className="App">
            <Header lang={language} setLang={setLanguage}/>
            <main className="content"> {children} </main>
            <footer lang={language}>Here we will add footer</footer>
        </div>
    );
}

export default Layout;