import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  useMediaQuery,
  createTheme,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import { Consumer } from "../Context/Context";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const theme = createTheme({
    breakpoints: {
      values: {
        "2xs": 0,
        xs: 425,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogo = () => {
    navigate("/");
  };

  const scrollToSection = async (sectionId) => {
    const targetId = sectionId.replace("#", "");

    if (location.pathname !== "/") {
      await navigate("/");

      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleNavigation = async (navlink) => {
    if (navlink.type === "section") {
      await scrollToSection(navlink.path);
    } else {
      navigate(navlink.path);
    }
    if (isMobile) handleDrawerToggle();
  };

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawer = (
    <Consumer>
      {(value) => {
        const { navlinks } = value;
        return (
          <List>
            {navlinks.map((navlink) => (
              <ListItem key={navlink.id} disablePadding>
                <ListItemButton onClick={() => handleNavigation(navlink)}>
                  <ListItemText primary={navlink.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        );
      }}
    </Consumer>
  );

  return (
    <Consumer>
      {(value) => {
        const { navlinks } = value;

        return (
          <Container
            maxWidth="lg"
            className="md:flex md:justify-center relative z-30 md:z-999 mt-9"
            sx={{ flexGrow: 1 }}
          >
            <AppBar position="static" color="transparent" elevation={0}>
              <Toolbar className="flex justify-center items-center scroll-smooth transition-all duration-300 ease-in-out">
                <Box
                  sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
                >
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <img
                      src={logoImg}
                      alt="Webortex"
                      onClick={() => handleLogo()}
                      className="w-[40%] h-auto"
                    />
                  </Link>
                </Box>

                {!isMobile ? (
                  <div className="flex items-center text-textColor">
                    {navlinks.map((navlink) => (
                      <Button
                        key={navlink.id}
                        onClick={() => handleNavigation(navlink)}
                        className="capitalize text-white font-normal font-ubuntu text-[16px] leading-[26px] hover:text-navlinkHoverColor transition-all duration-300 ease-in-out mx-2 "
                      >
                        {navlink.text}
                      </Button>
                    ))}
                    <Button
                      variant="contained"
                      className="text-buttonTextColor bg-buttonBgColor font-ubuntu font-medium text-[16px] leading-[22px] capitalize md:py-3 md:px-6 rounded-lg md:ml-7 text-nowrap"
                      onClick={handleLogin}
                    >
                      Login
                    </Button>
                  </div>
                ) : (
                  <IconButton
                    sx={{
                      color: "#ffffff",
                    }}
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
              </Toolbar>
            </AppBar>

            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              className="text-textColor"
              sx={{
                "& .css-rizt0-MuiTypography-root": {
                  fontFamily: "Outfit Variable",
                  fontSize: "14px",
                  lineHeight: "26px",
                  textTransform: "capitalize",
                  fontWeight: "medium",
                },
                "& .MuiDrawer-paper": {
                  color: "#efefef",
                  paddingTop: "50px",
                  paddingLeft: "20px",
                  boxSizing: "border-box",
                  width: 250,
                  backgroundColor: "#121212",
                },
              }}
            >
              {drawer}
              <Button
                variant="contained"
                sx={{
                  color: "#060606",
                  backgroundColor: "#62ba47",
                  width: "80%",
                  marginX: "auto",
                  paddingY: "10px",
                  paddingX: "16px",
                  borderRadius: "8px",
                  marginTop: "15px",
                  fontWeight: "medium",
                  fontFamily: "Outfit Variable",
                  fontSize: "14px",
                  lineHeight: "24px",
                  textTransform: "capitalize",
                }}
                onClick={handleLogin}
              >
                Let's Talk
              </Button>
            </Drawer>
          </Container>
        );
      }}
    </Consumer>
  );
};

export default Navbar;
