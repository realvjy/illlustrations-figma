// home.tsx
// 15-May-2022
import * as React from "react";
import theme from "../theme";
import styled from "styled-components";

import Fuse from "fuse.js";
import { SearchIcon } from "../components/icons";
import ImgGrid from "../components/img-grid";

declare function require(path: string): any;

const Home = (props) => {
  // const iconData = props;
  const { name } = props;

  const [query, setQuery] = React.useState("");
  const [color, setColor] = React.useState("color");
  const [angle, setAngle] = React.useState("dynamic");
  const canvasRef = React.useRef(null);
  const imgRef = React.useRef(null);

  const results = [0, 2, 2, 3, 4];

  //   // Setup Fuse search
  //   const fuse = new Fuse(icons, {
  //     threshold: 0.2,
  //     keys: ["name", "keywords"],
  //   });

  //   // Check result from input text and return query
  //   React.useEffect(() => {
  //     if (query.trim()) {
  //       const searchData = fuse.search(query.trim());
  //       setResults(searchData.map((result) => result.item)); //return only matched icons
  //     } else {
  //       setResults(Object.values(icons)); //return all icons
  //     }
  //   }, [query]);

  return (
    <>
      <SearchBox>
        <SearchIcon
          height="32px"
          width="32px"
          color={"var(--figma-color-text-secondary)"}
          className="searchicon"
        />
        <input
          value={query}
          type="text"
          autoFocus={true}
          className="inputSearch"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search illlustrations..."
          key={name}
        />
      </SearchBox>

      <Grid>
        {results.map((icon, i) => {
          return (
            <ImgGrid
              name={"icon.name"}
              keyword={"icon.keywords"}
              key={"icon.name"}
              color={color}
              angle={angle}
              imgRef={imgRef}
              canRef={canvasRef}
            />
          );
        })}
      </Grid>
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <img ref={imgRef} style={{ display: "none" }} />

      <FooterWrapper>
        <FooterCredit>
          <div className="left-icon">
            <a href="https://3dicons.co" target="_blank">
              <img
                src="https://3dicons.co/3dicons.png"
                height="12px"
                alt={name}
              />
            </a>
            <span>v1.0</span>
          </div>
          <div className="right-link">
            by{" "}
            <a href="https://twitter.com/realvjy" target="_blank">
              @realvjy
            </a>
          </div>
        </FooterCredit>
      </FooterWrapper>
    </>
  );
};

export default Home;

const SearchBox = styled.div`
  position: sticky;
  top: 0;
  border-bottom: 1px solid var(--figma-color-border);
  input {
    width: 100%;
    height: 40px;
    padding: 0 ${theme.space[4]} 0 36px;
    font-family: inherit;
    background-color: var(--figma-color-bg);
    color: var(--figma-color-text);
    border: 0;
    outline: 0;
    :focus {
      box-shadow: none;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 6px;
  padding: 8px;
  margin-bottom: 40px;
`;

const FilterBox = styled.div`
  background-color: var(--figma-color-bg);
  color: var(--figma-color-text);
  border-top: 1px solid var(--figma-color-border);
  display: flex;
  padding: 8px;
  justify-content: space-between;
`;
const Select = styled.ul`
  display: grid;
  grid-gap: 2px;
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    > div {
      display: none;
    }
    &:hover {
      > div {
        display: flex;
      }
    }
  }
  &.colorbtns {
    grid-template-columns: repeat(4, 1fr);
  }
  &.anglebtns {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const FilterButton = styled.button`
  margin: 0;
  padding: 6px;
  border: 1px solid transparent;
  box-shadow: none;
  border-radius: 2px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  background: var(--figma-color-bg);
  :hover {
    border: 1px solid var(--figma-color-border);
  }
  &.active {
    background: var(--figma-color-bg-secondary);
  }
`;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const FooterCredit = styled.div`
  display: flex;
  padding: 6px 8px;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  background: var(--figma-color-bg-hover);
  border-top: 0.5px solid var(--figma-color-border);
  p {
    margin: 0;
    font-size: 14px;
    color: var(--figma-color-icon-secondary);
  }
  a {
    font-weight: 800;
    color: var(--figma-color-icon-brand);
    text-decoration: none;
    opacity: 0.8;
  }
  .left-icon {
    span {
      color: var(--figma-color-icon-disabled);
      margin-left: 8px;
      font-size: var(--font-size-xsmall);
      font-weight: 600;
    }
  }
  .right-link {
    font-size: 12px;
    padding: 4px;
    border: 1px solid transparent;
    border-radius: var(--border-radius-med);
    display: inline-flex;
    align-items: center;
    color: var(--figma-color-icon-disabled);
    a {
      margin-left: 2px;
      font-weight: 600;
      color: var(--figma-color-icon-disabled);
      :hover {
        opacity: 1;
      }
    }
    :hover {
      border: 1px solid var(--figma-color-border);
      color: var(--figma-color-icon-disabled);
      text-decoration: none;
    }
  }
`;

const ToolTip = styled.div`
  z-index: 100;
  display: flex;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;
  color: rgb(255, 255, 255);
  position: absolute;
  top: calc(100% + 1ch);
  &.r {
    right: 0;
  }
  .nib-l {
    position: absolute;
    width: 0px;
    height: 0px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid black;
    top: -4px;
    left: 12px;
  }
  .nib-r {
    position: absolute;
    width: 0px;
    height: 0px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid black;
    top: -4px;
    right: 12px;
  }
  .text {
    align-self: start;
    border: 0.5px solid rgb(0, 0, 0);
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 4px 8px;
    background-color: rgb(34, 34, 34);
  }
`;
