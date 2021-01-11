const { app, BrowserWindow, session } = require("electron");

function createWindow() {
  let win = new BrowserWindow({
    width: 1100,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    title: "YouTube Music",
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

app.mar;
