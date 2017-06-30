const Toast = {}
Toast.install = function (Vue, options) {

  Vue.prototype.$msg = 'hello world'

  Vue.prototype.$toast = (tips, $color = 'default', showTime = 3000) => {
    if($color === ''){
      $color = 'default'
    }
    if(document.getElementsByClassName('tipsModal').length){
      // 如果toast还在，则不再执行
      return;
    }
    let ToastTpl = Vue.extend({     // 1、创建构造器，定义好提示信息的模板
      template: '<div class="tipsModal '+ $color +'-tips">' + tips + '</div>'
    })
    let tpl = new ToastTpl().$mount().$el  // 2、创建实例，挂载到文档以后的地方
    document.body.appendChild(tpl)     // 3、把创建的实例添加到body中
    setTimeout(function () {        // 4、延迟2.5秒后移除该提示
      document.body.removeChild(tpl)
    }, showTime)
  }
}
module.exports = Toast

