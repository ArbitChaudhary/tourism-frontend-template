import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import TourPreview from "./pages/Tour-Detail";
import DestinationList from "./pages/Destination-List";
import TourLists from "./pages/Tour-Lists";
import DestinationPreview from "./pages/Destination-Preview";
import AboutUs from "./pages/About-Us";
import SearchedList from "./pages/Searched-List";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour" element={<TourLists />} />
          <Route path="/tour-preview" element={<TourPreview />} />
          <Route path="/destinations" element={<DestinationList /> } />
          <Route path="/destination-preview" element={<DestinationPreview />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/searched-list" element={<SearchedList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
