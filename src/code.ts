// This plugin will add illlustrations from 3dicons.co to your artboard

// Show the plugin UI
figma.showUI(__html__, {
  width: 380,
  height: 600,
  themeColors: true,
});

console.log("illlustrations running...");

//  Message received
figma.ui.onmessage = (msg) => {
  if (msg.svg === "notify") {
    figma.notify(msg.data.message);
    return;
  }
  const icon = figma.createNodeFromSvg(msg.svg);
  icon.name = msg.name;
  icon.x = Math.round(figma.viewport.center.x - icon.width / 2);
  icon.y = Math.round(figma.viewport.center.y - icon.height / 2);
  figma.currentPage.selection = [icon];
  figma.notify("✅  " + msg.name + " illlustration added");
};
