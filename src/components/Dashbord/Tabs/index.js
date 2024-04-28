import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import Grid from "../Grid";
import "./styles.css"

export default function TabsComponent({ coins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontfamily: "Inter",
    textTransform: "capitalize",
  };
  // used to change the theme of mui compnoent
  const theme = createTheme({
    palette: {
      primary: { main: "#3a88e9" },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>

        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.map((coin, i) => {
              return (
              <Grid coin={coin} key={i}/>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <div>
            {coins.map((iteam, i) => {
              return (
                <div key={i}>
                  <img src={iteam.image}></img>
                <p >
                  {i + 1}.{iteam.id}
                </p>
                </div>
              );
            })}
          </div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
