import { ChatEngine, ChatFeed } from "react-chat-engine" ;
import './App.css';
import  './Components/ChatFeed.js';
import Login from './Components/Login';

function App() {

  if(!localStorage.getItem('username')) return <Login/>
  return (
    <div className="App">
     <ChatEngine
        height="100vh"
        projectID="f437874f-edd0-42cc-929a-8c228c48c50c"
        userName="Ranjeeta"
        userSecret="qwerty"
        renderChatFeed={ (chatAppProps) => <ChatFeed {...chatAppProps } />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
     />
    </div>
  );
}

export default App;
