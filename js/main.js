jQuery(function($){
  last_keys = [];
  $(document)
    .keypress(getAscii)
    .keyup(getKeyCode);
});

function getAscii (e) {
  e.preventDefault();
  e.stopPropagation();
  //ascii
  char = String.fromCharCode(e.which);
  $("#character-container").html(char);
  $("#ascii-container").html(e.which);
  return false;
}

function getKeyCode(e){
  e.preventDefault();
  e.stopPropagation();

  code = e.which.toString();
  if(e.shiftKey){
    last_keys.push(code);
  }
  else{
    last_keys = [];
  }
  if(last_keys.length == 3){
    last_keys.shift();
  }
  $("#keycode-container").html(code);
  keys = {16: "Shift",9: "Tab", 13: "Enter", 8: "Backspace", }
  $("#keycode-container").html(code);
  if(keys.hasOwnProperty(code) && last_keys[0] != 16){
    $("#character-container").html(keys[code]);
    $("#ascii-container").html("");
  }
  return false;
}
