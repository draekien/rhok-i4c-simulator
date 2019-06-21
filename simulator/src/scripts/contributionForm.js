import $ from "jquery";

$(function() {
  $(document).ready(function() {
    $("#contribution-percentage").on("input", function(e) {
      const $output = $("#contribution-percentage-output");
      const $input = $(this);
      var inputVal = $input.val();
      var formattedVal = parseFloat(inputVal).toFixed(1);
      $output.val(formattedVal);
    });

    $("#fund-total").on("blur", function(e) {
      const $input = $(this);
      var inputVal = $input.val();
      var formattedVal = inputVal.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      $input.val(formattedVal);
    });
  });
});
