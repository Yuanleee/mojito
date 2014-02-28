/*
 * Copyright (c) 2011-2013, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

YUI.add('myserver', function(Y, NAME) {

/**
 * The myserver module.
 *
 * @module myserver
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The action context that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            console.log('child req: ' + !!ac.http.getRequest());
            ac.done();
        }

    };

}, '0.0.1', {requires: ['mojito-http-addon']});
