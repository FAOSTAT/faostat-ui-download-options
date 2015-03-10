FENIX UI Download Options
=========================

Generic component that presents the user with a modal window to collect preferences about the output format (e.g. file format, number of decimal places, etc.)

Example
-------

```javascript
/* Initiate download options. */
download_options.init({
  lang: 'E',
  prefix: prefix + 'download_',
  placeholder_id: 'download_options_placeholder'
});
download_options.show_as_modal_window();
```

Available Options
-----------------

| Option Name | Description | Default | Allowed Values |Example |
|-------------|-------------|---------|----------------|--------|
| lang        | Language of the UI labels. | E | E<br>F<br>S|lang: 'E'|
| placeholder_id | ID where the component will be rendered. | placeholder_id | n.a. | placeholder_id: 'download_options_placeholder'| 
| prefix | Prefix to be added to all the ID's to avoid conflicts in the same page. | fenix_ | n.a. | prefix: prefix + 'download_' |
| excel_button | Flag to determine whether to display the Excel button or not. | true | true<br>false | excel_button: false |
| pdf_button | Flag to determine whether to display the PDF button or not. | true | true<br>false | pdf_button: false |
| ok_button | Flag to determine whether to display the OK button or not. | false | true<br>false | ok_button: false |
| csv_button | Flag to determine whether to display the CSV button or not. | true | true<br>false | csv_button: false |
| decimal_separators | Flag to determine whether to display the decimal separator settings button or not. | true |  true<br>false | decimal_separators: false |
| thousand_separators | Flag to determine whether to display the thousand separator settings button or not. | true |  true<br>false | thousand_separators: false |
| decimal_numbers | Flag to determine whether to display the decimal numbers settings button or not. | true |  true<br>false | decimal_numbers: false |
| show_options | Flag to determine whether to display the options (_e.g. codes, f;ags, etc._) settings button or not. | true |  true<br>false | show_options: false |
| pdf_button_id | String to be combined with the prefix to create the ID of the PDF button. | pdf_button_id | n.a. | pdf_button_id: 'my_id' |

Button Listeners
----------------
