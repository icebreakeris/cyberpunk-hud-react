import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import { GlobalStyle } from "./styles/global";

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
