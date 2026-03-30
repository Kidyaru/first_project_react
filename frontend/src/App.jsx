import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePages from "./pages/CreatePages";
import NoteDetail from "./pages/NoteDetail";

const App = () => {
  return (
    <div className="relative min-h-screen w-full">

      {/* background */}
      <div
        className="absolute inset-0 -z-10 w-full
      [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]"
      />

      {/* content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePages />} />
        <Route path="/note/:id" element={<NoteDetail />} />
      </Routes>
    </div>
  );
};

export default App;
