import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Row, Column, Item } from "@mui-treasury/components/flex";
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from "@mui-treasury/components/info";
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic";
import { useD01InfoStyles } from "@mui-treasury/styles/info/d01";
import Typography from "@material-ui/core/Typography";

export default React.memo(function DarkRapListItem() {
  const avatarStyles = useDynamicAvatarStyles({ size: 70 });
  return (
    <Column gap={2}>
      <Row>
        <Item>
          <Avatar
            variant={"rounded"}
            classes={avatarStyles}
            src={
              "https://shopage.s3.amazonaws.com/media/f855/580321926366_PEnByxR6Xdn7soyNMiGPG4ZPMng1N4CN4D4XvB7j.jpg"
            }
          />
        </Item>
        <Info useStyles={useD01InfoStyles}>
          <InfoCaption>Most Popular Genre Around</InfoCaption>
          <InfoTitle>
            <Typography color="textPrimary">Quirk</Typography>
          </InfoTitle>
          <InfoCaption>t/quirk</InfoCaption>
        </Info>
      </Row>
      <Row mt={1}>
        <Item>
          <Avatar
            variant={"rounded"}
            classes={avatarStyles}
            src={
              "https://music-artwork.com/wp-content/uploads/2018/04/dec110.jpg"
            }
          />
        </Item>
        <Info useStyles={useD01InfoStyles}>
          <InfoCaption>Most hit RNB Music Around</InfoCaption>
          <InfoTitle>
            <Typography color="textPrimary">RNB</Typography>
          </InfoTitle>
          <InfoCaption>t/rnb</InfoCaption>
        </Info>
      </Row>
    </Column>
  );
});
