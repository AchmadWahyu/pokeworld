/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  IconButton,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { MdExplore, MdArrowBack } from "react-icons/md";
import { SiPocket } from "react-icons/si";
import { NavLink, useHistory, useLocation } from "react-router-dom";

const Layout = ({ children, pageTitle }) => {
  const history = useHistory();

  const { pathname } = useLocation();
  const [value, setValue] = useState(pathname);

  return (
    <Container maxWidth="sm">
      <div
        css={css`
          padding: 12px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-flow: row nowrap;
            padding: 4px;
            background-color: #ffff;
            position: sticky;
            top: 0;
            align-items: center;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
          `}
        >
          {pathname !== "/" ? (
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => history.goBack()}
            >
              <MdArrowBack
                css={css`
                  font-size: 36px;
                `}
              />
            </IconButton>
          ) : null}
          <div
            css={css`
              font-weight: bold;
              font-size: 32px;
              text-transform: capitalize;
            `}
          >
            {pageTitle}
          </div>
        </div>
        {children}
      </div>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Explore Pokemon"
            icon={
              <MdExplore
                css={css`
                  font-size: 40px;
                `}
              />
            }
            value="/"
            component={NavLink}
            to="/"
          />
          <BottomNavigationAction
            label="My Pokemon"
            icon={
              <SiPocket
                css={css`
                  font-size: 40px;
                `}
              />
            }
            value="/my-pokemon"
            component={NavLink}
            to="/my-pokemon"
          />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Layout;
