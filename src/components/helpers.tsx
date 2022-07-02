// Get image and return image data to add on figma

export const getSVG = async (url) => {
  new Promise((resolve, reject) => {
    //
  });
  try {
    // fetch(url)
    //   .then((response) => response.text())
    //   .then((string) => {
    //     return string;
    //   });
  } catch (error) {
    console.log("error", error);
  }
};

export const addToFigma = async (url) => {
  console.log(url);

  const svgData = await getSVG(url);
  console.log(svgData);

  //   //@ts-ignore
  //   parent.postMessage(
  //     {
  //       pluginMessage: {
  //         svg: svgData,
  //       },
  //     },
  //     "*"
  //   );
};
