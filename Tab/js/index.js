'use strict';
require.config({
  paths:{
    "jquery":["lib/jquery"],
    "ui-tab":["module/tab"]
  }
})
require(["ui-tab"],function(obj) {
  var tab = new obj({
    
  })
})
