import './App.css';
import "milligram";
import { useState } from 'react';
import LoginForm from "./LoginForm";
import UserPanel from './UserPanel';

function App() {
  
    const [authenticatedUserName, setAuthenticatedUserName] = useState("");

    function handleClick(){
      setAuthenticatedUserName("")
    }

    let content;
    if(authenticatedUserName){
      content = <UserPanel/>
    }else{
      content = <LoginForm onLogin={(email) => setAuthenticatedUserName(email)} buttonLabel="Zaloguj się"/>
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {content}
        </div>
    );

}

export default App;
