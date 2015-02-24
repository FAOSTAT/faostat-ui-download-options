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
            button_label: translate.button,
            decimal_separator_label: translate.decimal_separator,
            comma_label: translate.comma,
            period_label: translate.period,
            thousand_separator_label: translate.thousand_separator,
            decimal_numbers_label: translate.decimal_numbers,
            show_label: translate.show,
            flags_label: translate.flags,
            codes_label: translate.codes,
            units_label: translate.units,
            null_values_label: translate.null_values
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