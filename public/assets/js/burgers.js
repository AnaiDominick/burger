// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-notDevoured").on("click", function(event) {
      var id = $(this).data("id");
      var newnotDevoured = $(this).data("newnotDevoured");
  
      var newnotDevouredState = {
        notDevoured: newnotDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newnotDevouredState
      }).then(
        function() {
          console.log("changed not devoured to", newnotDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        notDevoured: $("[name=notDevoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  