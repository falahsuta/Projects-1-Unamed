import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

// Destructure props
const FirstStep = ({
  handleNext,
  handleChange,
  values: { title, lastName, email, gender },
  filedError,
  isError,
}) => {
  // Check if all values are not empty
  const isEmpty =
    title.length > 0 &&
    title.length > 35 &&
    title.length < 71 &&
    lastName.length >= 3 &&
    gender.length > 0 &&
    email.length > 0;

  return (
    <Fragment>
      <Grid container spacing={2} noValidate>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            placeholder="Your Title"
            defaultValue={title}
            onChange={handleChange("title")}
            margin="normal"
            error={filedError.title !== ""}
            helperText={filedError.title !== "" ? `${filedError.title}` : ""}
            required
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            placeholder="Your last name"
            defaultValue={lastName}
            onChange={handleChange("lastName")}
            margin="normal"
            error={filedError.lastName !== ""}
            helperText={
              filedError.lastName !== "" ? `${filedError.lastName}` : ""
            }
            required
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            placeholder="Your email address"
            type="email"
            defaultValue={email}
            onChange={handleChange("email")}
            margin="normal"
            error={filedError.email !== ""}
            helperText={filedError.email !== "" ? `${filedError.email}` : ""}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required margin="normal">
            <InputLabel htmlFor="gender">Gender</InputLabel>
            <Select value={gender} onChange={handleChange("gender")}>
              <MenuItem value={"Male"}>Quirk</MenuItem>
              <MenuItem value={"Cool"}>Cool</MenuItem>
              <MenuItem value={"Informative"}>Informative</MenuItem>
              <MenuItem value={"Tech"}>Tech</MenuItem>
              <MenuItem value={"Rnb"}>Rnb</MenuItem>
              <MenuItem value={"Soul"}>Soul</MenuItem>
              <MenuItem value={"Pop"}>Pop</MenuItem>
              <MenuItem value={"Study-tips"}>Study-Tips</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button
          variant="contained"
          disabled={!isEmpty || isError}
          color="primary"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </Fragment>
  );
};

export default FirstStep;
