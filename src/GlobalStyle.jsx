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
    justify-self: right;
    grid-area: topView;
  }
  .bottomView {
    justify-self: center;
    align-self: end;
    grid-area: bottomView;
    max-width: 80%;
  }
  
  .btnExpand {
    text-align: center;
  }

  .wrapper {
    width: 100vw;
    height: 100vh;
    min-width: 850px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    //grid-template-columns: 1fr fit-content(20%)
    //1fr fit-content(20%)
    //1fr fit-content(20%);
    grid-template-areas:
      ". topView ."
      ". searchBar ."
      "bottomView bottomView bottomView";
  }
`

export default GlobalStyle
