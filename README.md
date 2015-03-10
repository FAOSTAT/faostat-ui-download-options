FENIX UI Download Options
=========================

Generic component that presents the user with a modal window to collect preferences about the output format (e.g. file format, number of decimal places, etc.)

Example
-------

```javascript
/* Initiate download options. */
download_options.init({
  lang: lang,
  prefix: prefix + 'download_',
  placeholder_id: 'download_options_placeholder'
});
download_options.show_as_modal_window();
```

Available Options
-----------------

| Option Name | Description | Example |
|-------------|-------------|---------|
| lang        | Language of the UI labels. | 'E', 'F', 'S' |

Button Listeners
----------------
