import { useLayoutEffect, useRef } from 'react';
import './App.css';
import { Player } from '@vindral/web-sdk';

function App() {
  const playerRef = useRef<HTMLDivElement>(null);

  const vindral = new Player(
    {
      url: "https://lb.dev.cdn.vindral.com",
      channelId: "vindral_demo1_ci_a15cda72-ddb4-4882-85bf-5139f5eb86a3",
      logLevel: "info",
      iosMediaElementEnabled: true
    },
    { fullscreenButtonEnabled: true, controlsEnabled: false }
  );

  useLayoutEffect(() => {
      if(playerRef.current){
        vindral.attach(playerRef.current);
        vindral.core.play();
      }
  });
  
  return (
    <div className="App">
      <div ref={playerRef}></div>
    </div>
  );
}

export default App;
