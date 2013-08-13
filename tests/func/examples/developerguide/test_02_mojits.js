      YUI({
        useConsoleOutput: true,
        useBrowserConsole: true,
        logInclude: { TestRunner: true }
      }).use('node', 'node-event-simulate', 'test', 'console', function (Y) {

        'use strict';
<<<<<<< HEAD
        var suite = new Y.Test.Suite("Dashboard App: Mojits Module"),
            url = window.location.protocol + "//" + window.location.host + "/";
        suite.add(new Y.Test.Case({
          "test heading of page and GitHub section": function () {
            // Tests the title in HTML header
            Y.Assert.areEqual("Trib - YUI/Mojito Developer Dashboard", Y.one('div h4').get('innerHTML'));

            // Tests the title within the content
            Y.Assert.areEqual("YUI GitHub Stats", Y.one('div h3').get('innerHTML'));
=======
        var suite = new Y.Test.Suite("TribApp: Mojito Dashboard test"),
            url = window.location.protocol + "//" + window.location.host + "/";
        suite.add(new Y.Test.Case({
          "test Mojito dashboard": function () {
            // Tests the title in HTML header
            Y.Assert.areEqual("Trib - YUI/Mojito Developer Dashboard", Y.one('head title').get('innerHTML'));

            // Tests the  YUI button
            Y.Assert.areEqual(url, Y.one('a.yui3-button.swap').get('href'));

            // Tests the title within the content
            Y.Assert.areEqual("Trib - Mojito Developer Dashboard", Y.one('body h1').get('innerHTML'));
>>>>>>> 9d15dfb... Added descriptor for dashboard module apps and templates for the test files.
          }
        }));
        Y.Test.Runner.add(suite);
      });
