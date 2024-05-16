
import { styled, alpha } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreIcon from "@mui/icons-material/MoreVert";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../redux/features/filterSlice";
import { memo, useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header=()=> {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [searchQuery,setSearchQuery]=useState("")
  const dispatch = useDispatch();
  

  const handleSearch = (e) => {
    const query=e.target.value
    dispatch(search(query));
    setSearchQuery(query)
  };

  const { cartItems } = useSelector((state) => state.cart);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to={"/"}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Shopping Cart
            </Typography>
          </Link>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={handleSearch}
              value={searchQuery}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to={"/cart"}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={cartItems.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <MobileMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
      />
    </Box>
  );
}

export default memo(Header)