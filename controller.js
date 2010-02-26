
$(document).unbind("route_error").bind("route_error", function(e) {
  alert("Exception: "+e.message);
});

$.golf.controller = [

  { route: "/test/",
    action: function(container, params) {
      container.empty().append(new Component.Test());
    }
  },

  { route: "/home/",
    action: function(container, params) {
      container.empty().append(new Component.Main());
    }
  }

];
