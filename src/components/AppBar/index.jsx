import Box from "@mui/material/Box";
import ModeSelect from "~/components/ModeSelect";
import AppIcons from "@mui/icons-material/Apps";
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import Workspace from "./Menu/Workspaces";
import Recent from "./Menu/Recent";
import Starred from "./Menu/Starred";
import Templates from "./Menu/Templates";
import Profiles from "./Menu/Profiles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { InputAdornment } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function AppBar() {
  const [searchValue, setSearchValue] = useState();

  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
      }}
    >
      <Box px={2} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppIcons sx={{ color: "white" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "white" }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Trello
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <Workspace />
          <Recent />
          <Starred />
          <Templates />
          <Button
            sx={{ color: "white", border: "none", "&:hover": "border-none" }}
            variant="outlined"
            startIcon={<LibraryAddIcon />}
          >
            Create
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type="text"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize="small"
                sx={{
                  color: searchValue ? "white" : "transparent",
                  cursor: "pointer",
                }}
                onClick={() => setSearchValue("")}
              />
            ),
          }}
          sx={{
            minWidth: 120,
            maxWidth: 170,
            "& label": { color: "white" },
            "& input": { color: "white" },
            "& label.Mui-focused": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
            },
          }}
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="warning" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "white" }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ color: "white" }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;
