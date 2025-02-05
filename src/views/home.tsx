// home.tsx
// 15-May-2022
import * as React from "react";
import theme from "../theme";
import styled from "styled-components";

const { svgs } = require("../data");
import Fuse from "fuse.js";
import { SearchIcon } from "../components/icons";
import ImgGrid from "../components/img-grid";
import Footer from "../components/footer";

declare function require(path: string): any;

// Shuffle arrary
export const shuffle = (array) => {
  var currentIndex = array.length;
  var tempValue = 0;
  var randomIndex = 0;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }

  return array;
};

const Home = (props) => {
  // const imageData = props;
  const { name } = props;

  shuffle(svgs); //randomize svgs :)

  const [results, setResults] = React.useState(svgs);
  const [query, setQuery] = React.useState("");

  // Setup Fuse search
  const fuse = new Fuse(svgs, {
    threshold: 0.2,
    keys: ["name", "keyword"],
  });

  // Check result from input text and return query
  React.useEffect(() => {
    if (query.trim()) {
      const searchData = fuse.search(query.trim());

      setResults(searchData.map((result) => result.item)); //return only matched icons
    } else {
      setResults(Object.values(svgs)); //return all svgs
    }
  }, [query]);

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
          placeholder="Search from 120+ illlustrations..."
          key={name}
        />
      </SearchBox>

      <Grid>
        {results.map((icon, i) => {
          return (
            <ImgGrid
              name={icon.name}
              keyword={icon.keywords}
              key={`${icon.name}-${i}`}
            />
          );
        })}
      </Grid>
      <Footer />
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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6px;
  padding: 8px;
  margin-bottom: 40px;
`;
