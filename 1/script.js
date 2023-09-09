function createDiv() {
    $(document).ready(function () {
      var test = {
        id: "div",
        css: {
          "color": "Red"
        }
      };
      var $div = $("<div>", test);
      $div.html("New div tag created");
      $("body").append($div);
    });
  }