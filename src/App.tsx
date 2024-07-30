import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import SavedNews from "./pages/SavedNews/SavedNews";
import Search from "./pages/Search/Search";
import Upload from "./pages/Upload/Upload";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "./store/store";
import { setLoader } from "./store/WebSlice";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const web = useSelector((store: StoreState) => store.web);
  useEffect(() => {
    dispatch(setLoader(false));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {web.loader ? <WebLoader /> : null}
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="saved" element={<SavedNews />} />
          <Route path="home" element={<Home />} />
          <Route path="news/:id" element={<News />} />
          <Route path="search" element={<Search />} />
          <Route path="upload" element={<Upload />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

export function WebLoader() {
  return (
    <div className="fixed bg-bodyBg top-0 left-0 h-full w-full flex z-40 justify-center items-center">
      <div className="Loader relative z-10"></div>
    </div>
  );
}
export function ContentLoader() {
  return (
    <div className="absolute bg-bodyBg top-0 left-0 h-full w-full flex z-40 justify-center items-center">
      <div className="Loader relative z-10"></div>
    </div>
  );
}
