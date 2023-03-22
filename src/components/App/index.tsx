import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsPage from 'components/NewsPage';
import NewsDetailPage from 'components/NewsDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NewsPage />} />
        <Route path=':id' element={<NewsDetailPage />}/>   
      </Routes>       
    </Router> 
  );
}

export default App;
