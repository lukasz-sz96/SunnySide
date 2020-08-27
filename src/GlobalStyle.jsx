import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Varela Round', sans-serif;
    background-color: rgb(182, 220, 255);
    overflow: hidden;
  }

  .searchBar {
    align-self: center;
    justify-self: center;
    grid-area: searchBar;
  }
  .topView {
    align-self: center;
    justify-self: center;
    grid-area: topView;
  }
  .bottomView {
    justify-self: center;
    align-self: end;
    grid-area: bottomView;
  }

  .wrapper {
    width: 100%;
    height: 100vh;
    display: grid;
    /* grid-template-columns: 50px 50px 50px 50px; */
    grid-template-rows: 33.33% 33.33% 33.33%;
    grid-template-areas:
      "topView topView topView topView topView"
      ". searchBar searchBar searchBar ."
      "bottomView bottomView bottomView bottomView bottomView";
  }
`

export default GlobalStyle
