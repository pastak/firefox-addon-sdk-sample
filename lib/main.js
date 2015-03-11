var cm = require("sdk/context-menu");
var sp = cm.Separator();
var child = cm.Item({
  label: "Child Item 2 show only on <img>",
  image: require("sdk/self").data.url("icon-16.png")
});
child.context.add(cm.SelectorContext('img'));
var child2 = cm.Item({
  label: "This item show only on some context",
  context: cm.PredicateContext(function(context){
    return (
      (context.documentURL.match(/kmc/)) ||
      (context.selectionText && context.selectionText.length > 3) ||
      (context.srcURL && context.srcURL.match(/png$/))
    )
  })
});
var menu = cm.Menu({
  label: "sample menu",
  context: cm.PageContext(),
  items: [child, sp, child2]
})
var menu2 = cm.Item({
  label: "Welcome KMC (1)",
  accesskey: '1',
  context: cm.URLContext("*.kmc.gr.jp"),
  contentScriptFile: './welcome-kmc.js'
});
