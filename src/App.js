import './App.css';
import "milligram";
import { useState } from 'react';

function App() {
  
    const [email, setEmail] = useState('');
    const [isLogggedIn, setIsLoggedIn] = useState(false);
    function handleChange(event) {
        setEmail(event.target.value);
    }

    function handleClick(){
      if (isLogggedIn===true){
        setIsLoggedIn(false)
      }else{
        setIsLoggedIn(true)
      }
    }

    let message = "Masz krótki e-mail"
    
    if(email.length>15){
      message = "Masz dlugi e-mail"
    }else if(email.length> 5){
      message = "Masz ok e-mail"
    }
    let content;
    if(isLogggedIn==true){
      content = <div>
        <h2>Witaj, {email}</h2>
        <button onClick={handleClick}>Wyloguj</button> 
      </div>
    }else{
      content = <div>
        <h2>Twój e-mail to {email}</h2>
        <h3>{message}</h3>
        <input type="text" value={email} onChange={handleChange}/>
        <button onClick={handleClick}>Wchodzę</button> 
      </div>
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {content}
        </div>
    );

}

export default App;
