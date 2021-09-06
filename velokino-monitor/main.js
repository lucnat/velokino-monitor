
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let win

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 1000,
        height: 600,
        // transparent: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // win.maximize()

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open the DevTools.
    win.webContents.openDevTools()

    win.on('closed', function() {
        mainWindow = null
    })
}

app.allowRendererProcessReuse=false
app.on('ready', createWindow)

app.on('window-all-closed', function() {
    app.quit()
})

app.on('activate', function() {
    if (mainWindow === null) createWindow()
})
