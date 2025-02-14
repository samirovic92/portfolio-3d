import styled, {ThemeProvider} from "styled-components";
import {darkTheme} from "./utils/Themes";
import Navbar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import Presentation from "./components/sections/Presentation";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Certifications from "./components/sections/Certifications";

const Body = styled.div`
    background-color: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.text_primary};
    width: 100%;
    overflow-x: hidden;
    position: relative;
`

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter>
                <Navbar/>
                <Body>
                    <Presentation/>
                    <Skills/>
                    <Experience/>
                    <Certifications />
                </Body>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
