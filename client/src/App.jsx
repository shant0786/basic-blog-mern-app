import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "./Pages/HomePage.jsx";
import InvalidPage from "./Pages/InvalidPage.jsx";
import ByCategoryPage from "./Pages/ByCategoryPage.jsx";
import DetailsPage from "./Pages/DetailsPage.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/byCategory/:categoryID" element={<ByCategoryPage/>}/>
                <Route path="/details/:postID" element={<DetailsPage/>}/>
                <Route path="*" element={<InvalidPage/>}/>
            </Routes>
        </BrowserRouter>

    );
};

export default App;