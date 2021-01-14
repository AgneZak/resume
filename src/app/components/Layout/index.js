import Header from "../Header";
import Footer from "../Footer";
import Divider from "../Divider";

function Layout({ children, setLanguage, language }) {
  return (
    <div className="App">
      <Header lang={language} setLang={setLanguage} />
      <main className="content"> {children} </main>
      <Divider />
      <Footer lang={language} />
    </div>
  );
}

export default Layout;
