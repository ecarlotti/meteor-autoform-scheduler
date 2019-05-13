// 'use strict';

Package.describe({
    name: 'ecarlotti:meteor-autoform-scheduler',
    summary: 'Custom "afScheduler" input type for AutoForm',
    version: '0.1.2',
    git: 'https://github.com/ecarlotti/meteor-autoform-scheduler.git'
});

Package.onUse(function (api) {
    api.versionsFrom('1.8.0.2');
    api.use('jquery@1.11.11');
    api.use('templating@1.3.2');
    api.use('blaze@2.3.3');
    api.use('underscore');
    api.use('check');
    api.use('aldeed:autoform@6.3.0');
    api.use('rajit:bootstrap3-datepicker@1.1.1');           // @1.1.1
    api.use('tsega:bootstrap3-datetimepicker@3.1.3_3');     // @3.1.3_3
    api.use('momentjs:moment@2.24.0');                      // @2.9.0
    api.use('vazco:universe-utilities@1.0.7');
    api.use('reactive-dict');                               // @1.1.0
    api.use('aramk:rrule@2.1.0');                           // @2.1.0

    api.addFiles([
        'autoform-scheduler.html',
        'autoform-scheduler.js',

        'autoform-bootstrap-datepicker.html',
        'autoform-bootstrap-datepicker.js',

        'stylesheets/styles.css'
    ], 'client');
});
