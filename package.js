// 'use strict';

Package.describe({
    name: 'ecarlotti:meteor-autoform-scheduler',
    summary: 'Custom "afScheduler" input type for AutoForm',
    version: '0.2.6',
    git: 'https://github.com/ecarlotti/meteor-autoform-scheduler.git'
});

Package.onUse(function (api) {
    api.versionsFrom('1.8.0.2');
    api.use('jquery');                                      // @1.11.11 *
    api.use('templating');                                  // @1.3.2 *
    api.use('blaze');                                       // @2.3.3 *
    api.use('underscore');
    api.use('check');
    api.use('aldeed:autoform');                             // @6.3.0 *
    api.use('momentjs:moment');                             // @2.24.0 *
    api.use('vazco:universe-utilities');                    // @1.0.7 *
    api.use('reactive-dict');                               // @1.1.0
    api.use('aramk:rrule');                                 // @2.1.0 *
    api.use("tap:i18n");                                    // @1.8.2 *

    api.addFiles([
        'lib/bootstrap3-datetimepicker/css/bootstrap-datetimepicker.css',   // from tsega:bootstrap3-datetimepicker
        'lib/bootstrap3-datetimepicker/js/bootstrap-datetimepicker.js',

        'autoform-scheduler.html',
        'autoform-scheduler.js',

        'autoform-bootstrap-datepicker.html',
        'autoform-bootstrap-datepicker.js',

        'stylesheets/styles.css'
    ], 'client');
});
