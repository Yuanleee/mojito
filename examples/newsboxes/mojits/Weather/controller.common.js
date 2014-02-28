/*
 * Copyright (c) 2011-2013, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */


/*jslint anon:true, sloppy:true*/
/*global YUI*/


YUI.add('weather', function(Y, NAME) {

    Y.namespace('mojito.controllers')[NAME] = {

        index: function(ac) {
            var location = 'san francisco, california';

            ac.models.get('yqlweather').fetch(location, function(error, response) {
                return ac.done(response);
            });
        }
    };

}, '0.0.1', {requires: [
    'mojito',
    'mojito-models-addon',
    'yqlweather-model']});
