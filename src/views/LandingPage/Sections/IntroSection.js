import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ScheduleIcon from "@material-ui/icons/Schedule";
import GroupIcon from "@material-ui/icons/Group";
import WhatshotIcon from "@material-ui/icons/Whatshot";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/introStyle.js";
import Quote from "components/Typography/Quote";

const useStyles = makeStyles(styles);

export default function IntroSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Keeping it simple</h2>
          <h5 className={classes.description}>
            I{"'"}m Sahar Bechor, 3rd year BSc student in Computer Science and a
            full stack developer excited and eager to learn and create new
            skills, improve existing ones and push myself everyday to the limit.
          </h5>
        </GridItem>
      </GridContainer>
      <div style={{ margin: "40px 0" }}>
        <Quote
          text="There are only two kinds of languages:"
          secondLineText="The ones people complain
                about and the ones nobody use."
        />
      </div>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Quick Learning"
              description="Embrace new challanges and tackle them with full power, Never pass up on the opportunity to feed my mind. Every great programmer started with a what seemed to be a complicated line of code of greeting the world"
              icon={ScheduleIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Team Player"
              description="Never stop learning and teaching. We are all pieces of the puzzle and there is a limit to what an individual can achieve on his own. I believe my companions should always be heared and anyone can and should contribute."
              icon={GroupIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Passion"
              description="Nothing can top the feeling of watching my code become an impressive application or a complete functioning system. LOVE to make something out of nothing! do what you love and you will never work a day in your life."
              icon={WhatshotIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
