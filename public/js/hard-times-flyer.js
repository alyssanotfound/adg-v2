$(document).ready(function(){
  $.ajaxSetup({ cache: false }); // or iPhones don't get fresh data
  GetUserIP();
});

function GetUserIP(){
  // alert("getting data");
  var ret_ip;
  $.ajaxSetup({async: false});
  $.get('http://jsonip.com/', function(r){ 
    // alert("inside get request");
    ret_ip = r.ip; 
    // alert("user IP is: ");
    // alert(ret_ip);
    $(".formData").val(ret_ip);
  })
  return ret_ip;
}