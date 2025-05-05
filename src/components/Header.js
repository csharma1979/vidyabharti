import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Container, 
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  styled,
  Menu, 
  MenuItem 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)({
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
});

const LogoContainer = styled(Box)({
  '& img': {
    height: '100px',
    width: 'auto',
    padding: '8px 0'
  }
});

const NavButton = styled(Button)({
  color: '#333',
  margin: '0 8px',
  '&:hover': {
    color: '#FF5733', // This would be your logo color
    backgroundColor: 'transparent'
  }
});

const DonateButton = styled(Button)({
  backgroundColor: '#dc004e',
  color: '#fff',
  margin: '0 8px',
  padding: '8px 24px',
  '&:hover': {
    backgroundColor: '#9a0036'
  }
});

const LoginButton = styled(Button)({
  color: '#333',
  margin: '0 8px',
  border: '1px solid #333',
  '&:hover': {
    color: '#FF5733',
    borderColor: '#FF5733',
    backgroundColor: 'transparent'
  }
});

const NavButtonWithDropdown = styled(Button)({
  color: '#333',
  margin: '0 8px',
  '&:hover': {
    color: '#FF5733',
    backgroundColor: 'transparent'
  }
});

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsAnchor, setProgramsAnchor] = useState(null);
  const [sponsorAnchor, setSponsorAnchor] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProgramsClick = (event) => {
    setProgramsAnchor(event.currentTarget);
  };

  const handleProgramsClose = () => {
    setProgramsAnchor(null);
  };

  const handleSponsorClick = (event) => {
    setSponsorAnchor(event.currentTarget);
  };

  const handleSponsorClose = () => {
    setSponsorAnchor(null);
  };

  // Update menuItems array with correct paths
  const menuItems = [
    { text: 'Home', path: '/' },
    {
      text: 'Programs',
      path: '/programs',
      hasSubmenu: true,
      submenuItems: [
        { text: 'Shiksha Daan', path: '/programs/shiksha-daan' },
        { text: 'Sanskriti Bodh Pariyojana', path: '/programs/sanskriti-bodh' },
        { text: 'Adopt A School', path: '/programs/adopt-school' }
      ]
    },
    { text: 'Events', path: '/events' },
    { text: 'Alumni', path: '/alumni' },
    {
      text: 'Sponsor',
      path: '/sponsor',
      hasSubmenu: true,
      submenuItems: [
        { text: "Support a Child's Education", path: '/support-child' }, // Updated path
        { text: 'Support Vidya Bharati', path: '/support-vb' },
        { text: 'Sponsor Construction of a Classroom', path: '/classroom' },
        { text: 'Sponsor For Establishing a Library', path: '/library' },
        { text: 'Sponsor Construction of a Toilet Block', path: '/toilet-block' }
      ]
    }
  ];

  return (
    <StyledHeader position="fixed">
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <LogoContainer>
            <Link to="/">
              <img src="/assets/logo.webp" alt="Vidya Bharati USA Logo" />
            </Link>
          </LogoContainer>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: '#333' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {menuItems.map((item) => (
                item.hasSubmenu ? (
                  <React.Fragment key={item.text}>
                    <NavButtonWithDropdown
                      onClick={item.text === 'Programs' ? handleProgramsClick : handleSponsorClick}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      {item.text}
                    </NavButtonWithDropdown>
                    <Menu
                      anchorEl={item.text === 'Programs' ? programsAnchor : sponsorAnchor}
                      open={Boolean(item.text === 'Programs' ? programsAnchor : sponsorAnchor)}
                      onClose={item.text === 'Programs' ? handleProgramsClose : handleSponsorClose}
                    >
                      {item.submenuItems.map((subItem) => (
                        <MenuItem
                          key={subItem.text}
                          component={Link}
                          to={subItem.path}
                          onClick={item.text === 'Programs' ? handleProgramsClose : handleSponsorClose}
                          sx={{
                            minWidth: '300px',
                            '&:hover': {
                              color: '#FF5733'
                            }
                          }}
                        >
                          {subItem.text}
                        </MenuItem>
                      ))}
                    </Menu>
                  </React.Fragment>
                ) : (
                  <NavButton
                    key={item.text}
                    component={Link}
                    to={item.path}
                  >
                    {item.text}
                  </NavButton>
                )
              ))}
              <LoginButton
                variant="outlined"
                href="https://www.vidyabharatialumni.org/alumni/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alumni Login
              </LoginButton>
              <DonateButton
                variant="contained"
                component={Link}
                to="/donate"
              >
                Donate
              </DonateButton>
            </Box>
          )}
        </Toolbar>
      </Container>

      {/* Update the mobile drawer to include submenu items */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': { width: 240 }
        }}
      >
        <List>
          {menuItems.map((item) => (
            item.hasSubmenu ? (
              <React.Fragment key={item.text}>
                <ListItem>
                  <ListItemText 
                    primary={item.text} 
                    sx={{ 
                      color: '#666',
                      fontWeight: 'bold' 
                    }} 
                  />
                </ListItem>
                {item.submenuItems.map((subItem) => (
                  <ListItem
                    button
                    key={subItem.text}
                    component={Link}
                    to={subItem.path}
                    onClick={handleDrawerToggle}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary={subItem.text} />
                  </ListItem>
                ))}
              </React.Fragment>
            ) : (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            )
          ))}
          <ListItem 
            button 
            component="a"
            href="https://www.vidyabharatialumni.org/alumni/register"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDrawerToggle}
            sx={{ 
              borderBottom: '1px solid #eee'
            }}
          >
            <ListItemText primary="Alumni Login" />
          </ListItem>
          <ListItem 
            button 
            component={Link}
            to="/donate"
            onClick={handleDrawerToggle}
            sx={{ 
              backgroundColor: '#dc004e',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#9a0036'
              }
            }}
          >
            <ListItemText primary="Donate" />
          </ListItem>
        </List>
      </Drawer>
    </StyledHeader>
  );
};

export default Header;