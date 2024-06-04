import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage.jsx";
import MyWork from "./pages/Mywork.jsx";
import Contact from "./pages/Contact.jsx";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <>
      <Router>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/mywork" element={<MyWork />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
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
