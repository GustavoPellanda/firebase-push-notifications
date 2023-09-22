import React from 'react';
import MainPage from './components/MainPage/MainPage';

function App() {
  const titleText = "Teste de Push Notifications";
  const buttonText = "Receber Notificações"; 

  return (
    <div className="App">
      <MainPage titleText={titleText} buttonText={buttonText} />
    </div>
  );
}

export default App;
