import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  Navigate
} from "react-router-dom";

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRedirected, setIsRedirected] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const url = 'https://fakestoreapi.com/users';
    const response = await fetch(url);

    if (response.ok) {
      const users = await response.json();

      const currentUser = users.find((user) => user.email === email && user.password === password);

      if (currentUser) {
        console.log('User authenticated successfully');
        setIsRedirected(true);
        // handle successful authentication
      } else {
        console.log('Invalid email or password');
        // handle authentication failure
      }
    } else {
      console.log('Failed to fetch users');
      // handle fetch failure
    }

    setIsLoading(false);
  };

  return <>
    <div className="login-wraper">
      <div className="login-box">
        <div className="text-center"><h2>Sing In</h2></div>
        <Form className= "login-form d-flex flex-column justify-content-between" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} required/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit" className="btn-login font-weight-bold text-uppercase">
            sign in
          </Button>
        </Form>
      </div>
      {isRedirected ? <Navigate to={'/addIncomes'}></Navigate> : ''}
    </div>


    {/* <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} required />
      </label>
      <br />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Log In'}
      </button>
      {isRedirected ? <Navigate to={'/addIncomes'}></Navigate> : ''}
    </form> */}
    </>
  ;

  // let [username, setUsername] = useState('');
  // let [password, setPassword] = useState('');

  // function submit() {
  //   fetch('https://fakestoreapi.com/users', {
  //     method: 'POST',
  //     body: JSON.stringify({username, password})
  //   }).then((response) => {
  //     if (response.ok) {
  //       console.log(response.json());
  //       // Редірект на іншу сторінку після успішного логіну
  //     } else {
  //       console.log('Неправильний email або пароль.');
  //     }
  //   })}

  // return <>
  //   <form onSubmit={submit}>
  //     <input placeholder="log" name="username" required value={username} onChange={e => setUsername(e.target.value)}></input>
  //     <input placeholder="pass" name="password" required value={password} onChange={e => setPassword(e.target.value)}></input>
  //     <button type="submit">Submit</button>
  //   </form>
  // </>
}

export default LogIn