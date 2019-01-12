//Modules

const {app, BrowserWindow, globalShortcut} = require('electron')
const url = require('url');
const path = require('path');
const log = require('electron-log');
const {autoUpdater} = require("electron-updater");

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');


let mainWindow;

function sendStatusToWindow(text) {
  log.info(text);
  mainWindow.webContents.send('message', text);
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 1920,
    icon: __dirname + '/img/icon.png',
    frame: false,
  })

  mainWindow.loadURL(url.format({

    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file',
    slashes: true,
    modal: true,
    show: false,
   }));
   
   mainWindow.once('ready-to-show', ()=>{
    mainWindow.show();
   });
   
   globalShortcut.register('CommandOrControl+R', function() {
		mainWindow.reload()
	});
  
  mainWindow.maximize();
  
  mainWindow.setMinimumSize(720, 540);
  
  mainWindow.on('closed', function () {
    app.quit();
  });

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

autoUpdater.on('checking-for-update', () => {
  sendStatusToWindow('Checking for update...');
})
autoUpdater.on('update-available', (info) => {
  sendStatusToWindow('Update available.');
})
autoUpdater.on('update-not-available', (info) => {
  sendStatusToWindow('No Updates Currently.');
})
autoUpdater.on('error', (err) => {
  sendStatusToWindow('Error in auto-updater. ' + err);
})
autoUpdater.on('download-progress', (progressObj) => {
  let log_message = "Download speed: " + progressObj.bytesPerSecond;
  log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
  log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
  sendStatusToWindow(log_message);
})
autoUpdater.on('update-downloaded', (info) => {
  sendStatusToWindow('Update downloaded');
});


app.on('ready', createWindow);

app.on('ready', function()  {
  autoUpdater.checkForUpdatesAndNotify();
});
