import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AdministratorViewSidebarLinks from './AdministratorViewSidebarLinks';
// import AdministratorNavbar from './AdministratorNavbar';
import "./AdministratorViewSidebar.css"
import { useNavigate } from 'react-router-dom';
import AdminRoutes from '../../Routes/AdminRoutes';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    backgroundColor: "rgb(90, 47, 252)",
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        backgroundColor: "rgb(90, 47, 252)"
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
      
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AdministratorViewSidebar() {

  

  const navigate = useNavigate();






  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ height: "60px", 
      // backgroundColor:"rgb(241, 245, 248)" }}
      backgroundColor:"rgb(241, 245, 248)" }}
      
      >
  <Toolbar sx={{ justifyContent: 'space-between',width:"100%" }}>
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge="start"
      sx={{ mr: 2, ...(open && { display: 'none' }) }}
      style={{color:"#2662f0"}}
    >
      <MenuIcon />
    </IconButton>
    {/* <Typography variant="h6" noWrap component="div">
      Persistent drawer
    </Typography> */}
    {/* <AdministratorNavbar /> */}
  </Toolbar>
</AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:"rgb(90, 47, 252)"
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon style={{color:"white"}}/> : <ChevronRightIcon style={{color:"white"}}/>}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <AdministratorViewSidebarLinks
          open={open}
          handleDrawerClose={handleDrawerClose}
          // selectedItem={selectedItem}
          // handleItemClick={(itemName) => setSelectedItem(itemName)}
        />
        <Divider />
      </Drawer>
      <Main open={open} style={{backgroundColor:"rgb(241, 245, 248)", minHeight:"100vh"}}>
        <DrawerHeader />
        <Box component="main" className="padding-of-sidebar-middle-page" >
        <AdminRoutes 
        // selectedItem={selectedItem} 

        />
      </Box>
      </Main>
    </Box>
  );
}
