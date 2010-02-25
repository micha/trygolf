
$.golf.controller = [

  { route: "/home/",
    action: function(container, params) {
      container.empty().append(new Component.Main());
    }
  }

];
