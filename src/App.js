import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import Chain from './pages/Chain';
import BlockPage from './pages/Block';
import TransactionPage from './pages/Transaction';
import AddressPage from './pages/Address';


function App() {
  return (
    <Container fluid className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chain />} />
          <Route path="/block/:blockNumber" element={<BlockPage />} />
          <Route path="/tx/:txHash" element={<TransactionPage />} />
          <Route path="/address/:address" element={<AddressPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );

}

export default App;
