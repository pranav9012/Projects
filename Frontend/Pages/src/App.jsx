import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Page from './components/Page';


function App() {

  return (
    <div className='flex flex-col min-h-screen relative'>
    <Header />
    <Page className='flex-grow'/>
    <Footer className='relative'/>
    </div>
  )
}

export default App;
