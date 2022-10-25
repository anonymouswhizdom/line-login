import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import liff from '@line/liff/dist/lib';

function App() {

  const [pictureUrl, setpictureUrl] = useState(logo);
  const [idToken, setIdToken] = useState("");
  const [displayName, setDislayName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [userId, setUserId] = useState("");

  const logout = () => {
    liff.logout();
    window.location.reload();
  }

  const initLine = () => {
    liff.init({ liffId: '1657591054-Gj8k8OBx' }, () => {
      if (liff.isLoggedIn()) {
        runApp();
      } else {
        liff.login();
      }
    }, err => console.error(err));
  }

  const runApp = () => {
    const idToken = liff.getIDToken();
    setIdToken(idToken);
    liff.getProfile().then(profile => {
      console.log(profile);
      setDislayName(Profile.displayName);
      setpictureUrl(Profile.pictureUrl);
      setStatusMessage(Profile.statusMessage);
      setUserId(Profile.userId);
    }).catch(err => console.error(err));
  }
   init
  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <div style={{  textAlign:  "center"  }}>
        <h1>React with LINE Login</h1>
        <hr/>
        <img src={pictureUrl} width="300px" height="300px"/>
        <p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%",  word-break: break-all }}><b>id token: </b> {idToken}</p>
        <p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%",  word-break: break-all }}><b>display name: </b> {displayName}</p>
        <p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%",  word-break: break-all }}><b>status message: </b> {statusMessage}</p>
        <p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%",  word-break: break-all }}><b>user id: </b> {userId}</p>

        <button onclick={() => logout()} style={{width: "100%", height: 30 }}>Logout</button>
      </div>  
      </header>
    </div>
  );
}

export default App;
