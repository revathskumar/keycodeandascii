var last_keys = [];
jQuery(function($){
  $(window)
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
  console.log(code);
  console.log( window.last_keys);
  if(e.shiftKey){
    window.last_keys.push(code);
  }
  if ((window.last_keys[0] >= 65 && window.last_keys[0] <= 90) && code == 16 ) {
    window.last_keys = [];
    return;
  };
  $("#keycode-container").html(code);
  keys = {16: "Shift",9: "Tab", 13: "Enter", 8: "Backspace" };
  $("#keycode-container").html(code);
  if(keys.hasOwnProperty(code) && window.last_keys[0] != 16){
    $("#character-container").html(keys[code]);
    $("#ascii-container").html("");
  }
  return false;
}
