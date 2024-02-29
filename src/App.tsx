import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import MembersOnly from './MembersOnly';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members-only" element={<MembersOnly />} />
        </Routes>
      </Layout>

    </BrowserRouter>)
}

export default App;
