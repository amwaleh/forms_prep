import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

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
  const niche = [
    "Home Furnishing",
    "Jewelry",
    "Textiles",
    "Apparel",
    "Furniture",
    "Lamps & lighting",
    "Serveware",
    "Art & painting",
    "Decor Objects",
    "Rugs & Carpets"
  ];
  const defaultNiche = niche.reduce((obj, n) => {
    obj[n] = false;
    return obj;
  }, {});
  const [values, setValue] = React.useState({});
  const [nichen, setNiche] = React.useState({ ...defaultNiche });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValues = { ...values, [name]: value };
    setValue(newValues);
  };
  const handleNiche = (e) => {
    const { name } = e.target;
    const newNiche = {
      ...nichen,
      [name]: !nichen[name]
    };

    setNiche(newNiche);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(values);
  return (
    <Container maxWidth="md">
      <Typography variant="h3"> Sign up as a Producer</Typography>
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
            <Grid item md={12}>
              <TextField
                required
                name="experience"
                label={"How many Years have you been in business"}
                fullWidth
                onChange={handleChange}
              />
            </Grid>

            <Grid item md={12}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">
                  What product category do yoiu operate in? (Check all that
                  apply)?
                </FormLabel>
                <Grid component={FormGroup} container sm={12}>
                  {niche.map((n, idx) => (
                    <Grid
                      component={FormControlLabel}
                      item
                      sm={6}
                      id={idx}
                      control={
                        <Checkbox
                          value={nichen[n]}
                          checked={nichen[n]}
                          onChange={handleNiche}
                          name={n}
                        />
                      }
                      label={n}
                    />
                  ))}
                </Grid>
              </FormControl>
            </Grid>

            <Grid item md={12}>
              <TextField
                required
                name="Craft_technique"
                label={"What crafts and techniques do you work in?"}
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Are you a </FormLabel>
                <RadioGroup
                  aria-label="Wholeseller_retailer"
                  name="Wholeseller_retailer"
                  value={values["Wholeseller_retailer"]}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Wholesaler"
                    control={<Radio />}
                    label="Wholeseller"
                  />
                  <FormControlLabel
                    value="Retailer"
                    control={<Radio />}
                    label="Retailer"
                  />
                  <FormControlLabel
                    value="Both"
                    control={<Radio />}
                    label="Both"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item md={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Are you a /an</FormLabel>
                <RadioGroup
                  aria-label="scale"
                  name="scale"
                  value={values["scale"]}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Independent Designer"
                    control={<Radio />}
                    label="Independent Designer"
                  />
                  <FormControlLabel
                    value="Small scale retailer"
                    control={<Radio />}
                    label="Small scale retailer"
                  />
                  <FormControlLabel
                    value="Large Scale retailer"
                    control={<Radio />}
                    label="Large Scale retailer"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid container item md={12} direction="column">
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Do you have in-house designer or design team{" "}
                </FormLabel>
                <RadioGroup
                  aria-label="Design"
                  name="in_house_design_team"
                  value={values["in_house_design_team"]}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item md={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Is your manufacturing done in-house or is it out sourced?{" "}
                </FormLabel>
                <RadioGroup
                  aria-label="Design"
                  name="Manufacturing"
                  value={values["Manufacturing"]}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="In-house"
                    control={<Radio />}
                    label="In-house"
                  />
                  <FormControlLabel
                    value="Outsourced"
                    control={<Radio />}
                    label="Outsourced"
                  />
                  <FormControlLabel
                    value="Both"
                    control={<Radio />}
                    label="Both"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
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
