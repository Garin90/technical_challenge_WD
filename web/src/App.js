import { Route, Routes } from "react-router-dom";
import './App.css';
import List from './components/List'
import Detail from './components/Detail'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/phones" element={<List />} />
        <Route path="/phones/:id" element={<Detail />} />
        </Routes>
    </div>
  );
}

export default App;
