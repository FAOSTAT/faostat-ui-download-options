define(['jquery',
    'handlebars',
    'text!faostat_download_options/html/templates.html',
    'i18n!faostat_download_options/nls/translate',
    'bootstrap',
    'sweet-alert'], function ($, Handlebars, templates, translate) {

    'use strict';

    function OPTIONS() {

        this.CONFIG = {
            lang: 'E',
            placeholder_id: 'placeholder'
        };

    }

    OPTIONS.prototype.init = function(config) {

        /* Extend default configuration. */
        this.CONFIG = $.extend(true, {}, this.CONFIG, config);

        /* Fix the language, if needed. */
        this.CONFIG.lang = this.CONFIG.lang != null ? this.CONFIG.lang : 'E';

        /* this... */
        var _this = this;

        /* Load button template. */
        var source = $(templates).filter('#main_structure').html();
        var template = Handlebars.compile(source);
        var dynamic_data = {

        };
        var html = template(dynamic_data);
        $('#' + _this.CONFIG.placeholder_id).html(html);

        /* Link show/hide function. */
        $('#show_hide_button').click(function() {
            _this.show_hide_options();
        });

    };

    OPTIONS.prototype.show_hide_options = function() {
        var box = $('#options_box');
        if (box.css('display') == 'none') {
            box.css('display', 'block');
            box.animate({opacity: 1});
        } else {
            box.animate({opacity: 0}, function () {
                box.css('display', 'none');
            });
        }
    };

    return OPTIONS;

});