
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
