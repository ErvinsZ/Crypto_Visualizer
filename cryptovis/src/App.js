import React from 'react';
import './App.css';
import Layout from './Layout'
import Navbar from './components/Navbar'
import {StateManager} from './StateManager'
import Settings from './components/Settings'
import Content from './components/Content'

function App() {
  return (
    <Layout>
      <StateManager>
        <Navbar/>
        <Content>
          <Settings/> 
        </Content>  
      </StateManager>
    </Layout>
  );
}

export default App;
