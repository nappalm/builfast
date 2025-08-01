import { Global, css } from "@emotion/react";
export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

        #root,
        html,
        body,
        main {
          min-height: 100%;
          height: 100%;
        }
      `}
    />
  );
}
