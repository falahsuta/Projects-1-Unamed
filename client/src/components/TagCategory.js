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
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";

export default React.memo(function DarkRapListItem() {
  const avatarStyles = useDynamicAvatarStyles({ size: 70 });
  // https://music-artwork.com/wp-content/uploads/2020/06/preview_artwork072.jpg
  // https://music-artwork.com/wp-content/uploads/2018/04/dec110.jpg ==>> rnb
  const tags = [
    {
      name: "Quirk",
      link:
        "https://shopage.s3.amazonaws.com/media/f855/580321926366_PEnByxR6Xdn7soyNMiGPG4ZPMng1N4CN4D4XvB7j.jpg",
      caption: "Most Popular Genre Around",
    },
    {
      name: "Bizzare",
      link:
        "https://music-artwork.com/wp-content/uploads/2020/05/preview_artwork55.jpg",
      caption: "Bizzare Things Around",
    },
    // "COOL",
    {
      name: "Cool",
      link:
        "https://music-artwork.com/wp-content/uploads/2018/04/artwork_music-2.jpg",
      caption: "The coolest thing you'd find",
    },
    // "INFORMATIVE",
    {
      name: "Informative",
      link:
        "https://music-artwork.com/wp-content/uploads/2020/05/preview_artwork34-1.jpg",
      caption: "You'll find it useful",
    },
    // "TECH",
    // {
    //   name: "Tech",
    //   link:
    //     "https://music-artwork.com/wp-content/uploads/2020/06/preview_artwork87.jpg",
    //   caption: "Makes you a Techie geek",
    // },
    // "RNB",
    // "SOUL",
    // "POP",
    // "STUDY_TIPS",
  ];
  const renderTag = tags.map((tag) => {
    return (
      <Row mt={1}>
        <Item>
          <Avatar variant={"rounded"} classes={avatarStyles} src={tag.link} />
        </Item>
        <Info useStyles={useD01InfoStyles}>
          <InfoCaption>{tag.caption}</InfoCaption>
          <InfoTitle>
            <Typography color="textPrimary">{tag.name}</Typography>
          </InfoTitle>
          <InfoCaption>{`t/${tag.name.toLowerCase()}`}></InfoCaption>
        </Info>
      </Row>
    );
  });

  return <Column gap={2}>{renderTag}</Column>;
});
