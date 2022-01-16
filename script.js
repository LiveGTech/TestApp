/*
    TestApp

    Copyright (C) LiveG. All Rights Reserved.

    https://liveg.tech
    Licensed by the LiveG Open-Source Licence, which can be found at LICENCE.md.
*/

import * as $g from "https://livegtech.github.io/Adapt-UI/src/adaptui.js";

var previousRequests = [];

$g.waitForLoad().then(function() {
    $g.sel("#message").setText("Welcome to TestApp. If you can read this, everything works!");

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("sw.js").then(function() {
            $g.sel("#serviceWorker").setText("Service worker registered!");
        }).catch(function(error) {
            $g.sel("#serviceWorker").setText(`Service worker failed: ${error}`);
        });
    }
});