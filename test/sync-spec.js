/* globals expect, it, describe, xit, require */
'use strict';

var sync = require('./../lib/sync');
var maxSpecTime = 5000;
/**
 <pre>
  ======== A Handy Little Jasmine Reference ========
  https://github.com/pivotal/jasmine/wiki/Matchers

  Spec matchers:
    expect(x).toEqual(y); compares objects or primitives x and y and passes if they are equivalent
    expect(x).toBe(y); compares objects or primitives x and y and passes if they are the same object
    expect(x).toMatch(pattern); compares x to string or regular expression pattern and passes if they match
    expect(x).toBeDefined(); passes if x is not undefined
    expect(x).toBeUndefined(); passes if x is undefined
    expect(x).toBeNull(); passes if x is null
    expect(x).toBeTruthy(); passes if x evaluates to true
    expect(x).toBeFalsy(); passes if x evaluates to false
    expect(x).toContain(y); passes if array or string x contains y
    expect(x).toBeLessThan(y); passes if x is less than y
    expect(x).toBeGreaterThan(y); passes if x is greater than y
    expect(function(){fn();}).toThrow(e); passes if function fn throws exception e when executed

    Every matcher's criteria can be inverted by prepending .not:
    expect(x).not.toEqual(y); compares objects or primitives x and y and passes if they are not equivalent

    Custom matchers help to document the intent of your specs, and can help to remove code duplication in your specs.
    beforeEach(function() {
      this.addMatchers({

        toBeLessThan: function(expected) {
          var actual = this.actual;
          var notText = this.isNot ? " not" : "";

          this.message = function () {
            return "Expected " + actual + notText + " to be less than " + expected;
          }

          return actual < expected;
        }

      });
    });
</pre>

* @requires sync
* @requires Jasmine
*
* @example sync
* @module  syncTest
* @extends  Jasmine.spec
*/
describe('sync', function() {

  describe('construction', function() {

    it('should load', function() {
      expect(sync).toBeDefined();
    });

  });


  describe('download updates', function() {

    it('should be able to download updates to the app', function(done) {
      expect(sync.downloadDB).toBeDefined();

      sync.downloadDB().then(function(result) {
        expect(result).toBeDefined();
        expect(result.ok).toEqual(true);
        expect(result.source_last_seq).toBeDefined();
        expect(result.replication_id_version).toBeDefined();
        expect(result.session_id).toBeDefined();
        expect(result.session_id).toBeDefined();
      }, function(reason) {
        expect(reason).toBeUndefined();
      }).fail(function(excpetion) {
        expect(excpetion).toBeUndefined();
      }).done(done);

    }, maxSpecTime);


    xit('should be able to download updates to any database', function(done) {
      expect(sync.downloadDB).toBeDefined();

      sync.downloadDB({
        appDB: 'jenkins-firstcorpus'
      }).then(function(result) {
        expect(result).toBeDefined();
        expect(result).toEqual(' ');
      }, function(reason) {
        expect(reason).toBeUndefined();
      }).fail(function(excpetion) {
        expect(excpetion).toBeUndefined();
      }).done(done);

    }, maxSpecTime);


  });

});
