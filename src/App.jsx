import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './component/Header.jsx';
import Content from './component/Content.jsx';
import Footer from './component/footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Content />
    <Footer />
  </StrictMode>,
)