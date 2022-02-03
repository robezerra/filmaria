import { BrowserRouter, Routes, Route } from "react-router-dom";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
