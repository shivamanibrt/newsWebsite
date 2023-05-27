import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './Layout/Layout';
import { Home } from './Components/Home';


function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
