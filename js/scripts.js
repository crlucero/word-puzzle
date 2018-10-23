$(document).ready(function() {
  $("#formOne").submit(function(event) {
event.preventDefault();

  var sentence = $("input#sentence").val();
  var newArray = sentence.split("");

      for (var index = 0 ; index < newArray.length; index += 1) {

      if (newArray[index] === "a" || newArray[index] ==="e" || newArray[index] ==="i" || newArray[index] ==="o" || newArray[index] ==="u") {
        newArray[index]= "-";
      }

newArray.join("");

};
var newString = newArray.toString();
var finalResult="";
for (var i = 0; i < newString.length; i ++) {
  if (newString.charAt(i)!=",") {
    finalResult+=newString.charAt(i);
  }
}

$(".result").append("<p>"+ finalResult +"</p>")
});
});
