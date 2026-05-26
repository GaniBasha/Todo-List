function updateEmptyMessage() {

  if ($(".items").length === 0) {

    $(".todo-list").html(
      "<p class='empty-message'>No tasks added yet!</p>"
    );

  }
}

updateEmptyMessage();


// Add task
$(".btn").on("click", function () {

  let userTask = $("#task").val().trim();

  // Prevent empty tasks
  if (userTask !== "") {

    // Remove empty message
    $(".empty-message").remove();

    let fullTaskCard = `
      <div class="items">

        <div class="user-task">
          ✅ ${userTask}
        </div>

        <div class="actions">
          <button type="button" class="complete-btn">✔</button>
          <button type="button" class="del">❌</button>
        </div>

      </div>
    `;

    // Add task to list
    $(".todo-list").append(fullTaskCard);

    // Clear input
    $("#task").val("");
  }
});


// Add task using Enter key
$("#task").keypress(function (event) {

  if (event.key === "Enter") {

    $(".btn").click();

  }
});


// Delete task
$(document).on("click", ".del", function () {

  $(this).closest(".items").remove();

  updateEmptyMessage();
});


// Complete task
$(document).on("click", ".complete-btn", function () {

  $(this)
    .closest(".items")
    .find(".user-task")
    .toggleClass("completed-task");
});

