module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}
  var moment = require('moment');


  filters.returnDate = function(date) {

    if (date == "today") {

      return moment().format("dddd D MMMM YYYY");

    } else if (date == "tomorrow") {
      return moment().add(1, 'days').format("dddd D MMMM YYYY");
    } else {
      return moment().add(date, 'days').format("dddd D MMMM YYYY");
    }

  }

  filters.returnDateShort = function(date) {

    if (date == "today") {

      return moment().format("D MMMM YYYY");

    } else if (date == "tomorrow") {
      return moment().add(1, 'days').format("D MMMM YYYY");
    } else {
      return moment().add(date, 'days').format("D MMMM YYYY");
    }

  }

  filters.returnPastDate = function(date) {

      return moment().subtract(date, 'days').format("dddd D MMMM YYYY");

  }

  filters.returnTime = function(date) {

    if (date == "now") {

      return moment().format("h:mm a");

    }

    if (date == "30MinAgo") {

       return moment().subtract(30, 'minutes').format("h:mm a");

    }

  }

  // Filter to print placeholder data if data doesn't exist.
  // Useful for prototypes that may also be used as documentation
  //
  // Accepts numbers, strings, data[] and variables
  // If empty prints nothing unless you give it a placeholder which it will print out
  //
  // Usage in your templates:
  //
  // {{ data['role'] | placeholder('Captain of the ship') }}

  filters.placeholder = function(data,placeholder) {
    if (data) {
      return data
    } else if (placeholder) {
      return placeholder
    } else {
      return
    }
  }

  filters.stringOrNot = function(obj) {
    return typeof obj == 'string';
  }


  filters.printStringOrArray = function(obj) {

    if (typeof obj == 'string') {
      return obj
    } else {

      var output = "";

      obj.forEach(function(value){
        output += value + " <br>"
      });

      return output
    }

  }

  filters.monthToWord = function(month,placeholder) {
    var months = {
      "1":'January',
      "01":'January',
      "2":'February',
      "02":'February',
      "3":'March',
      "03":'March',
      "4":'April',
      "04":'April',
      "5":'May',
      "05":'May',
      "6":'June',
      "06":'June',
      "7":'July',
      "07":'July',
      "8":'August',
      "08":'August',
      "9":'September',
      "09":'September',
      "10":'October',
      "11":'November',
      "12":'December'
    }

    if (month) {

      month.toString()
      return months[month]

    } else if (placeholder) {
      return placeholder
    } else {
      return
    }

  }

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
