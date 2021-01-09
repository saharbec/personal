/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import GetAppIconRounded from '@material-ui/icons/GetApp';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
      <List className={classes.list}>
          <ListItem className={classes.listItem}>
              <CustomDropdown
                  noLiPadding
                  buttonText="About Me"
                  buttonProps={{
                      className: classes.navLink,
                      color: 'transparent',
                  }}
                  buttonIcon={Apps}
                  dropdownList={[
                      <Link to="/" className={classes.dropdownLink}>
                          My Projects
                      </Link>,
                      <a href="/" className={classes.dropdownLink}>
                          Contact
                      </a>,
                  ]}
              />
          </ListItem>
          <ListItem className={classes.listItem}>
              <Button href="assets/Sahar Bechor - CV.pdf" color="transparent" className={classes.navLink} download>
                  <GetAppIconRounded className={classes.icons} style={{ marginRight: '6px' }} />
                  Resume
              </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
              {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
              <Tooltip
                  id="instagram-twitter"
                  title="Follow me on Twitter"
                  placement={window.innerWidth > 959 ? 'top' : 'left'}
                  classes={{ tooltip: classes.tooltip }}
              >
                  <Button
                      href="https://twitter.com/BechorSahar"
                      target="_blank"
                      color="transparent"
                      className={classes.navLink}
                  >
                      <i className={classes.socialIcons + ' fab fa-twitter'} />
                  </Button>
              </Tooltip>
          </ListItem>
          <ListItem className={classes.listItem}>
              <Tooltip
                  id="instagram-facebook"
                  title="Follow me on Facebook"
                  placement={window.innerWidth > 959 ? 'top' : 'left'}
                  classes={{ tooltip: classes.tooltip }}
              >
                  <Button<button>
                      color="transparent"
                      href="https://www.facebook.com/sahar.bechor"
                      target="_blank"
                      className={classes.navLink}
                  >
                      <i className={classes.socialIcons + ' fab fa-facebook'} />
                  </Button>
              </Tooltip>
          </ListItem>
          <ListItem className={classes.listItem}>
              <Tooltip
                  id="instagram-tooltip"
                  title="Follow me on Linkedin"
                  placement={window.innerWidth > 959 ? 'top' : 'left'}
                  classes={{ tooltip: classes.tooltip }}
              >
                  <Button
                      color="transparent"
                      href="https://www.linkedin.com/in/saharbechor/"
                      target="_blank"
                      className={classes.navLink}
                  >
                      <i className={classes.socialIcons + ' fab fa-linkedin'} />
                  </Button>
              </Tooltip>
          </ListItem>
          <ListItem className={classes.listItem}>
              <Button
                  color="transparent"
                  className={classes.navLink}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                  <ArrowUpwardIcon />
              </Button>
          </ListItem>
      </List>
  );
}
