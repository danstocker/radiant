/*global troop */
/*jshint node:true */
'use strict';

var exports = troop.Base.extend()
    .addPublic({
        fs: troop.Base.extend()
    });

function require() {
    return exports;
}