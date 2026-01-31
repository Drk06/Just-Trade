import {Login, Signup} from './pages/index';
import Home from './components/Home';

import ProtectedRoute from './routes/protectedRoute';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div >
      <Routes>
        <Route element={<ProtectedRoute /> }>
          <Route path="/kite/*" element={<Home />} />
        </Route>
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;