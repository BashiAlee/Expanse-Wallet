var electron_1 = require("electron");
/**
 * 
 * When splashscreen was shown.
 * @private
 */
var splashScreenTimestamp = 0;
/**
 * Splashscreen is loaded and ready to show.
 * @private
 */
var splashScreenReady = false;
/**
 * Main window has been loading for a min amount of time.
 * @private
 */
var slowStartup = false;
/**
 * Show splashscreen if criteria are met.
 * @private
 */
var showSplash = function () {
    if (splashScreen && splashScreenReady && slowStartup) {
        splashScreen.show();
        splashScreenTimestamp = Date.now();
    }
};
/**
 * Close splashscreen / show main screen. Ensure screen is visible for a min amount of time.
 * @private
 */
var closeSplashScreen = function (main, min) {
    if (splashScreen) {
        var timeout = min - (Date.now() - splashScreenTimestamp);
        setTimeout(function () {
            if (splashScreen) {
                splashScreen.close();
                splashScreen = null;
            }
            main.show();
        }, timeout);
    }
};
/**
 * The actual splashscreen browser window.
 * @private
 */
var splashScreen;
/**
 * Initializes a splashscreen that will show/hide smartly (and handle show/hiding of main window).
 * @param config - Configures splashscren
 * @returns {BrowserWindow} the main browser window ready for loading
 */
exports.initSplashScreen = function (config) {
    var xConfig = {
        delay: config.delay === undefined ? 500 : config.delay,
        minVisible: config.minVisible === undefined ? 500 : config.minVisible,
        windowOpts: config.windowOpts,
        templateUrl: config.templateUrl,
        splashScreenOpts: config.splashScreenOpts,
    };
    xConfig.splashScreenOpts.frame = false;
    xConfig.splashScreenOpts.center = true;
    xConfig.splashScreenOpts.show = false;
    xConfig.windowOpts.show = false;
    var window = new electron_1.BrowserWindow(xConfig.windowOpts);
    splashScreen = new electron_1.BrowserWindow(xConfig.splashScreenOpts);
    splashScreen.loadURL("file://" + xConfig.templateUrl);
    // Splashscreen is fully loaded and ready to view.
    splashScreen.webContents.on("did-finish-load", function () {
        splashScreenReady = true;
        showSplash();
    });
    // Startup is taking enough time to show a splashscreen.
    setTimeout(function () {
        slowStartup = true;
        showSplash();
    }, xConfig.delay);
    window.webContents.on("did-finish-load", function () {
        closeSplashScreen(window, xConfig.minVisible);
    });
    return window;
};
/**
 * Initializes a splashscreen that will show/hide smartly (and handle show/hiding of main window).
 * Use this function if you need to send/receive info to the splashscreen (e.g., you want to send
 * IPC messages to the splashscreen to inform the user of the app's loading state).
 * @param config - Configures splashscren
 * @returns {DynamicSplashScreen} the main browser window and the created splashscreen
 */
exports.initDynamicSplashScreen = function (config) {
    return {
        main: exports.initSplashScreen(config),
        // initSplashScreen initializes splashscreen so this is a safe cast.
        splashScreen: splashScreen,
    };
};