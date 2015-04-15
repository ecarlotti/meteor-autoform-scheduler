'use strict';

Package.describe({
    name: 'vazco:universe-autoform-scheduler',
    summary: 'Custom "afUniverseScheduler" input type for AutoForm',
    version: '0.0.1',
    git: 'https://github.com/vazco/meteor-universe-autoform-scheduler.git'
});

Package.onUse(function (api) {
    api.versionsFrom('1.0.4');
    api.use('templating@1.0.0');
    api.use('blaze@2.0.0');
    api.use('aldeed:autoform@4.0.0');
    api.use('rajit:bootstrap3-datepicker@1.1.1');
    api.use('momentjs:moment@2.9.0');
    api.use('aldeed:autoform-bs-datepicker@1.1.1');
    api.use('vazco:universe-utilities@1.0.7');
    api.use('reactive-dict@1.1.0');

    api.addFiles([
        'universe-autoform-scheduler.html',
        'universe-autoform-scheduler.js',
        'stylesheets/modal-fix.css'
    ], 'client');
});