/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { MdExplore } from 'react-icons/md';
import { SiPocket } from 'react-icons/si';
import { useHistory } from "react-router-dom";

const Layout = ({children}) => {
    let history = useHistory();

  return (
    <div css={css`
        position: relative;
    `}>
        {children}
        <div css={css`
            position: fixed;
            bottom: 0;
            width: 100%;
            padding: 12px;
            display: flex;
            flex-flow: row nowrap;
            box-sizing: border-box;
            background-color: #ffff;
            box-shadow: 0px -8px 27px -11px rgba(133,133,133,1);
            text-align: center;
        `}>
            <button type="button" css={css`
                flex-grow: 1;
                background-color: #ffff;
                border: none;
            `} onClick={() => history.push('/')}>
                <MdExplore css={css`
                    font-size: 40px
                `}/>
                <span css={css`
                    font-weight: bold;
                    display: block;
                `}>Pokemon List</span>
            </button>
            <button type="button" css={css`
                flex-grow: 1;
                background-color: #ffff;
                border: none;
            `} onClick={() => history.push('/my-pokemon')}>
                <SiPocket css={css`
                    font-size: 40px
                `}/>
                <span css={css`
                    font-weight: bold;
                    display: block;
                `}>My Pokemon</span>
            </button>
        </div>
    </div>
  );
};

export default Layout;
