const electron = require('electron')

// Checking For updated version of the Application

const {autoUpdater} = require("electron-updater")

//require('update-electron-app')()

// const autoUpdater =  electron.autoUpdzzzzzzater

// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const ipcMain = electron.ipcMain

const Splashscreen = require("./splash");

var mainOpts = electron.BrowserWindowConstructorOptions = ''
const path = require('path')
const url = require('url')

autoUpdater.checkForUpdates();
autoUpdater.on('checking-for-update', () => {
  console.log("Checking For Updates")
  // sendStatusToWindow('checking For Updates');
});

autoUpdater.on('update-available', info => {
  console.log("Available")
  // sendStatusToWindow('Update Available');
});

autoUpdater.on('update-not-available', info => {
  console.log("Not Available")
  // sendStatusToWindow('Update Not Available');
});

autoUpdater.on('error', err => {
  console.log("Err")
  // sendStatusToWindow(`Error in Auto Updater:${err.toString()}`);
});

autoUpdater.on('download-progress', progressObj => {
  sendStatusToWindow(
    `Download speed: ${progressObj.bytesPerSecond} - Downloaded ${progressObj.percent}% (${progressObj.transferred} + '/' + ${progressObj.total} + )`
  );
});
autoUpdater.on('update-downloaded', info => {
  sendStatusToWindow('Update downloaded; will install now');
});

autoUpdater.on('update-downloaded', info => {
  // Wait 5 seconds, then quit and install
  // In your application, you don't need to wait 500 ms.
  // You could call autoUpdater.quitAndInstall(); immediately
  autoUpdater.quitAndInstall();
});

// console.log("hereeee", autoUpdater)

// const server = 'https://github.com/BashiAly/mist-wallet.git'
// const feed = `${server}/update/${process.platform}/${app.getVersion()}`

// console.log("",autoUpdater.setFeedURL(feed));

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow(){
    mainWindow = new BrowserWindow({
      width: 1366,
      height: 1080,
      frame: true,
      transparent: false,
      show: false // don't show the main window
  });
  // create a new `splash`-Window 
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
  splash = new BrowserWindow({width: 1080, height: 710, transparent: false, frame: true, alwaysOnTop: false});
 
  splash.loadURL(`file://${__dirname}/loading.html`);

  splash.webContents.on('did-finish-load', () => {
    // Send Data to Splash Window 
    splash.webContents.send('ping', 'Splash window')
  })

  ipcMain.on('asynchronous-message', (event, arg) => {
    
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // if main window is ready to show, then destroy the splash window and show up the main window
    mainWindow.once('ready-to-show', () => {
      splash.destroy();
      mainWindow.show();
    });
    // event.returnValue = 'pong'
  })
  
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

      // ------------ Main Menu -------------
    
  
      const {Menu} = require('electron')
  
      const template = [
        {
          label: 'Edit',
          submenu: [
            {role: 'undo'},
            {role: 'redo'},
            {type: 'separator'},
            {role: 'cut'},
            {role: 'copy'},
            {role: 'paste'},
            {role: 'pasteandmatchstyle'},
            {role: 'delete'},
            {role: 'selectall'}
          ]
        },
        {
          label: 'View',
          submenu: [
            {role: 'reload'},
            {role: 'forcereload'},
            {role: 'toggledevtools'},
            {type: 'separator'},
            {role: 'resetzoom'},
            {role: 'zoomin'},
            {role: 'zoomout'},
            {type: 'separator'},
            {role: 'togglefullscreen'}
          ]
        },
        {
          role: 'window',
          submenu: [
            {role: 'minimize'},
            {role: 'close'}
          ]
        },
        {
          role: 'help',
          submenu: [
            {
              label: 'Learn More',
              click () { require('electron').shell.openExternal('https://electronjs.org') }
            }
          ]
        }
      ]
      
      if (process.platform === 'darwin') {
        template.unshift({
          label: app.getName(),
          submenu: [
            {role: 'about'},
            {type: 'separator'},
            {role: 'services', submenu: []},
            {type: 'separator'},
            {role: 'hide'},
            {role: 'hideothers'},
            {role: 'unhide'},
            {type: 'separator'},
            {role: 'quit'}
          ]
        })
      
        // Edit menu
        template[1].submenu.push(
          {type: 'separator'},
          {
            label: 'Speech',
            submenu: [
              {role: 'startspeaking'},
              {role: 'stopspeaking'}
            ]
          }
        )
      
        // Window menu
        template[3].submenu = [
          {role: 'close'},
          {role: 'minimize'},
          {role: 'zoom'},
          {type: 'separator'},
          {role: 'front'}
        ]
      }
      
      const menu = Menu.buildFromTemplate(template)
      Menu.setApplicationMenu(menu)




// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
// ------------------------------------

// Auto Update App  
// NOTE : Need  Apple Developer Certificate

const sendStatusToWindow = (text) => {
  log.info(text);
  if(splash){
    splash.webContents.send('AppUpdateMessage', text);
  }
};





