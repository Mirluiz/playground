import React, { FC } from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Chip,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Switch,
  Typography,
} from "@mui/material";
import { User, UserObject, Users } from "./types";
import { users } from "./Dummies";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import useChat from "./context";

const ControlPanel = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        padding: 1,
      }}
    >
      <Section section={"Palette"}>
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="Mode" />
        </FormGroup>
      </Section>

      <Section section={"User's actions"}>
        <Grid container>
          {Object.keys(users).map((user) => {
            return (
              <Grid item md={6}>
                <UserController user={users[user as keyof Users]} />
              </Grid>
            );
          })}
        </Grid>
      </Section>
    </Box>
  );
};

const Section: FC<{
  section: string;
  children: React.ReactNode;
}> = ({ section, children }) => {
  return (
    <Box
      sx={{
        borderBottom: "2px solid whitesmoke",
        paddingBottom: 1,
      }}
    >
      <Typography
        sx={{
          marginLeft: 0.4,
          marginBottom: 1,
        }}
      >
        {section}
      </Typography>
      {children}
    </Box>
  );
};

const UserController: FC<{
  user: UserObject;
}> = ({ user }) => {
  const { id, name, avatar, generateMessage } = user;
  const { addNewMessage } = useChat();

  return (
    <Box
      sx={{
        marginBottom: 2,
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
      }}
    >
      <div>
        <Chip
          size={"small"}
          avatar={<Avatar src={avatar} />}
          label={name}
          variant="outlined"
        />
      </div>
      <ButtonGroup variant="outlined">
        <IconButton
          size={"small"}
          title={"Send Text"}
          onClick={() => {
            addNewMessage(generateMessage("text"));
          }}
        >
          <TextsmsOutlinedIcon fontSize={"small"} />
        </IconButton>
        <IconButton size={"small"} title={"Send Photo"}>
          <PhotoOutlinedIcon fontSize={"small"} />
        </IconButton>
        <IconButton size={"small"} title={"Send Photos"}>
          <CollectionsOutlinedIcon fontSize={"small"} />
        </IconButton>
        <IconButton size={"small"} title={"Send File"}>
          <InsertDriveFileOutlinedIcon fontSize={"small"} />
        </IconButton>
        <IconButton size={"small"} title={"Send Files"}>
          <ContentCopyOutlinedIcon fontSize={"small"} />
        </IconButton>
      </ButtonGroup>
    </Box>
  );
};

export default ControlPanel;
