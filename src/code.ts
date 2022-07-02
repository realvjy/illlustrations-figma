// This plugin will add 3dicons from 3dicons.co to your artboard

// Show the plugin UI
figma.showUI(__html__, {
    width: 300,
    height: 600,
    themeColors: true
  }
);

console.log('illlustrations running...');


//  Message received
figma.ui.onmessage = (msg) => {
  
    if (msg.svg === 'notify') {
      figma.notify(msg.data.message);
      return;
    }
    console.log(msg);
    const icon = figma.createNodeFromSvg(msg.svg)
    icon.name = 'test'
    icon.x = figma.viewport.center.x
    icon.y = figma.viewport.center.y
    figma.currentPage.selection = [icon]

  }
  