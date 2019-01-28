// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-notdevoured").on("click", function(event) {
      var id = $(this).data("id");
      var temp = $(this).data("test");
  
      console.log(id);
      console.log(temp);
      

      var newnotDevouredState = {
        devoured: temp
      };
      console.log(newnotDevouredState);
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newnotDevouredState
      }).then(
        function() {
          console.log("changed not devoured to", temp);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: 0
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
  