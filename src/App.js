import React from 'react';
import './App.css';
import { Header } from './stories/Header';
import { Banner } from './stories/banners/Banner';
import { Separator } from './stories/separator/Separator';

function App() {
  const [user, setUser] = React.useState();
  return (
    <div className="App">
      <Header user={user} onLogin={() => setUser({ name: 'Dom58' })}/>
      <Separator size='medium' backgroundColor = 'red' />

      <Banner 
        size={'medium'} 
        backgroundColor = 'white' 
        imageUrl='https://www.inkling.com/wp-content/uploads/2021/06/SD-default-image.png'
        content={'Hello There'}
        check= {{hello: 'world'}}
        theArray= {[{1: 'One'}, {2: 'Two'}, {3: "Three"}]}
      />

      <Banner> 
        <h1>New Children!</h1>
      </Banner>
    </div>
  );
}

export default App;
