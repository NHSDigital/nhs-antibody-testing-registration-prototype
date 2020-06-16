/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// Check if radio button has been selected
const radioButton = $("input[value$='Yes']")
if(!radioButton.attr('checked')) {
  $("div.input-box").hide()
}

// toggle input div based on selected option
$(document).ready(function() {
  $("input[type$='radio']").click(function() {
    
    const buttonValue = $(this).val();
      if(buttonValue === "No") {
        $("div.input-box").hide()
      } else {
        $("div.input-box").show()
      }
      
  });
});
