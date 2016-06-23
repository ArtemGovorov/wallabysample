'use strict';

MainService.$inject = ['$q', '$document', '$interpolate'];

function MainService($q, $document, $interpolate) {

    return {
        getTest: function() {
            return 'hey';
        }
    };
}

module.exports = MainService;