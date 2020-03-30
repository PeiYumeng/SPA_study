$(function(){
    var $btnAddPwd = $('#add-password'), //添加密码框
        $btnGetPwd = $('#get-password'),  //获得密码
        pwdTextboxs = [];
  
    $btnAddPwd.click(function(){
      var pwd = new PasswordTextbox({'container': 'div.main'});  //添加DOM节点
      pwdTextboxs.push(pwd);
      $btnGetPwd.removeAttr('disabled');
    });
  
    $btnGetPwd.click(function() {
      pwdTextboxs.forEach(function(pwd) {
        alert(pwd.getPwd());
      });
    });
  });
  