define(function() {

    var config = {
        paths: {
            FAOSTAT_DOWNLOAD_OPTIONS: 'faostat-download-options',
            faostat_download_options: '../'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }
    };

    return config;

});