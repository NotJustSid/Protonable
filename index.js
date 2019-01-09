//Modules

const {app, BrowserWindow, globalShortcut} = require('electron')

const url = require('url');
const path = require('path');


let mainWindow;


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



app.on('ready', createWindow);

