

// List of prompts for the user
var prompts = [
  "<em>Type your name",
  "<em>Type an adjective",
  "<em>Type a noun"
];


var answers = [];
// Keep track of current prompt we're on
var currentPrompt = 0;

// A function that will call the next prompt
var nextPrompt = function () {
  //if there's no answer in the form
  if (currentPrompt != 0) {
    answers.push($("input").val());

  }
      // if there is a next prompt
      if (currentPrompt < prompts.length) {
        // put first prompt in all html elements with class
        $(".prompt").html(`${prompts[currentPrompt]}<br><input id="input" type="text" autofocus>`);
        // move the next prompt into variable currentPrompt
        currentPrompt = currentPrompt + 1;

      }
      //or else if we're at the end of the array
      else {
        // put a new message into the html.
        showFinal();
      };
};

//puts user answers into HTML
var showFinal = function () {
  $(".prompt").html(
    'This is <span class="fill">' +
    answers[0] +
    '</span> and the <span class="fill">' +
    answers[1] +
    '</span> <span class="fill">' +
    answers[2] +

    "</span>."
  );
  //and then hide the button
  $("button").hide();
};

// run nextPrompt function when button is clicked
$("button").click(function () {

  //zadržava focus u input-u
  $('body').click(function(){
    $("#input").focus();
  });

  nextPrompt();
});

// Show the first prompt as soon as js loads
nextPrompt();