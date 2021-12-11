onEvent("IntenseButton", "click", function( ) {
  setScreen("IntenseScreen");
});
onEvent("LacrosseButton", "click", function( ) {
  setScreen("LacrosseScreen");
});
onEvent("AbsButton", "click", function( ) {
  setScreen("AbsScreen");
});
onEvent("Finish1", "click", function( ) {
  setScreen("WorkoutScreen");
});
onEvent("Finish2", "click", function( ) {
  setScreen("WorkoutScreen");
});
onEvent("Finish3", "click", function( ) {
  setScreen("WorkoutScreen");
});
onEvent("Timer", "click", function( ) {
  var seconds = 1800;
  timedLoop(1000, function() {
  seconds = seconds - 1;
  setNumber("Timer", seconds + 0);
  if (seconds == 0) {
    playSound("https://thumbs.dreamstime.com/audiothumb_11413/114136296.mp3", false);
    stopTimedLoop();
    setText("Timer", "Begin Timer");
  }
  });
});
onEvent("Timer2", "click", function( ) {
  var seconds = 500;
  timedLoop(1000, function() {
  seconds = seconds - 1;
  setNumber("Timer2", seconds + 0);
  if (seconds == 0) {
    playSound("https://thumbs.dreamstime.com/audiothumb_11413/114136296.mp3", false);
    stopTimedLoop();
    setText("Timer2", "Begin Timer");
  }
  });
});
onEvent("Timer3", "click", function( ) {
  var seconds = 1800;
  timedLoop(1000, function() {
  seconds = seconds - 1;
  setNumber("Timer3", seconds + 0);
  if (seconds == 0) {
    playSound("https://thumbs.dreamstime.com/audiothumb_11413/114136296.mp3", false);
    stopTimedLoop();
    setText("Timer3", "Begin Timer");
  }
  });
});
onEvent("Timer4", "click", function( ) {
  var seconds = 1800;
  timedLoop(1000, function() {
  seconds = seconds - 1;
  setNumber("Timer4", seconds + 0);
  if (seconds == 0) {
    playSound("https://thumbs.dreamstime.com/audiothumb_11413/114136296.mp3", false);
    stopTimedLoop();
    setText("Timer4", "Begin Timer");
  }
  });
});
onEvent("WorkoutsButton", "click", function( ) {
  setScreen("WorkoutScreen");
});
onEvent("Back", "click", function( ) {
  setScreen("Homescreen");
});
