import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
  Button
} from "@material-ui/core";
import { Stack } from '@mui/material';
import { Link } from "react-router-dom";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import InboxIcon from '@mui/icons-material/Inbox';
import { color, width } from "@mui/system";
import { ListItemButton } from "@mui/material";
import Divider from '@mui/material/Divider';
import SendIcon from '@mui/icons-material/Send';
import ListItemIcon from '@mui/material/ListItemIcon';

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    },
    paper: {
        background: 'white',
        width: '40%',
        color: 'white'
    }
}));

export default function DrawerComponent() {
const classes = useStyles();
const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <div>
        <Drawer
            variant={'temporary'}
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            anchor={"right"}
            classes={{ paper: classes.paper }}
        >
            
            <List>
                <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemButton>
                        {/* <ListItemIcon>
                            <SendIcon/>
                        </ListItemIcon> */}
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <Typography>Home</Typography>
                        </Link>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemButton>
                        <Link to='/about' style={{ textDecoration: 'none' }}>
                            <Typography>About</Typography>
                        </Link>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemButton> 
                        <Link to='/policy' style={{ textDecoration: 'none' }}>
                            <Typography>Policy</Typography>
                        </Link>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemButton> 
                        <Link to='/firstLesson' style={{ textDecoration: 'none' }}>
                            <Typography>Lesson1</Typography>
                        </Link>
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
        
        <IconButton color="inherit" onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuOpenIcon />
        </IconButton>
    </div>
  )
}
