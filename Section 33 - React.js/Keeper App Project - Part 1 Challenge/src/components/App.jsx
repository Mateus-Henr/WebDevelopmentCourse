import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App()
{
    // CSS should not go into custom components.
    return (
        <div>
            <Header />
            <Note />
            <Footer />
        </div>
    );
}

export default App;
