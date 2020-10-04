import React from 'react';
import './App.css';
import Layout from './Layout'
import Navbar from './components/Navbar'
import {StateManager} from './StateManager'
import Settings from './components/Settings'

function App() {
  return (
    <Layout>
      <StateManager>
        <Navbar/>
        <Settings/>
      
      </StateManager>
    </Layout>
  );
}

export default App;
