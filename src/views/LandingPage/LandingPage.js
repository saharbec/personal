import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import IntroSection from "./Sections/IntroSection.js";
import SkillsSection from "./Sections/SkillsSection.js";
import WorkSection from "./Sections/WorkSection.js";

// Backgrounds
import newYorkBg from "assets/img/newyorkbg.jpg";
import cityBg from "assets/img/287214.jpg";
import skyBlueSparkBg from "assets/img/1072245.png";

let changePosition = false;
let bg = null;
const isParallaxSmall = window.innerWidth < 700 ? true : false;

(() => {
  const num = Math.floor(Math.random() * 100);
  if (num < 33) {
    bg = newYorkBg;
  } else if (num > 66) {
    bg = cityBg;
  } else {
    changePosition = true;
    bg = skyBlueSparkBg;
  }
})();

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Sahar Bechor"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax
        filter
        image={bg}
        changePosition={changePosition}
        small={isParallaxSmall}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={5}>
              <h1 className={classes.title}>Think twice, Code once.</h1>
              <h4 style={{ fontWeight: 400 }}>
                {/*There are only two kinds of languages: the ones people complain
                about and the ones nobody use.*/}
                If you want to be successful, It{"'"}s just this simple. Know
                what you are doing, Love what you are doing and believe in what
                you are doing.
              </h4>
              <br />
              {/*<Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>*/}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <IntroSection />
          <SkillsSection />
          {/*<WorkSection />*/}
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
    </div>
  );
}
