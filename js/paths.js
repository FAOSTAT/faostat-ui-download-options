define(function() {

    var config = {
        paths: {
            FENIX_UI_DOWNLOAD_OPTIONS: 'fenix-ui-download-options',
            fenix_ui_download_options: '../'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }
    };

    return config;

});