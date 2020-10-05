import React from 'react';
import './App.css';
import Layout from './Layout'
import Navbar from './components/Navbar'
import {StateManager} from './StateManager'
import Settings from './components/Pages/Settings/Settings'
import Content from './components/Content'
import Dashboard from './components/Pages/Dashboard/Dashboard'

function App() {
  return (
    <Layout>
      <StateManager>
        <Navbar/>
        <Content>
          <Settings/> 
          <Dashboard/>
        </Content>  
      </StateManager>
    </Layout>
  );
}

export default App;
