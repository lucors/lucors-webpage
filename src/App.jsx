import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main.jsx";
import { Dvd } from "#apps/dvd/WindowDvd.jsx";
import { setShutdown } from "#store/screenSlice.js";

function App() {
  const dispatch = useDispatch();
  const shutdown = useSelector((state) => state.screen.shutdown);

  function deshutdown() {
    console.log("Доброе утро!");
    dispatch(setShutdown(false));
  }

  return (
    <>
      {shutdown && <Dvd fullscreen={true} onClick={deshutdown} />}
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
