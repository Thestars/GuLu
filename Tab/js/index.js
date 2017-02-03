'use strict';
require.config({
  paths:{
    "jquery":["http://cdn.bootcss.com/jquery/1.11.3/jquery.min","lib/jquery"],
    "ui-tab":["module/tab"]
  }
})
require(["ui-tab"],function(obj) {
  var tab = new obj({
    first:1
  })
})
