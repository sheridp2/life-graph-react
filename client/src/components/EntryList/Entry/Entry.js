import React, { useState } from "react";
import { Card, Box, Tab, Tabs, Typography, Chip } from "@material-ui/core";
import moment from "moment";

import useStyles from "./styles";

export default function Entry({ entry }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  return (
    <Card className={classes.card} raised elevation={6}>
      <div className={classes.overlay}>
        <Typography variant='h6'>{entry.title}</Typography>
        <Typography variant='h6'>
          {moment(entry.date).format("MMMM Do YYYY, h:mm:ss a")}
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant='scrollable'
              scrollButtons='auto'
              aria-label='scrollable auto tabs example'>
              <Tab
                className={classes.tab}
                label={`Overall: ${entry.todaysScore}`}
                {...a11yProps(0)}
              />
              <Tab
                className={classes.tab}
                label={`High: ${entry.highScore}`}
                {...a11yProps(1)}
              />
              <Tab
                className={classes.tab}
                label={`Low: ${entry.lowScore}`}
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <span style={{ whiteSpace: "pre-line" }}>{entry.body}</span>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <span style={{ whiteSpace: "pre-line" }}>{entry.highBody}</span>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <span style={{ whiteSpace: "pre-line" }}>{entry.lowBody}</span>
          </TabPanel>
        </Box>

        <div className={classes.details}>
          <Typography variant='body2' color='textSecondary' component='h2'>
            {entry.tags.map((tag, index) => (
              <Chip key={index} style={{ margin: "2px" }} label={`#${tag}`} />
            ))}
          </Typography>
        </div>
      </div>
    </Card>
  );
}
