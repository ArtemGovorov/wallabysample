'use strict';

var expect = chai.expect;

describe('Some Kind of tests', function () {

    var MainService,
        $q,
        $document;
    
    beforeEach(function () {
        angular.mock.module('newtest');

        $document = angular.element(document);
        $document.find('body').append('<content></content>');

        var originalFind = $document.find;
        $document.find = function (selector) {
            if (selector === 'body') {
                return originalFind.call($document, 'body').find('content');
            } else {
                return originalFind.call($document, selector);
            }
        }


        angular.mock.module(function ($provide) {
            console.log($provide);
            $provide.value('$document', $document);
        });
    });

    beforeEach(angular.mock.inject(function (_MainService_) {
        console.log('INSIDE BEFORE EACH');
        MainService = _MainService_;
    }));

    afterEach(function () {
        $document.find('body').html('');
    });

    var cases = [
        {
            hHostname: 'http://someurl'
        },
        {
            hHostname: undefined
        }
    ];

    cases.forEach(function (c) {
        it("should do something", function () {
            expect(true).to.be.true;

            console.log('value of service : ' + MainService.getTest());
            
        });
    });
});
