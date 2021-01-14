const { app, BrowserWindow } = require("electron");

function createWindow() {
  let win = new BrowserWindow({
    title: "YouTube Music",
    width: 1100,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.webContents.loadURL("https://music.youtube.com");

  win.on("close", (e) => {
    e.preventDefault();
    app.hide();
  });
}

app.on("ready", createWindow);

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  } else {
    app.show();
  }
});

app.on("before-quit", () => {
  app.exit();
});
