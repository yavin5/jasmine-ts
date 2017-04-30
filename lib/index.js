#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Jasmine = require("jasmine");
var Command = require("jasmine/lib/command");
var path = require("path");
require("ts-node/register");
var jasmine = new Jasmine({ projectBaseDir: path.resolve() });
var examplesDir = path.join("node_modules", "jasmine-core", "lib", "jasmine-core", "example", "node_example");
var command = new Command(path.resolve(), examplesDir, console.log);
var initReporters = function () {
    var configPath = process.env.JASMINE_CONFIG_PATH || "spec/support/jasmine.json";
    var config = JSON.parse(fs.readFileSync(path.resolve(configPath), "utf8"));
    if (config.reporters && config.reporters.length > 0) {
        config.reporters.forEach(function (reporter) {
            var parts = reporter.name.split("#");
            var name = parts[0];
            var member = parts[1];
            var reporterClass = member ? require(name)[member] : require(name);
            jasmine.addReporter(new (reporterClass)(reporter.options));
        });
    }
};
initReporters();
command.run(jasmine, process.argv.slice(2));
//# sourceMappingURL=index.js.map