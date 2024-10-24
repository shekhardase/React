import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const App = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-lg">This is the main content of the page.</p>
      </main>
      <Footer />
    </div>

  );

};

export default App;
