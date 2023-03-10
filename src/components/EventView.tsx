import React, { memo, useState } from "react";
import { useModel } from "./hooks/context";
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import moment from "moment";

const EventView = () => {
  const { logs } = useModel();
  const [activeIndex, setActiveListIndex] = useState<number | null>(null);

  const handleClick = (index: number | null) => {
    setActiveListIndex(index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 1,
      }}
    >
      <Typography
        variant={"h5"}
        sx={{
          borderBottom: "2px solid whitesmoke",
        }}
      >
        Events (click on messenger)
      </Typography>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {logs?.map((l, index) => {
          return (
            <>
              {l.message ? (
                <ListItemButton
                  onClick={() =>
                    handleClick(activeIndex === null ? index : null)
                  }
                >
                  <ListItemText primary={l.log} />
                  {l.message &&
                    (activeIndex === index ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
              ) : (
                <ListItem>
                  <ListItemText primary={l.log} />
                </ListItem>
              )}
              {l.message && (
                <Collapse
                  in={activeIndex === index}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItemText
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 1,
                      }}
                    >
                      <Typography>type - {l.message.type}</Typography>
                      <Typography>owner - {l.message.owner.name}</Typography>
                      <Typography>status - {l.message.status}</Typography>
                      <Typography>
                        date -{" "}
                        {moment(l.message.date).format("DD/MM/YYYY hh:mm")}
                      </Typography>
                    </ListItemText>
                  </List>
                </Collapse>
              )}
            </>
          );
        })}
      </List>
    </Box>
  );
};

export default memo(EventView);
