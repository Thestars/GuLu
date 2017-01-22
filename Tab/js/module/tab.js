define(function() {
  function UI_Tab(s) {
    this.init.apply(this,s)
  }
  UI_Tab.prototype = {
    init:function(s) {
      console.log(s.ele);
    }
  };
  return new tab;
})
