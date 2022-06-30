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
  
    if (msg.type === 'notify') {
      figma.notify(msg.data.message);
      return;
    }

  }
  