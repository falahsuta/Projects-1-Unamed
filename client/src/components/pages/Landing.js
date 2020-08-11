import React from "react";
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import Recommend from "../Recommend";
import Header from "../Header";
import headerData from "../header-data";

// import Scroll2Fetch from "../Scoll2Fetch";
import Troll2Fetch from "../Troll2Fetch";

export default () => {
  return (
    <>
      <Container>
        <Box my={2}>
          <Header post={headerData} />
        </Box>
      </Container>
      <Recommend />
      <Troll2Fetch />
    </>
  );
};