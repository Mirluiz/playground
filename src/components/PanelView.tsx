import React, { FC, memo } from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Link,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { User, UserObject, Users } from "./types";
import { users } from "./helpers/Dummies";
import { useController, useModel } from "./hooks/context";
import { createImageMessage, randomBetween } from "./helpers/helper";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import ShuffleOutlinedIcon from "@mui/icons-material/ShuffleOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import HighlightOutlinedIcon from "@mui/icons-material/HighlightOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

const Panel = () => {
  const { mode, themeMode } = useModel();

  const {
    prePend,
    updateThemeMode,
    updateMode,
    reply,
    scrollTo,
    clearChat,
    generateFake,
    highlight,
  } = useController();

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
        Control Panel
      </Typography>
      <Section section={"Modes"}>
        <FormGroup>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Dark</Typography>
            <Switch
              color="default"
              checked={themeMode === "light"}
              onClick={() => {
                updateThemeMode();
              }}
            />
            <Typography>Light</Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Web</Typography>
            <Switch
              color="default"
              checked={mode === "mobile"}
              onClick={() => {
                updateMode(mode === "mobile" ? "web" : "mobile");
              }}
            />
            <Typography>Mobile</Typography>
          </Stack>
        </FormGroup>
      </Section>

      <Section section={"Start Messaging"}>
        <Grid
          container
          sx={{
            marginTop: 1,
          }}
        >
          {Object.keys(users).map((user) => {
            return (
              <Grid item md={6}>
                <UserController user={users[user as keyof Users]} />
              </Grid>
            );
          })}
        </Grid>
      </Section>
      <Section section={"UI"}>
        <UI />
      </Section>
      <Section section={"Content Actions"}>
        <Stack direction={"row"} spacing={1}>
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            size={"small"}
          >
            <Button
              startIcon={<DeleteIcon />}
              color="error"
              onClick={() => {
                clearChat();
              }}
            >
              Clear
            </Button>
          </ButtonGroup>
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            size={"small"}
          >
            <Button
              startIcon={<ShuffleOutlinedIcon />}
              color="primary"
              onClick={() => {
                generateFake(15);
              }}
            >
              15
            </Button>
            <Button
              startIcon={<ShuffleOutlinedIcon />}
              color="primary"
              onClick={() => {
                generateFake(150);
              }}
            >
              150
            </Button>
            <Button
              startIcon={<ShuffleOutlinedIcon />}
              color="primary"
              onClick={() => {
                generateFake(1500);
              }}
            >
              1500
            </Button>
          </ButtonGroup>
          <Button
            onClick={() => {
              prePend();
            }}
          >
            Prepend
          </Button>
        </Stack>
      </Section>
      <Section section={"Interactions"}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            startIcon={<ManageSearchOutlinedIcon />}
            onClick={() => {
              let index = prompt("Pick index");
              if (index) scrollTo(+index);
            }}
          >
            Scroll to
          </Button>
          <Button
            startIcon={<HighlightOutlinedIcon />}
            color="primary"
            onClick={() => {
              let index = prompt("Pick index");
              if (index) highlight(+index);
            }}
          >
            Highlight
          </Button>
          <Button
            startIcon={<ReplyOutlinedIcon />}
            color="primary"
            onClick={() => {
              let index = prompt("Pick index");
              if (index) reply(+index);
            }}
          >
            Reply
          </Button>
        </ButtonGroup>
      </Section>
      <Box>
        <Link
          sx={{
            display: "flex",
            marginTop: 1,
          }}
          underline={"none"}
          href={"https://github.com/Mirluiz/playground"}
        >
          <Typography
            sx={{
              marginRight: 1,
            }}
          >
            Playground source code
          </Typography>
          <GitHubIcon />
        </Link>{" "}
      </Box>
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
        py: 1,
      }}
    >
      <Typography
        sx={{
          marginLeft: 1,
        }}
      >
        {section}
      </Typography>
      <Box
        sx={{
          marginLeft: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

const UserController: FC<{
  user: UserObject;
}> = ({ user }) => {
  const { id, name, avatar, generateMessage } = user;
  const { addNewMessage } = useController();

  return (
    <Box
      sx={{
        marginBottom: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <Chip
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
        <IconButton
          size={"small"}
          title={"Send Photo"}
          onClick={() => {
            createImageMessage(
              { caption: "text", amount: 1 },
              user,
              addNewMessage
            );
            // addNewMessage(generateMessage("image"));
          }}
        >
          <PhotoOutlinedIcon fontSize={"small"} />
        </IconButton>
        <IconButton
          size={"small"}
          title={"Send Photos"}
          onClick={() => {
            createImageMessage(
              { caption: "text", amount: randomBetween(10, 2) },
              user,
              addNewMessage
            );
          }}
        >
          <CollectionsOutlinedIcon fontSize={"small"} />
        </IconButton>
        <IconButton
          size={"small"}
          title={"Send File"}
          onClick={() => {
            addNewMessage(generateMessage("file"));
          }}
        >
          <InsertDriveFileOutlinedIcon fontSize={"small"} />
        </IconButton>
        <IconButton
          size={"small"}
          title={"Send Files"}
          onClick={() => {
            addNewMessage(generateMessage("files"));
          }}
        >
          <ContentCopyOutlinedIcon fontSize={"small"} />
        </IconButton>
      </ButtonGroup>
    </Box>
  );
};

const UI = () => {
  const { avatar, title, days, loading, typing } = useModel();
  const { updateAvatar, updateTitle, updateDays, updateLoading, updateTyping } =
    useController();

  return (
    <Box sx={{ display: "flex" }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={avatar}
              onClick={(e) => {
                updateAvatar();
              }}
            />
          }
          label="Avatar"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={title}
              onClick={(e) => {
                updateTitle();
              }}
            />
          }
          label="Title"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={typing}
              onClick={(e) => {
                updateTyping();
              }}
            />
          }
          label="Typing"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={loading}
              onClick={(e) => {
                updateLoading();
              }}
            />
          }
          label="Loading"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={days}
              onClick={(e) => {
                updateDays();
              }}
            />
          }
          label="Days"
        />
      </FormGroup>
    </Box>
  );
};

export default memo(Panel);
