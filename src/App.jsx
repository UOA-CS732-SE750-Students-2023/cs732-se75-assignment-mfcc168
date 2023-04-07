import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Mountain from './Mountain';
import Building from './Building';
import Galaxy from './Galaxy';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="3" element={<Galaxy/>} />
          <Route path="2" element={<Building/>} />
          <Route path="1" element={<Mountain/>} />
          <Route path="*" element={<Mountain/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
