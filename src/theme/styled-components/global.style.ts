import { createGlobalStyle } from "styled-components";

import { dark_colors } from "../base/dark-color";
import { ThemeStyledType } from "./theme";
// import { IMG_CONFIG } from 'src/assets/config/imgConfig';

type Props = {
    theme: ThemeStyledType;
};

export const GlobalStyle = createGlobalStyle<Props>`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    transition: all .2s linear;
  }
  *:focus {
  outline: 0;
  outline: none;
  }
  html {
    font-size: 62.5%;
    background-color: ${({ theme }) => theme.colors.background.default} !important;
    box-sizing: border-box;

    /* color */

  }
  body {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
    text-decoration: none;
    background-color: ${dark_colors.background.default} !important;
    color: ${({ theme }) => theme.colors.text.main} !important;
    transition: all .2s linear;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    a:-webkit-any-link {
    /* color: black; */
    cursor: pointer;
    text-decoration: none;
    }

    h1, h2,h3 ,h4 ,h5 {
      font-family:${({ theme }) => theme.fonts.title} ;
    }

    a ,p, input {
      color: white;
      font-family:${({ theme }) => theme.fonts.main} ;
    }

    /* button */
    button {
    background-color: transparent;
    width: fit-content;
    cursor: pointer;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    border: 0;
    :hover{
      transform: translateY(-3px);
    }
  }
    /* fill input */
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    }
    input:-webkit-autofill{
    -webkit-text-fill-color: white !important;
    }
    input::placeholder {
      color: white;
      opacity: 0.5;
    }

    input {
      background-color: transparent;
      border: none;
      color: white;
      font-size: 1.6rem;
      font-weight: 600;
      width: 100%;
      overflow-x: hidden;
    }

    /* scroll */

    .hidden_scroll {
      ::-webkit-scrollbar {
      display: none;
      overflow-y: auto;
      }
    }

    .custom_scroll {
      ::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
      background-color: rgba(255, 255, 255, 0.21);
      overflow-y: auto;
      padding: 0.2rem;
      border-radius: 0.5rem;
      }
      ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.6);
        border-radius: 0.2rem;
        width: 0.2rem;
        transform: translateX(3px) scale(1.5);
        cursor: pointer;
      }
    }

    /* container */

    .app_container{
      width: 140rem;
      margin: auto;
      max-width: 95%;

      @media ${({ theme }) => theme.breakpoint.xl} {
        width: 100rem;
    }

      @media ${(props) => props.theme.breakpoint.lg} {
        width: 80rem;
    }
      @media ${(props) => props.theme.breakpoint.md} {
        width: 50rem;
    }
      @media ${(props) => props.theme.breakpoint.sm} {
        width: 95%;
    }
    }

    /* text */

    .text_medium {
      font-size: 2rem;
      font-weight: 600;

        @media ${({ theme }) => theme.breakpoint.md} {
            font-size: 1.5rem;
        }

        @media ${(props) => props.theme.breakpoint.sm} {
            font-size: 1.1rem;
        }
    }

    .text_big {
      font-size: 2.5rem;
      font-weight: 600;

      @media ${({ theme }) => theme.breakpoint.lg} {
            font-size: 2rem;
        }

        @media ${({ theme }) => theme.breakpoint.md} {
            font-size: 1.5rem;
        }

        @media ${(props) => props.theme.breakpoint.sm} {
            font-size: 1.1rem;
        }
    }

    .body_big {
      font-size: 3rem;
      font-weight: 600;

      @media ${({ theme }) => theme.breakpoint.lg} {
            font-size: 2.5rem;
        }

        @media ${({ theme }) => theme.breakpoint.md} {
            font-size: 2.2rem;
        }

        @media ${(props) => props.theme.breakpoint.sm} {
            font-size: 2rem;
        }
    }

    .text_align_center {
      text-align: center;
    }
}
`;
