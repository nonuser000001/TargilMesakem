import Button from "@mui/material/Button";
import React from "react";
import { Form } from "react-router-dom";

const LoginForm: React.FC = () => {
  return (
    <div className="LoginForm">
      <Form>
        <div>
          <p>כניסה</p>
          <label htmlFor="title"> מספר אישי</label>
          <input type="text" name="title" required />
        </div>
        <div>
          <Button variant="outlined" aria-label="fingerprint" color="success">
            התחברות
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default LoginForm;
