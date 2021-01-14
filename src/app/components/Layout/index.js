import Header from "../Header";
function Layout ({children}) {
    return (
        <div className="App">
            <Header />
            <main> {children} </main>
            <footer>Here we will add footer</footer>
        </div>
    );
}

export default Layout;