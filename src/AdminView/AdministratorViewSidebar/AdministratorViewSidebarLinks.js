import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { Link, useLocation } from "react-router-dom";
import DashboardLogo from "../../Assets/SidebarIcons/akar-icons_dashboard.svg";
import AppointmentsLogo from "../../Assets/SidebarIcons/akar-icons_schedule.svg";
import AdminLogo from "../../Assets/SidebarIcons/eos-icons_admin-outlined.svg";
import PatientLogo from "../../Assets/SidebarIcons/tdesign_user.svg";
import DoctorLogo from "../../Assets/SidebarIcons/maki_doctor.svg";
import MessagesLogo from "../../Assets/SidebarIcons/typcn_messages.svg";
import BillingLogo from "../../Assets/SidebarIcons/fluent_feed-16-regular.svg";
import ReportsLogo from "../../Assets/SidebarIcons/carbon_report.svg";
import FlowLogo from "../../Assets/SidebarIcons/fluent_flow-16-filled.svg";
import MiscellaneousLogo from "../../Assets/SidebarIcons/tabler_dots.svg";
import "./AdministratorViewSidebar.css";

const AdministratorViewSidebarLinks = ({ open, handleDrawerClose }) => {
  const [adminOpen, setAdminOpen] = React.useState(false);

  const handleAdminClick = () => {
    setAdminOpen(!adminOpen);
  };

  const location = useLocation();
  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  const handleLinkClick = () => {
    handleDrawerClose();
  };

  const LoginUserType =localStorage.getItem("LoginUserType")

  return (
    <div>
      <List style={{ paddingTop: "30px" }}>
        <Link to="/admin" style={{ textDecoration: "none", color: "black" }}>
          <ListItem disablePadding sx={{ display: "block",
          //  backgroundColor: isActive('/admin') ? 'white' : ''
          }}>
            <ListItemButton
            onClick={handleLinkClick}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <img src={DashboardLogo} alt="" className="" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <p className="sidebar-menu-text-p-tag">Dashboard</p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>



        <Link to="/admin/provider-appointments" style={{ textDecoration: "none", color: "black" }}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={handleLinkClick}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <img src={AppointmentsLogo} alt="" className="" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <p className="sidebar-menu-text-p-tag">Orders</p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link
          to="/admin/patientlist"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem disablePadding sx={{ display: "block",
          // backgroundColor: isActive('/admin/patientlist') ? 'white' : '' 
          }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={handleLinkClick}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <img src={PatientLogo} alt="" className="" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <p className="sidebar-menu-text-p-tag">Customers</p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>





        <Link to="/admin/page-under-construction/" style={{ textDecoration: "none", color: "black" }}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={handleLinkClick}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <img src={MessagesLogo} alt="" className="" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <p className="sidebar-menu-text-p-tag">Enquiry</p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link
          to="/admin/successfull-payments/"
          style={{ textDecoration: "none", color: "black" }}
          
        >
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={handleLinkClick}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <img src={BillingLogo} alt="" className="" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <p className="sidebar-menu-text-p-tag">Billings</p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/admin/page-under-construction/" style={{ textDecoration: "none", color: "black" }}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={handleLinkClick}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <img src={ReportsLogo} alt="" className="" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <p className="sidebar-menu-text-p-tag">Reports</p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/admin/admin-aversa-all-products/" style={{ textDecoration: "none", color: "black" }}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={handleLinkClick}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <img src={FlowLogo} alt="" className="" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <p className="sidebar-menu-text-p-tag">Products</p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/admin/admin-aversa-all-ingredients/" style={{ textDecoration: "none", color: "black" }}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={handleLinkClick}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <img src={MiscellaneousLogo} alt="" className="" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <p className="sidebar-menu-text-p-tag">Ingredients</p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default AdministratorViewSidebarLinks;
