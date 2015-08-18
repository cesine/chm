#!/usr/bin/env node

'use strict';
var pouchdbServer = require('pouchdb-server/bin/pouchdb-server');
var sync = require('./sync');

console.log('Running using level db with standard options', pouchdbServer);

console.log('Downloading default database');
sync.downloadDB();
