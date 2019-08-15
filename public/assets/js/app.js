// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".burger_btn").on("click", function(e) {
      var id = $(this).data("id");
      var newEat = $(this).data("neweat");
  
      var newEatState = {
        devoured: newEat
      };
  
      // Send PUT request
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          console.log("changed eat to", newEat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(e) {
      e.preventDefault();

      var newBurger = {
        burger_name: $("#input").val().trim()
      }
      
      console.log(newBurger);
      
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log('added new burger');
            location.reload();
          }
        );
      });
    // Send POST request

    // Modal handling
    $("#showModal").click(function() {
      $(".modal").addClass("is-active");  
    });
    
    $("#closeModal").click(function() {
       $(".modal").removeClass("is-active");
    });
  
});
  