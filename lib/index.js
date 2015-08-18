#!/usr/bin/env node

'use strict';
// var pouchdbServer = require('pouchdb-server/bin/pouchdb-server');
var CORS = require("./CORSNode").CORS;


/** https://wiki.apache.org/couchdb/Replication */
var downloadDB = function(options) {
	if (!options) {
		options = {};
	}
	// For now, test with a pre-existing database which has an app in it.
	options.appDB = options.appDB || "distrib-acra-storage";

	console.log("Downloading updates from server if available. ", options);
	var promise = CORS.makeCORSRequest({
		url: "http://get.acralyzer.com/_replicate",
		method: "POST",
		dataType: "json",
		data: {
			source: "http://get.acralyzer.com/" + options.appDB,
			target: "http://127.0.0.1:5984/" + options.appDB
			// create_target: "true",
		}
	}).then(function(response) {
		console.log(new Date() + " Updated app on " + Date.now(), response);
		console.log(" Open the app to http://127.0.0.1:5984/" + options.appDB + "/user.html to login.");
		return response;
	}, function(reason) {
		console.log(reason);
		return reason;
	}).fail(function(error) {
		console.log(error);
		return error;
	});

	return promise;
};

// downloadDB();
// console.log("Running using level db with standard options");



exports.downloadDB = downloadDB;
