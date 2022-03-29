/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Layout from "../Layout";

const NotFound = () => {
  return (
    <Layout pageTitle="Uh, Oh!">
      <div
        css={css`
          text-align: center;
        `}
      >
        <h3
          css={css`
            margin-bottom: 0;
          `}
        >
          The page you try to visit is not found or already been deleted!
        </h3>
        <Button variant="contained" component={Link} to="/">
          Looking for a Pokemon?
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
