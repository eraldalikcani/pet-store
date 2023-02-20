import { Container } from "@mui/material";
import { Route, Routes } from 'react-router-dom';
import Catalog from "../../features/Catalog";
import Header from "./Header";

function App() {
  return (
    <>
    <Header />
    <Container>
      <Routes>
        <Route path="/Pets" element={<Catalog />} />
      </Routes>
    </Container>
    </>
  );
}

export default App;
