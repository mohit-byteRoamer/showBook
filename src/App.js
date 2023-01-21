import Home from "./components/modules/home-page";
import MovieDetailPage from "./components/modules/movie-detail-page";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-detail-page/:id" element={<MovieDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
