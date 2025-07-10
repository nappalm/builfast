import { Global, css } from "@emotion/react";
import _colors from "./_colors";
export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap");

        #root,
        html,
        body,
        main {
          min-height: 100%;
          height: 100%;
        }

        // ocultar icono de calendario en input date
        input[type="datetime-local"]::-webkit-calendar-picker-indicator,
        input[type="date"]::-webkit-calendar-picker-indicator {
          background: transparent;
          bottom: 0;
          color: transparent;
          cursor: pointer;
          height: auto;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          width: auto;
        }

        .grain:before {
          content: "";
          background-color: transparent;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 182px;
          opacity: 0.12;
          top: 0;
          left: 0;
          position: absolute;
          width: 100%;
          height: 100%;
        }

        // *:focus-visible {
        //   box-shadow: none !important;
        //   border-color: transparent !important;
        // }

        * {
          ::-moz-selection {
            color: #2b2b2c;
            background: #fff;
          }
          ::selection {
            color: #2b2b2c;
            background: #fff;
          }
          ::-webkit-scrollbar {
            width: 5px;
            height: 5px;
          }
        }

        input {
          caret: #fff block;
        }

        .dotted {
          background-image: radial-gradient(
            rgb(41 48 64 / 1) 1px,
            transparent 0
          );
          background-size: 25px 25px;
        }
        .dottedA {
          background-image: radial-gradient(#41414380 1px, transparent 0);
          background-size: 18px 18px;
        }

        .full-page {
          height: calc(100vh - 36px);
        }
      `}
    />
  );
}
