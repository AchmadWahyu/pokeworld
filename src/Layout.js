/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { MdExplore } from 'react-icons/md';
import { SiPocket } from 'react-icons/si';

const Layout = ({children}) => {
  return (
    <div css={css`
        position: relative;
    `}>
        {children}
    </div>
  );
};

export default Layout;
