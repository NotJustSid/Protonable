//Modules
const {app, BrowserWindow, globalShortcut, Notification} = require('electron')
const url = require('url');
const path = require('path');
const log = require('electron-log');
const {autoUpdater} = require("electron-updater");

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');

let mainWindow, splashScreen;

const gotTheLock = app.requestSingleInstanceLock()

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
  show: false,
  backgroundColor: '#1a1a1a'
})

mainWindow.loadURL(url.format({

  pathname: path.join(__dirname, 'mainWindow.html'),
  protocol: 'file',
  slashes: true,
  modal: true,
  show: false,
  }));

  mainWindow.webContents.on('did-finish-load', ()=>{
  if (splashScreen) {
    splashScreen.destroy();
  }
  });
  globalShortcut.register('CommandOrControl+Shift+I', function(){
  mainWindow.webContents.toggleDevTools();
  });
  globalShortcut.register('CommandOrControl+R', function() {
  mainWindow.reload()
});

mainWindow.maximize();

mainWindow.setMinimumSize(720, 540);

mainWindow.on('closed', function () {
  mainWindow = null;
  app.quit();
});
}

//autoUpdater's What To Log and When To Log.
// autoUpdater.on('checking-for-update', () => {
//   sendStatusToWindow('Checking for update...');
// })
// autoUpdater.on('update-available', (info) => {
//   sendStatusToWindow('Good News! Update is Available. Preparing to Download...');
// })
// autoUpdater.on('update-not-available', (info) => {
//   sendStatusToWindow('No Updates Currently.');
// })
// autoUpdater.on('error', (err) => {
//   sendStatusToWindow('Error in auto-updater. ' + err);
// })
// autoUpdater.on('download-progress', (progressObj) => {
//   let log_message = "Download speed: " + progressObj.bytesPerSecond;
//   log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
//   log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
//   sendStatusToWindow(log_message);
// })
// autoUpdater.on('update-downloaded', (info) => {
//   sendStatusToWindow('Update has finished downloading! Restart to AutoInstall.');
// });

function showSplash(){
splashScreen = new BrowserWindow(Object.assign({
  width: 400,
  height: 500,
  icon: __dirname + '/img/icon.png',
  frame: false,
  show: false,
  backgroundColor: '#1a1a1a'
}, {parent: mainWindow}));

    splashScreen.loadURL(url.format({
      pathname: path.join(__dirname, '/splashScreen/splash.html'),
      protocol: 'file',
      slashes: true,
      modal: true,
      show: false,
    }));

  splashScreen.setMinimumSize(400, 500)

  splashScreen.webContents.on('did-finish-load', ()=>{

        splashScreen.show();
        splashScreen.webContents.send('updater', 'Checking for Updates<span class="anim">...</span>')
        
        autoUpdater.checkForUpdates();

      autoUpdater.on('update-available', (info) => {
        autoUpdater.downloadUpdate();
        splashScreen.webContents.send('updater', 'An Update is available.<br>Preparing to Download<span class="anim">...</span>')

        autoUpdater.on('download-progress', (progressObj) => {
          let log_message = 'Downloaded ' + progressObj.percent + '%';
          splashScreen.webContents.send('updater', `Downloading Update.<br>${log_message}<span class="anim">...</span>`)
        });
  
        autoUpdater.on('update-downloaded', ()=>{
          splashScreen.webContents.send('updater', 'Restarting<span class="anim">...</span>')
          setTimeout(()=>{
            autoUpdater.quitAndInstall();
          }, 5000);
        });
  
      });

      autoUpdater.on('update-not-available', ()=>{
        setTimeout(()=>{
        splashScreen.webContents.send('updater', 'Starting App<span class="anim">...</span>')}, 2000);
        setTimeout(createWindow, 5000);
      });

      autoUpdater.on('error', ()=>{
        setTimeout(()=>{
        splashScreen.webContents.send('updater', 'Error Checking Updates.<br>Starting App<span class="anim">...</span>')}, 2000);
        setTimeout(createWindow, 5000);
      });

});

  splashScreen.on('closed', function () {
        splashScreen = null;
    });
}

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })

app.on('ready', ()=>{
  showSplash();
});
}

app.setAppUserModelId("com.techisunique.protonable");

setInterval(function(){
 autoUpdater.checkForUpdatesAndNotify(); 
}, 300000);