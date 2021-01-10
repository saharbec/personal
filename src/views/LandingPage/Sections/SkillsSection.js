import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Quote from "components/Typography/Quote";

import styles from "assets/jss/material-kit-react/views/landingPageSections/skillsStyle.js";

import jsLogo from "assets/img/logos/Badge_js-strict.svg";
import reactLogo from "assets/img/logos/react-seeklogo.com.svg";
import angularLogo from "assets/img/logos/Angular_full_color_logo.svg";
import nodeJSLogo from "assets/img/logos/nodejs-1-logo-svg-vector.svg";
import cssLogo from "assets/img/logos/css3.png";
import htmlLogo from "assets/img/logos/html5.png";
import cPlusPlusLogo from "assets/img/logos/c++.png";
import postgresLogo from "assets/img/logos/postgresql.png";

const useStyles = makeStyles(styles);

export default function SkillsSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    // classes.imgRaised,
    // classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <div className={classes.typo}>
        <Quote
          text="Programming isn't about what you know;"
          secondLineText="It's about what you can figure out."
        />
      </div>
      <h2 className={classes.title}>My Skills</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={jsLogo} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Javascript
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={angularLogo} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Angular
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={reactLogo} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                React JS
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={nodeJSLogo} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Node.js
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={postgresLogo} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                PostgreSQL
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={cPlusPlusLogo} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                C++
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={htmlLogo} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                HTML5
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={cssLogo} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                CSS3
                <br />
              </h4>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
