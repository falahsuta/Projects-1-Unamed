import React from "react";
import Grid from "@material-ui/core/Grid";
import GridOfCard from "./GridOfCard";

const utils = (list, chuckSize) => {
  const _ = new Array(Math.ceil(list.length / chuckSize))
    .fill()
    .map((_, i) => list.slice(i * chuckSize, i * chuckSize + chuckSize));

  return [
    _.filter((a, i) => i % 2 === 0).flat(),
    _.filter((a, i) => i % 2 === 1).flat(),
  ];
};

export default (props) => {
  const { items } = props;

  const [left, right] = utils(items, 3);

  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={4}>
          <GridOfCard customData={left} />
          {/* <GridOfCard customData={splitData(items)[0]} /> */}
        </Grid>
        <Grid item xs={4} style={{ marginLeft: "25px" }}>
          <GridOfCard customData={right} />
          {/* <GridOfCard customData={splitData(items)[1]} /> */}
        </Grid>
      </Grid>
    </>
  );
};
