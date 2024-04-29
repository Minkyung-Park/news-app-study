import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import NewsPage from "./pages/NewsPage";

// :category -> url를 파라미터로 넘겨 주겠다

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
