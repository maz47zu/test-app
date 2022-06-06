import React, { useState } from "react";
import './drawer.css';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  ThemeProvider
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { ListItemButton, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import CottageIcon from '@mui/icons-material/Cottage';
import InfoIcon from '@mui/icons-material/Info';
import PolicyIcon from '@mui/icons-material/Policy';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import NightShelterIcon from '@mui/icons-material/NightShelter';

const useStyles = makeStyles(()=>({
    root: {
        "&$selected": {
          backgroundColor: "red",
          color: "white",
          "& .MuiListItemIcon-root": {
            color: "white"
          }
        },
        "&$selected:hover": {
          backgroundColor: "purple",
          color: "white",
          "& .MuiListItemIcon-root": {
            color: "white"
          }
        },
        "&:hover": {
          backgroundColor: "blue",
          color: "white",
          "& .MuiListItemIcon-root": {
            color: "white"
          }
        }
      },
      selected: {},
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
        background: '#8642d4',
        color: 'white'
        
    },
    text: {
        color: 'white',
        background: '#8642d4',
        'fontFamily': 'Roboto'
    }
}));



export default function DrawerComponent() {
const classes = useStyles();
const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <div >
        <Drawer
            variant={'temporary'}
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            anchor={"right"}
            classes={{ paper: classes.paper }}
        >
            
            <List disablePadding={false} >
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <ListItem onClick={() => setOpenDrawer(false)} 
                    button
                    className="button-sidebar" 
                    >
                                <ListItemIcon>
                                    <CottageIcon />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                                
                    </ListItem>
                </Link>
                <Divider className='divider-sidebar'/>
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
                <Divider className='divider-sidebar'/>
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
                <Divider className='divider-sidebar'/>
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
                <Divider className='divider-sidebar'/>
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
                <Divider className='divider-sidebar'/>
                <Link to='/api' style={{ textDecoration: 'none' }}>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemButton className="button-sidebar"> 
                            <ListItemIcon>
                                <NightShelterIcon/>
                            </ListItemIcon>
                            APITest
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
