// img-grid.tsx
// 30-Jun, 2022
import * as React from "react";
import styled from "styled-components";

const getSVG = async (url) => {
  try {
    let response = await fetch(url);
    let svgText = await response.text();
    return svgText;
  } catch (error) {
    console.log("error", error);
  }
};

interface ImgGridProps {
  name: string;
  keyword: string;
}

function ImgGrid({ name, keyword }: ImgGridProps) {
  const url = `https://illlustrations-api.netlify.app/v1/${name}.svg`;

  const addToFigma = async () => {
    const svgData = await getSVG(url);
    //@ts-ignore
    parent.postMessage(
      {
        pluginMessage: {
          svg: svgData,
          name: name,
        },
      },
      "*"
    );
  };

  return (
    <Button key={name} onClick={() => addToFigma()}>
      <img src={`${url}`} />
    </Button>
  );
}

export default ImgGrid;

// Styling button as image
const Button = styled.button`
  margin: 0;
  padding: 0;
  background: var(--figma-color-bg-secondary);
  border: 0;
  box-shadow: none;
  border-radius: 4px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0.5px solid var(--figma-color-border);
  outline: 0;
  :hover {
    border: 1px solid var(--figma-color-border-brand);
  }
  img {
    width: 100%;
    border-radius: 4px;
  }
`;
