import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import MyRoutes from './router'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Suspense fallback={<>正在加载……</>}>
          <MyRoutes />
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;