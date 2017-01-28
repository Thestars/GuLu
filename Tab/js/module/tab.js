define(['jquery'],function($) {
  'use strict';
  function Tab() {
    this.init.apply(this,arguments)
  }
  Tab.prototype = {
    init:function(opt){
      var tabEle  = $('[m-role="tab"]') || null,
          tabBtn  = tabEle.find('[m-role = tabBtn]'),
          tabCont = tabEle.find('[m-role = tabCont]');
      if (tabEle) {
        
      }

    },
    item:function() {

    }
  };
  return Tab;
})
