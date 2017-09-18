var flavors = ["chocolate", "vanilla", "strawberry", "coffee"];
$(document).ready(function() {
  flavors.forEach(function(flavor) {
    $("#list").append("<li>" + flavor + "</li>");


  });
});
