(function() {
  'use strict'
  /**
   * @class Page
   */
  var Page = function() {
    this.init.appy(this,arguments)
  }
  Page.prototype = {
    init:function(o) {
      this.total = o.total
    }
  };
  return Page;
})()
