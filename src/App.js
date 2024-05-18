import './App.css';
import { useState } from 'react';

function App() {
  
    const [email, setEmail] = useState('fracz@agh.edu.pl');

    function handleChange(event) {
        setEmail(event.target.value);
    }

    let message = "Masz krótki e-mail"
    
    if(email.length>15){
      message = "Masz dlugi e-mail"
    }else if(email.length> 5){
      message = "Masz ok e-mail"
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            
            <h2>Twój e-mail to {email}</h2>
            <h3>{message}</h3>
            <input type="text" value={email} onChange={handleChange}/>
        </div>
    );

}

export default App;
