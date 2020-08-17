import React from "react";

import HorizontalCard from "./HorizontalCard";
import Divider from "@material-ui/core/Divider";

export default (props) => {
  const datalength = props.customData.length - 1;
  const renderMiddle = props.customData.map((element, index) => {
    return (
      <>
        <HorizontalCard
          id={element._id}
          title={element.title}
          imglink={element.image}
          tag={element.tag}
          name={element.username}
        />
        <Divider
          light
          style={{
            margin: "13px 0",
            // height: index === 0 ? "0.6px" : "1px",
            width: "355px",
            display: index === datalength ? "none" : undefined,
          }}
        />
      </>
    );
  });

  return <>{renderMiddle}</>;
};
