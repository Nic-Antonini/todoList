let removeAll = $("#bin").click(() => {
    $(".line").detach()
})

$("#input").on("keydown", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });


$("#list").on("click", ".close", function() {
    $(this).closest(".line").detach();
});

  function addTask() {
    let line = $("<div>").addClass("line").appendTo("#list");
    let taskContainer = $("<div>").addClass("a1"); 
    line.append(taskContainer);
    taskContainer.append("<input type='checkbox' class='check'>");
    taskContainer.append("<p>" + $("#input").val() + "</p>");
    line.append("<input id='close' class='close' type='button' value='&times'>");
    $("#input").val(null)
  }
