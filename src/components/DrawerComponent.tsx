import React, { useState } from "react";
import './drawer.css';
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
import CottageIcon from '@mui/icons-material/Cottage';
import InfoIcon from '@mui/icons-material/Info';
import PolicyIcon from '@mui/icons-material/Policy';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import NightShelterIcon from '@mui/icons-material/NightShelter';

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
        background: '#171229',
        width: '40%',
        color: 'white'
    },
    button: {
        background: 'white',
        color: 'black'
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
            
            <List disablePadding={false}>
                
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemButton className="button-sidebar">
                            <ListItemIcon>
                                <CottageIcon />
                            </ListItemIcon>
                            Home
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Divider/>
                <Link to='/about' style={{ textDecoration: 'none' }}>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemButton className="button-sidebar">
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            About
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Divider />
                <Link to='/policy' style={{ textDecoration: 'none' }}>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemButton className="button-sidebar">
                            <ListItemIcon>
                                <PolicyIcon />
                            </ListItemIcon> 
                            Policy
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Divider />
                <Link to='/contact' style={{ textDecoration: 'none' }}>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemButton className="button-sidebar"> 
                            <ListItemIcon>
                                <ContactPageIcon/>
                            </ListItemIcon>
                            Contact
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Divider />
                <Link to='/firstLesson' style={{ textDecoration: 'none' }}>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemButton className="button-sidebar"> 
                            <ListItemIcon>
                                <NightShelterIcon/>
                            </ListItemIcon>
                            Lesson1
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </Drawer>
        
        <IconButton color="inherit" onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuOpenIcon />
        </IconButton>
    </div>
  )
}
