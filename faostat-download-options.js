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
            placeholder_id: 'placeholder',
            excel_button: true,
            pdf_button: false,
            ok_button: false,
            csv_button: true,
            decimal_separators: true,
            thousand_separators: true,
            decimal_numbers: true,
            show_options: true,
            pdf_button_id: 'pdf_button_id',
            csv_button_id: 'csv_button_id',
            excel_button_id: 'excel_button_id',
            user_selection: {},
            decimal_separator_id: 'decimal_separator',
            thousand_separator_id: 'thousand_separator',
            decimal_numbers_id: 'decimal_numbers',
            flags_id: 'flags',
            codes_id: 'codes',
            units_id: 'units',
            null_values_id: 'null_values',
            prefix: 'fenix_',
            button_label: translate.button
        };

    }

    OPTIONS.prototype.init = function(config) {

        /* Extend default configuration. */
        this.CONFIG = $.extend(true, {}, this.CONFIG, config);

        /* Fix the language, if needed. */
        this.CONFIG.lang = this.CONFIG.lang != null ? this.CONFIG.lang : 'E';

    };

    OPTIONS.prototype.show_as_modal_window = function() {

        /* this... */
        var _this = this;

        console.log(this.CONFIG);

        /* Load button template. */
        var source = $(templates).filter('#modal_window_button').html();
        var template = Handlebars.compile(source);
        var dynamic_data = {
            decimal_separator_id: this.CONFIG.prefix + this.CONFIG.decimal_separator_id,
            thousand_separator_id: this.CONFIG.prefix + this.CONFIG.thousand_separator_id,
            decimal_numbers_id: this.CONFIG.prefix + this.CONFIG.decimal_numbers_id,
            flags_id: this.CONFIG.prefix + this.CONFIG.flags_id,
            codes_id: this.CONFIG.prefix + this.CONFIG.codes_id,
            units_id: this.CONFIG.prefix + this.CONFIG.units_id,
            null_values_id: this.CONFIG.prefix + this.CONFIG.decimal_separator_id,
            modal_window_button_id: translate.download_as,
            modal_window_id: 'modal_window_id',
            modal_window_header_label: translate.button,
            pdf: this.CONFIG.pdf_button,
            csv: this.CONFIG.csv_button,
            ok: this.CONFIG.ok_button,
            ok_button_id: this.CONFIG.ok_button,
            ok_button_label: 'OK',
            excel: this.CONFIG.excel_button,
            decimal_separators: this.CONFIG.decimal_separators,
            thousand_separators: this.CONFIG.thousand_separators,
            decimal_numbers: this.CONFIG.decimal_numbers,
            show_options: this.CONFIG.show_options,
            decimal_separator_label: translate.decimal_separator,
            comma_label: translate.comma,
            period_label: translate.period,
            thousand_separator_label: translate.thousand_separator,
            decimal_numbers_label: translate.decimal_numbers,
            show_label: translate.show,
            flags_label: translate.flags,
            codes_label: translate.codes,
            units_label: translate.units,
            null_values_label: translate.null_values,
            pdf_label: translate.pdf,
            csv_label: translate.csv,
            excel_label: translate.excel,
            pdf_button_id: this.CONFIG.pdf_button_id,
            csv_button_id: this.CONFIG.csv_button_id,
            excel_button_id: this.CONFIG.excel_button_id,
            modal_window_button_label: this.CONFIG.button_label
        };
        var html = template(dynamic_data);
        $('#' + _this.CONFIG.placeholder_id).html(html);

        /* Link listeners to buttons. */
        $('#' + this.CONFIG.csv_button_id).click(function() {
            _this.csv_listener();
        })

    };

    OPTIONS.prototype.collect_user_selection = function() {

        console.log(this.CONFIG.user_selection);
    };

    OPTIONS.prototype.csv_listener = function(user_selection, data) {
        swal('CSV Button');
    };

    OPTIONS.prototype.show_as_menu = function() {

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