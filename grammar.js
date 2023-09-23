module.exports = grammar({
  name: 'hex_colors',

  rules: {
    // Define the root of your grammar
    source_file: $ => repeat(
      choice(
        $.hex_color,
        $._other_text
      )
    ),

    // Define a rule for capturing valid hex color codes
    hex_color: $ => /#[0-9a-fA-F]+/,

    // Define a catch-all rule to capture other text
    _other_text: $ => /[^\s]+/
  }
});
