var clear = $('.terminal-output').html();
var array = [];
var counter = -1;
var login = 0;
var email = 0;
var password = 0;
var em = "";
var username = 'guest';
var logged = 0;
var submit = 0;
var level;
$(document).ready(function() {
  $('#root').html('root:~/ ' + username + '$ ');
  $('textarea').focus();
});
$('textarea').blur(function(){
   setTimeout(function(){
    $('textarea').focus();
  }, 50);
});
var temp_command = '';
function reset(){
  $('textarea').val('');
  $('#live').html('');
  $('#live2').html('');
  $('.cursor').html('&nbsp');
};
$('textarea').keyup(function(e) {
  var command = $('textarea').val();
  var i;
  if(command.search('<')!=-1 || command.search('>')!=-1){
    alert('> or < not allowed.');
    $('textarea').val($('textarea').val().substring(0,$('textarea').prop("selectionStart")-1));
    return;
  }
  command = command.replace(/(\r\n|\n|\r)/gm,"");
  var ctrl = e.ctrlKey||e.metaKey;
  if(command.length!=0 && ($('textarea').prop("selectionStart") == command.length)){
    for(i=array.length-1; i>=0; --i){
      if(array[i].startsWith(command)){
          break;
      }
    }
  }
  else 
    i = -1;
  if(e.which==38  && login!=1 && submit!=1){
    if(counter>=0){
      if(counter==array.length -1){
        temp_command = command;
      }
      $('textarea').val(array[counter]);
      command = array[counter];
      counter-=1;
    }
    else{
      var temp = $('textarea').focus().val();
      $('textarea').val('').val(temp);
    }
    $('#live').html(command);
    $('#live2').html('');
    $('.cursor').html('&nbsp');
    return;
  }
  else if(e.which==40  && login!=1 && submit!=1){
    if(counter<array.length-2){
      $('textarea').val(array[counter+2]);
      command = array[counter+2];
      counter+=1;
    }
    else if(counter==array.length-2){
      $('textarea').val(temp_command);
      command = temp_command;
      counter+=1;
      $('#live2').html('');
    }
    else{
      var temp = $('textarea').focus().val();
      $('textarea').val('').val(temp);
    }
    $('#live').html(command);
    $('#live2').html('');
    $('.cursor').html('&nbsp');
    return;
  }
  else if(e.which==37 || e.which==39){
    var index = $('textarea').prop("selectionStart");
    var prev = command.substring(0, index);
    $('#live').html(prev);
    if(prev==command  && (i == -1 || array.length == 0)){
      $('.cursor').html('&nbsp');
      $('#live2').html('');
    }
    else if((prev!=command) && (i == -1 || array.length == 0)){
      $('.cursor').html(command[index]);
      $('#live2').html(command.substring(index+1, command.length));
    }
    else if((i!=1 || array.length != 0) && (command!=array[i].substring(0, array[i].length)) && (e.which==39)){
      $('textarea').val(array[i]);
      command = array[i];
      $('#live').html(command);
      $('#live2').html('');
      $('.cursor').html('&nbsp');
    }
    else if(prev == command) {
      $('.cursor').html('&nbsp');
    }     
    return;
  }
  else if(e.which==13  && login!=1 && submit!=1){
    if(command=="clear"){
      $('.terminal-output').empty();
      $('.terminal-output').append(clear);
      reset();
    }
    else if(command=="help"){
      $('.terminal-output').append('<div class="command" role="presentation" aria-hidden="true"><div style="width: 100%;"><span class="user">root:~/ ' + username + '$ </span><span>' + command + '</span></div></div>');
      $('.terminal-output').append('<div class="result"><div style="width: 100%;"><span>List of commands<br> signup - to signup<br> \
       login - to login into the terminal.<br>\
       clear - to clear screen<br>\
       execute &ltlevel>- get problem for level (range -1(all) to 11)<br>\
       hints &ltlevel> - get a hint for the level - 20% score deduction from level<br>\
       submit &ltlevel> - submit for the level<br>\
       scoreboard - see ranking<br>\
       logout - logout of session\
       </span></div></div><br>');
      reset();
    }
    else if(command=="signup"){
      // $('.terminal-output').append('<div class="command" role="presentation" aria-hidden="true"><div style="width: 100%;"><span class="user">root:~/ ' + username + '$ </span><span>' + command + '</span></div></div>');
      // $('.terminal-output').append('<div class="result"><div style="width: 100%;"><span>Signup is closed now.</span></div></div><br>');
      // reset();
      window.open('signup','_newtab');
      return;
    }
    else if(command=="scoreboard"){
      $('.terminal-output').append('<div class="command" role="presentation" aria-hidden="true"><div style="width: 100%;"><span class="user">root:~/ ' + username + '$ </span><span>' + command + '</span></div></div>');
      reset();
      window.open('scoreboard','_newtab');
    }
    else if(command=="login"){
      if(!logged){
        $('#root').hide();
        $('.prompt').append('<span id="email">email:</span>');
        $('.terminal-output').append('<div class="command" role="presentation" aria-hidden="true"><div style="width: 100%;"><span class="user">root:~/ ' + username + '$ </span><span>' + command + '</span></div></div>');
        reset();
        login = 1;
        email = 1;
      }
      else{
        $('.terminal-output').append('<div class="command" role="presentation" aria-hidden="true"><div style="width: 100%;"><span class="user">root:~/ ' + username + '$ </span><span>' + command + '</span></div></div>');
        $('.terminal-output').append('<div class="result"><div style="width: 100%;"><span>Already logged in.</span></div></div><br>');
        reset();
      }
    }
    else if(command.includes("execute")){
      if(!logged){
        $('.terminal-output').append('<div class="command" role="presentation" aria-hidden="true"><div style="width: 100%;"><span class="user">root:~/ ' + username + '$ </span><span>' + command + '</span></div></div>');
        $('.terminal-output').append('<div class="result"><div style="width: 100%;"><span>You need to log in.</span></div></div><br>');
       }
      else if(command.split(" ").length != 2) {
        $('.terminal-output').append('<div class="command" role="presentation" aria-hidden="true"><div style="width: 100%;"><span class="user">root:~/ ' + username + '$ </span><span>' + command + '</span></div></div>');
        $('.terminal-output').append('<div class="result"><div style="width: 100%;"><span>Invalid execute format.</span></div></div><br>');
       }
      else{
        $('.terminal-output').append('<div class="command" role="presentation" aria-hidden="true"><div style="width: 100%;"><span class="user">root:~/ ' + username + '$ </span><span>' + command + '</span></div></div>');
        $.ajax({
          type:'post',
          datatype :'json',
          data:{level: command.split(" ")[1]},
          url:'/execute'
        }).done(function(data){
          $('.terminal-output').append('<div class="result"><div style="width: 100%;"><span>' + data + '</span></div></div><br>');

        }).fail(function(data){
          console.log("internal error :" + data);
        });
       }
      reset();
    }
    else if(command.includes("hints")){
      if(!logged){
        $('.terminal-output').append('<div class="command" role="presentation" aria-hidden="true"><div style="width: 100%;"><span class="user">root:~/ ' + username + '$ </span><span>' + command + '</span></div></div>');
        $('.terminal-output').append('<div class="result"><div style="width: 100%;"><span>You need to log in.</span></div></div><br>');
       }
      else if(command.split(" ").length != 2) {
        $('.terminal-output').append('<div class="command" role="presentation" aria-hidden="true"><div style="width: 100%;"><span class="user">root:~/ ' + username + '$ </span><span>' + command + '</span></div></div>');
        $('.terminal-output').append('<div class="result"><div style="width: 100%;"><span>Invalid hints format.</span></div></div><br>');
       }
      else{
        $('.terminal-output').append('<div class="command" role="presentation" aria-hidden="true"><div style="width: 100%;"><span class="user">root:~/ ' + username + '$ </span><span>' + command + '</span></div></div>');
        $.ajax({
          type:'post',
          datatype :'json',
          data:{level: command.split(" ")[1]},
          url:'/hints'
        }).done(function(data){
          $('.terminal-output').append('<div class="result"><div style="width: 100%;"><span>' + data + '</span></div></div><br>');

        }).fail(function(data){
          console.log("internal error :" + data);
        });
       }
      reset();
    }

    else if(command.includes("submit") && submit==0){
      if(!logged){
        $('.terminal-output').append('<div class="command" role="presentation" aria-hidden="true"><div style="width: 100%;"><span class="user">root:~/ ' + username + '$ </span><span>' + command + '</span></div></div>');
        $('.terminal-output').append('<div class="result"><div style="width: 100%;"><span>You need to log in.</span></div></div><br>');
       }
      else if(command.split(" ").length != 2) {
        $('.terminal-output').append('<div class="command" role="presentation" aria-hidden="true"><div style="width: 100%;"><span class="user">root:~/ ' + username + '$ </span><span>' + command + '</span></div></div>');
        $('.terminal-output').append('<div class="result"><div style="width: 100%;"><span>Invalid submit format.</span></div></div><br>');
       }
      else{
        $('#root').hide();
        $('.prompt').append('<span id="email">key:</span>');
        $('.terminal-output').append('<div class="command" role="presentation" aria-hidden="true"><div style="width: 100%;"><span class="user">root:~/ ' + username + '$ </span><span>' + command + '</span></div></div>');
        submit = 1;
        level = command.split(" ")[1];
      }
      reset();
    }
    else if(command=="logout"){
      window.location = '/logout';
      reset();
      return;
    }
    else{
        $('.terminal-output').append('<div class="command" role="presentation" aria-hidden="true"><div style="width: 100%;"><span class="user">root:~/ ' + username + '$ </span><span>' + command + '</span></div></div>');
        $('.terminal-output').append('<div class="result"><div style="width: 100%;"><span>No command \''+command+'\' found.</span></div></div><br>');
        $('textarea').val('');
        $('#live').html('');
        $('#live2').html('');
        $('.cursor').html('&nbsp');
    }
    if(command.length>0){
      array.push(command);
      temp_command = '';
    }
    counter=array.length-1;
    return;
  }
  else if(e.which==67 && ctrl)
  {
    if((email==1) || (password==1))
    {
      $('#email').remove();
      $('#root').show();
      email=0;
      login=0;
      password = 0;
    }
    else {
      $('.terminal-output').append('<div class="command" role="presentation" aria-hidden="true"><div style="width: 100%;"><span class="user">root:~/ ' + username + '$ </span><span>' + command + '^C' + '</span></div></div>');
    }
    reset();
    return;
  }
  else if((e.which==40 || e.which==38)  && login==1){
    var temp = $('textarea').focus().val();
    $('textarea').val('').val(temp);
    $('#live').html(command);
    $('#live2').html('');
    $('.cursor').html('&nbsp');
  }
  else if(e.which==13  && email==1){
    em = command;
    $('#email').html('password: ');
    email = 0;
    password = 1;
    reset();
  }
  else if(e.which==13  && password==1){
    $('#email').remove();
    $('#root').show();
    //Post request to login using em and command value
    login = 0;
    password = 0;
    reset();
    $.ajax({
    type:'post',
    datatype :'json',
    data:{email:em,password:command},
    url:'/login'
  }).done(function(data){
    if(data.value=='1'){
      username = data.name;
      logged = 1;
      $('.terminal-output').append('<div class="result"><div style="width: 100%;"><span>Logged in.</span></div></div><br>');
      $('#root').html('root:~/ ' + username + '$ ');
    }
    else if(data.value=='2'){
      $('.terminal-output').append('<div class="result"><div style="width: 100%;"><span>Verify your email first. If not recieved, contact Akshat Malviya @ +918219164783.</span></div></div><br>');
    }
    else{
      $('.terminal-output').append('<div class="result"><div style="width: 100%;"><span>Login failed.</span></div></div><br>');
    }
  }).fail(function(data){
    console.log("internal error :" + data);
  });
  em = ""
  }
  else if(e.which==13  && submit==1){
    $('#email').remove();
    $('#root').show();
    //Post request to login using em and command value
    submit = 0;
    reset();
    $.ajax({
      type:'post',
      datatype :'json',
      data:{key: command, level: level},
      url:'/evaluate'
    }).done(function(data){
      $('.terminal-output').append('<div class="result"><div style="width: 100%;"><span>' + data + '</span></div></div><br>');
      $('#root').html('root:~/ ' + username + '$ ');
    }).fail(function(data){
      console.log("internal error :" + data);
    });
  }
  else if(password!=1){
    $('#live').html('');
    if(i == -1 || array.length == 0){
        $('#live').append($('textarea').val().substring(0,$('textarea').prop("selectionStart")));
        if($('textarea').prop("selectionStart") == command.length) {
          $('#live2').html('');
          $('.cursor').html('&nbsp');
        }
    }
    else {
        $('#live').html(command);
        var index = $('textarea').prop("selectionStart");
        $('.cursor').html("<font color='yellow'>" + array[i].substring(index, index+1)  + "</font>" );
        $('#live2').html("<font color='yellow'>" + array[i].substring(index+1, array[i].length)  + "</font>" );
        if(command==array[i].substring(0, array[i].length))
        {
          $('.cursor').html('&nbsp');
        }
    }
  }
});
