
$(document).unbind("route_error").bind("route_error", function(e) {
  alert("Exception: "+e.message);
});

$.golf.location = function(hash) {
  $.golf.route(hash);
};

$("a").live("click", function(event) {
  $.golf.location(this.href.replace(/^#/, ""));
});

$.golf.controller = [

  { route: "/test/",
    action: function(container, params) {
      document.title = "Try Golf > Test";
      container.empty().append(new Component.Test());
    }
  },

  { route: "/home/",
    action: function(container, params) {
      document.title = "Try Golf";
      container.empty().append(new Component.Main());
    }
  }

];
