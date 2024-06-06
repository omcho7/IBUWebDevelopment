import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage.jsx";
import MyWork from "./pages/Mywork.jsx";
import Contact from "./pages/Contact.jsx";
import Grid from "@mui/material/Grid";
import "./App.css";

function TransitionRoutes() {
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={300} classNames="fade">
        <Routes location={location}>
          <Route path="/" element={<Homepage />} />
          <Route path="/mywork" element={<MyWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <>
      <Router>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <TransitionRoutes />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Router>
    </>
  );
}

export default App;
