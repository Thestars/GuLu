define(['jquery'],function($) {
  'use strict';
  function Tab() {
    this.init.apply(this,arguments)
  }
  Tab.prototype = {
    init:function(opt){
      var firstIn = opt.first || 0,
          tabEle  = $('[m-role="tab"]') || null,
          tabBtn  = tabEle.find('[m-role = tabBtn]'),
          tabCont = tabEle.find('[m-role = tabCont]');
      if (tabEle) {
        tabCont.hide();
        tabCont.eq(firstIn).show();
        tabBtn.on('click',function() {
          tabEle = $(this)
          firstIn = tabBtn.index(this);
          tabCont.eq(firstIn).show().siblings().hide();
          return false;
        })
      }

    },
    cutoverFn:function(i,that) {
      var nowItem = that;
    },
    item:function() {

    }
  };
  return Tab;
})
