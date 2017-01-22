define(['jquery'],function($) {
  'use strict';
  function Tab() {
    this.init.apply(this,arguments)
  }
  Tab.prototype = {
    init:function(opt){
      var tabEle  = $('[m-role="tab"]') || null,
          tabBtn  = tabEle.children('[m-role = tabBtn]'),
          tabCont = tabEle.children('[m-role = tabCont]');
      if (tabEle) {
        console.dir(tabEle);
      }

    },
    item:function() {

    }
  };
  return Tab;
})
