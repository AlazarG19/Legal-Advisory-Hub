import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/clientlogin', {
        username,
        password,
      });
      axios.get(`http://localhost:3000/getUser/${username}`).then(result => {
            sessionStorage.setItem('user', JSON.stringify(result.data));
            setUser(result.data);
            console.log("from session", sessionStorage.getItem('user'));
            if(result.data[0].userType == 'client'){
              console.log("this user is a client")
              navigate('/users')
            }else{
              console.log("this is a freelancer")
              navigate('/freelancerProfile')
            }

            
          
        });
        
      if (response.status === 200) {
        console.log('Login successful');
        
        
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage('Invalid username or password');
      } else {
        setErrorMessage('Internal server error');
      }
    }
  };
  useEffect(() => {

    const storedJson = sessionStorage.getItem('user');
    const userData = JSON.parse(storedJson);

    if (userData) {
      const userType = userData[0].userType;
      if (userType == 'client') {
        navigate('/users');
      } else {
        navigate('/freelancerProfile');
      }
    }else{
      navigate('/login')
    }
  }, [navigate]);
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
