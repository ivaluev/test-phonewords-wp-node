import React, { useState } from "react"
import { default as AppBarBase, AppBarProps } from "@material-ui/core/AppBar"
import MenuIcon from "@material-ui/icons/Menu"
import {
  Typography,
  IconButton,
  Toolbar,
  Drawer,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import List, { ListProps } from "@material-ui/core/List"
import { default as HomeIcon } from "@material-ui/icons/Home"
import styled from "src/client/theme/index"
import { Margin } from "./Margin"
import { useHistory } from "react-router"
import T from "./Translate";

const StyledAppBar = styled<AppBarProps>(AppBarBase)`
  && {
    margin-bottom: 20px;
    background-color: ${props => props.theme.colors.blue};
  }
`

const StyledList = styled<ListProps>(List)`
  width: 300px;
`

export default function AppBar() {
  const [open, setOpen] = useState(false)
  const history = useHistory()

  function handleDrawerToggle() {
    setOpen(!open)
  }

  function handleListItemClick(url: string) {
    setOpen(false)
    history.push(url)
  }

  return (
    <>
      <Drawer open={open} onClose={handleDrawerToggle}>
        <StyledList>
          <Margin margin="0 0 10px">
            <ListItem>
              <Margin margin="-4px 0 4px">
                <Typography variant="h6" color="inherit">
                  <T>Phonewords</T>
                </Typography>
              </Margin>
            </ListItem>
            <Divider />
          </Margin>
          <ListItem
            button
            onClick={() => handleListItemClick("/")}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Homepage"} />
          </ListItem>
        </StyledList>
      </Drawer>
      <StyledAppBar position="static" onClick={handleDrawerToggle}>
        <Toolbar>
          <IconButton color="inherit" aria-label={"Menu"}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            <T>App</T>
          </Typography>
        </Toolbar>
      </StyledAppBar>
    </>
  )
}
