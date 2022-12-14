// For some weird reason react-bootstrap import is failing
// probably issue is within tsconfig or webpack
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Form,
  InputGroup,
} from '../../../node_modules/react-bootstrap/esm/index';
import { login } from '../../api/login';
import useToast from '../../components/Toasts';
import './Login.css';
import axios from 'axios';

const LoginView = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { notifyError, notifySuccess } = useToast();
  const navigate = useNavigate();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const {
        data: { token },
      } = await login(username, password);
      localStorage.setItem('auth_token', token);
      axios.defaults.headers.common['Authorization'] = `Token ${token}`;
      notifySuccess('Logged in');
      navigate('/gallery/');
    } catch (error) {
      console.log("shouldn't it notify?");
      notifyError('Invalid credentials');
    }
  };

  return (
    <div className="center-div login-form">
      <Form onSubmit={onSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text />
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text />
          <Form.Control
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        <Button type="submit">Login</Button>
      </Form>
      <Link to={'/register'}>No account? No problems. Register here</Link>
    </div>
  );
};

export default LoginView;
