import React, { useCallback, useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";

const useStyles = makeStyles((theme) => ({
  formBody: {
    display: "flex"
  },
  field: {
    padding: "10px"
  }
}));
const Fields = [
  {
    name: "email",
    label: "Email",
    required: true
  },
  {
    name: "password",
    label: "password",
    type: "password",
    required: true
  }
];
const Login = props =>  {
  const classes = useStyles();
  // const [values, setValue] = React.useState({});
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   const newValues = { ...values, [name]: value };
  //   setValue(newValues);
  // };
 const {history } = props
  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  
  return (
    <Container maxWidth="md">
      <Typography variant="subtitle1"> Sign up as a Producer</Typography>
      <form
        noValidate
        autoComplete="off"
        className={classes.formBody}
        onSubmit={handleSubmit}
      >
        <Grid container spacing={4}>
          {Fields.map((field) => (
            <Grid item md={8}>
              <TextField
                required={field?.required}
                name={field.name}
                label={field.label}
                type={field?.type}
                fullWidth
                onChange={handleChange}
              />
            </Grid>
          ))}
          <Grid container item md={8} direction="row-reverse">
            <Button color="primary" variant="outlined" type="submit">
              Submit{" "}
            </Button>
          </Grid>
        
        </Grid>
      </form>
    </Container>
  );
}
export default withRouter(Login)