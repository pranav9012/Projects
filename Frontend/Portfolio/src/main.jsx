import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import SketchFabViewer from './SketchFab'
import App from './App.jsx';
import './style.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <SketchFabViewer modelUid={"e433923a64d549fabb2d30635d643ab6"}/> */}
  </StrictMode>,
)
