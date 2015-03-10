var buttons = require('sdk/ui/button/action');
var panels = require("sdk/panel");

var button = buttons.ActionButton({
  id: "panel-sample",
  label: "Panel Button",
  icon: "./icon-16.png",
  onClick: handleClick,
  badge: 0,
  badgeColor: "#00AAAA"
});

var panel = panels.Panel({
  contentURL: "./panel.html",
  onHide: function(){
    button.state('window', {checked: false});
  },
  onMessage: function(message){
    switch(message.type){
      case 'increament':
        button.badge = button.badge + 1;
        break;
      case 'color':
        button.badgeColor = message.value;
        break;
    }
  }
});

function handleClick(state) {
  if (!state.checked) {
    panel.show({
      position: button
    });
  }
  button.state('window', {checked: !state.checked});
}
