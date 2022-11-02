import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './stories/Header';
import { Banner } from './stories/Banner';

function App() {
  const [user, setUser] = React.useState();
  return (
    <div className="App">
      <Header user={user} onLogin={() => setUser({ name: 'Dom58' })}/>
      
      <Banner size={'medium'} backgroundColor='red'>
        Hello There
      </Banner>
    </div>
  );
}

export default App;
