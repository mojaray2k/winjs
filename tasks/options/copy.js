// Copyright (c) Microsoft Open Technologies, Inc.  All Rights Reserved. Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var config = require("../../config.js");

module.exports = {
    tests: {
        files: [
            {expand: true, cwd: "tests/", src: ["**"], dest: config.testsOutput}
        ]
    },
    
    testDeps: {
        files: [
            { src: [config.desktopOutput + "/js/base.js"], dest: config.testsOutput + "base/source/base.js" }
        ]
    }
};