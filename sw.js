/*
    TestApp

    Copyright (C) LiveG. All Rights Reserved.

    https://liveg.tech
    Licensed by the LiveG Open-Source Licence, which can be found at LICENCE.md.
*/

self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.open("testapp").then(function(cache) {
            function fetchOnline() {
                return fetch(event.request).then(function(response) {
                    cache.put(event.request, response.clone());
        
                    return response;
                });
            }
        
            if (navigator.onLine && ["ethernet", "wifi"].includes(navigator.connection?.type)) { // Typically non-metered
                console.log("On Ethernet or Wi-Fi; not retrieving from cache");

                return fetchOnline();
            }
        
            return cache.match(event.request).then(function(response) {
                return response || fetchOnline();
            })
        })
    );
});