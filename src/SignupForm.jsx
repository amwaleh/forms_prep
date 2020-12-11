import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import * as firebase from "firebase/app";
import "firebase/auth";

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
    name: "first_name",
    label: "First Name",
    required: true
  },
  {
    name: "last_name",
    label: "Last Name",
    required: true
  },
  {
    name: "password",
    label: "password",
    type: "password",
    required: true
  },
  {
    name: "email",
    label: "Email",
    required: true
  },
  {
    name: "Phone",
    label: "Phone Number",
    required: true
  },
  {
    name: "business_name",
    label: "Business Name",
    required: true
  },
  {
    name: "website",
    label: "Link to website",
    required: true
  },
  {
    name: "Country",
    label: "Where are you base of",
    required: true
  }
];
export default function BasicTextFields() {
  const classes = useStyles();
  const [values, setValue] = React.useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValues = { ...values, [name]: value };
    setValue(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
const {email, password} = values 
    firebase
    .auth()
      .createUserWithEmailAndPassword(email, password)
      // .then(({ user }) => {
      //   return user.getIdToken().then((idToken) => {
      //     return fetch("/sessionLogin", {
      //       method: "POST",
      //       headers: {
      //         Accept: "application/json",
      //         "Content-Type": "application/json",
      //         "CSRF-Token": Cookies.get("XSRF-TOKEN")
      //       },
      //       body: JSON.stringify({ idToken })
      //     });
      //   });
      // })
      .then((user) => {console.log(user)})
      .catch(error => {console.log(error.message)})
  }
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
