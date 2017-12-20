
function validate() {
    var email = $("#email").val(); 
    var psw = $("#psw").val();
    var re_psw = $("#re_psw").val();
    var name = $("#name").val();
    var msg_email = $("#msg_email");
    var msg_pass = $("#msg_psw");
    var msg_re_pass = $("#msg_re_psw");
    var msg_name = $("#msg_name");

    var request = $.ajax({
        url : "result.json",
        type : "get", 
        dataType : "json", 
        data : {
            email : email,
            psw : psw,
            re_psw : re_psw,
            name : name
        },
    });
    
    // this is the part for validate "sign up" form
    // if it ture, will be true and redirect to facebook
    // if it false, will be alert to span tag the same error.
    if (email == "") {
        request.done(function(result) {
            msg_email.html(result.error.email);
        });
        return false;
    } 
    
    if (psw == "") {
        request.done(function(result) {
            msg_pass.html(result.error.psw);
        });
        return false;
    } 
    if (re_psw != psw) {
        request.done(function(result) {
            msg_re_pass.html(result.error.re_psw);
        });
        return false;
    } 
    if (name == "") {
        request.done(function(result) {
            msg_name.html(result.error.name);
        });
        return false;
    } else {
        alert("Đăng kí thành công!");
        return true;
    } 
}