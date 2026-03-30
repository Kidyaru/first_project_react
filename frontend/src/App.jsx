import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePages from "./pages/CreatePages";
import NoteDetail from "./pages/NoteDetail";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="forest"> 
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreatePages/>} />
        <Route path="/note/:id" element={<NoteDetail/>} />
      </Routes>
    </div>
  );
};

export default App;
