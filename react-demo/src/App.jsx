import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import OAuth2Login from 'react-simple-oauth2-login';
import ReactDOM from 'react-dom';
import Debugger from './components/debug';
// Environment is not working so doing hardcoded config
import config from './config/config';
const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Debugger/>
      <OAuth2Login
          authorizationUrl={config.AUTH_ENDPOINT}
          responseType="token"
          clientId={config.CLIENT_ID}
          redirectUri="http://localhost:3000/oauth-callback"
          onSuccess={onSuccess}
          onFailure={onFailure}/>
    </div>
  )
}

export default App
