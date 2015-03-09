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
            pdf_button: true,
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
            button_label: translate.download_as,
            header_label: translate.button,
            csv_action: null,
            excel_action: null,
            pdf_action: null,
            ok_action: null
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

        /* Load button template. */
        var source = $(templates).filter('#modal_window_button').html();
        var template = Handlebars.compile(source);
        var dynamic_data = {
            modal_window_header_label: this.CONFIG.header_label,
            pdf: this.CONFIG.pdf_button,
            csv: this.CONFIG.csv_button,
            ok: this.CONFIG.ok_button,
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
            modal_window_button_label: this.CONFIG.button_label,
            prefix: this.CONFIG.prefix
        };
        var html = template(dynamic_data);
        $('#' + _this.CONFIG.placeholder_id).html(html);

        /* Link listeners to buttons. */
        $('#' + this.CONFIG.prefix + 'csv_button').click(function() {
            _this.csv_listener();
        });
        $('#' + this.CONFIG.prefix + 'excel_button').click(function() {
            _this.excel_listener();
        });

    };

    OPTIONS.prototype.collect_user_selection = function() {
        this.CONFIG.user_selection.decimal_separator = $('#' + this.CONFIG.prefix + 'decimal_separator').val();
        this.CONFIG.user_selection.thousand_separator = $('#' + this.CONFIG.prefix + 'thousand_separator').val();
        this.CONFIG.user_selection.decimal_numbers = $('#' + this.CONFIG.prefix + 'decimal_numbers').val();
        this.CONFIG.user_selection.flags = $('#' + this.CONFIG.prefix + 'flags').is(':checked');
        this.CONFIG.user_selection.codes = $('#' + this.CONFIG.prefix + 'codes').is(':checked');
        this.CONFIG.user_selection.units = $('#' + this.CONFIG.prefix + 'units').is(':checked');
        this.CONFIG.user_selection.null_values = $('#' + this.CONFIG.prefix + 'null_values').is(':checked');
        return this.CONFIG.user_selection;
    };

    OPTIONS.prototype.csv_listener = function() {
        var data = [1, 2, 3, 4, 5];
        this.CONFIG.csv_action(this.collect_user_selection(), data);
    };

    OPTIONS.prototype.excel_listener = function() {
        var data = [1, 2, 3, 4, 5];
        try {
            this.CONFIG.excel_action(this.collect_user_selection(), data);
        } catch(e) {
            swal(translate.warning, translate.no_listener_for_this_button, 'warning');
        }
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