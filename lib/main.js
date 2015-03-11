Request = require("sdk/request").Request;
sideBar = require("sdk/ui/sidebar").Sidebar({
  id: 'sample-sidebar',
  title: 'MiracleSidebar',
  url: './sidebar.html',
  onAttach: function(worker){
    Request({
      url: "http://api.openweathermap.org/data/2.5/weather?q=Kyoto,jp",
      // weather infomation API
      onComplete: function(response){
        worker.port.emit('ping', response.json)
      }
    }).get()
  }
})
