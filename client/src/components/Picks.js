import React from "react";
import Grid from "@material-ui/core/Grid";
import GridOfCard from "./GridOfCard";

export default (props) => {
  const { items } = props;
  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={4}>
          <GridOfCard customData={items.slice(0, items.length / 2)} />
        </Grid>
        <Grid item xs={4} style={{ marginLeft: "25px" }}>
          <GridOfCard customData={items.slice(-items.length / 2)} />
        </Grid>
      </Grid>
    </>
  );
};
