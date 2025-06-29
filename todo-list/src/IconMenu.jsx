import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import CheckIcon from "@mui/icons-material/Check";
import { Divider } from "@mui/material";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    backgroundColor: "#2e343e",
    color: "#fff", // Light text
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
  },
  "& .MuiMenuItem-root": {
    "& .MuiSvgIcon-root": {
      fontSize: 18,
      color: "#fff", // Light text for icons
      marginRight: theme.spacing(1.5),
    },
    "&:active": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity
      ),
    },
    "&:hover": {
      backgroundColor: "#444", // Slightly lighter dark background on hover
    },
  },
}));

export default function CustomizedMenus({ folders = [], setFolder, value }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedItem, setSelectedItem] = React.useState(value || "All Tasks");

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setFolder(item)
    handleClose();
  };


  return (
    <div style={{ display: "flex", justifyContent: "center" }}> 
      <Button
        id="demo-customized-button"
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{width: '100%', height: '8vh', borderRadius: '5px', marginTop: '3vh', backgroundColor: '(54, 108, 173)'}}
      >
        {selectedItem}
      </Button>

      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        setFolder={setFolder}
      >
        <MenuItem onClick={() => handleSelect("All Tasks")} disableRipple>
          {selectedItem === "All Tasks" && <CheckIcon fontSize="small" />}
         
          All Tasks
        </MenuItem>

      

        <Divider />

        {/* ✅ Dynamically Add Folders */}
        {folders.length > 0 ? (
          folders.map((folder) => (
            <MenuItem 
              key={folder.id} 
              sx={{ height: '7vh', borderRadius: '10px' }} 
              onClick={() => handleSelect(folder.folderText)}
            >
              {selectedItem === folder.folderText && <CheckIcon fontSize="small" />}
              {folder.folderText}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>⚠️ No Folders Found</MenuItem> // ✅ Shows message if empty
        )}
      </StyledMenu>
    </div>
  );
}
