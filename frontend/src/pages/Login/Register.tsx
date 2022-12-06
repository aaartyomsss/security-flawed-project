import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Form,
  InputGroup,
} from '../../../node_modules/react-bootstrap/esm/index';
import { RegisterData, registerUser } from '../../api/login';
import useToast from '../../components/Toasts';
import './Login.css';

const RegisterView = () => {
  const { notifySuccess } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterData>({
    username: '',
    first_name: '',
    last_name: '',
    password: '',
    social_security_number: '',
  });

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      notifySuccess('Registered successfully');
      navigate('/login');
    } catch (error) {}
  };

  const onChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
            name="username"
            value={formData.username}
            onChange={onChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text />
          <Form.Control
            placeholder="First name"
            aria-label="First name"
            aria-describedby="basic-addon1"
            name="first_name"
            value={formData.first_name}
            onChange={onChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text />
          <Form.Control
            placeholder="Last name"
            aria-label="Last name"
            aria-describedby="basic-addon1"
            name="last_name"
            value={formData.last_name}
            onChange={onChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text />
          <Form.Control
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            type="password"
            name="password"
            value={formData.password}
            onChange={onChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text />
          <Form.Control
            placeholder="Social security number"
            aria-label="Social security number"
            aria-describedby="basic-addon1"
            name="social_security_number"
            value={formData.social_security_number}
            onChange={onChange}
          />
        </InputGroup>
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
};

export default RegisterView;
