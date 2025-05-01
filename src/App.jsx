import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Footer from "#layout/footer/Footer";
import Header from "#layout/header/Header";
import Main from "#layout/main/Main.jsx";
import { setShutdown } from "#store/screenSlice.js";
import { lazy, Suspense } from "react";

const Dvd = lazy(() => import("#apps/dvd/Dvd.jsx"));

function App() {
  const dispatch = useDispatch();
  const shutdown = useSelector((state) => state.screen.shutdown);

  function deshutdown() {
    console.log("Доброе утро!");
    dispatch(setShutdown(false));
  }

  return (
    <>
      {shutdown && <Suspense><Dvd fullscreen={true} onClick={deshutdown} /></Suspense>}
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
