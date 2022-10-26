// For some weird reason react-bootstrap import is failing
// probably issue is within tsconfig or webpack
import {
  Button,
  Form,
  InputGroup,
} from '../../../node_modules/react-bootstrap/esm/index';

const LoginView = () => {
  return (
    <div>
      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text />
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text />
          <Form.Control
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            type="password"
          />
        </InputGroup>
        <Button onClick={() => {}}>Login</Button>
      </Form>
    </div>
  );
};

export default LoginView;
