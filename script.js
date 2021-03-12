async function validate() {
    var email = document.querySelector('#email').value;
    var psw = document.querySelector('#psw').value;
    var re_psw = document.querySelector('#re_psw').value;
    var name = document.querySelector('#name').value;
    var msg_email = document.querySelector('#msg_email');
    var msg_pass = document.querySelector("#msg_psw");
    var msg_re_pass = document.querySelector('#msg_re_psw'); 
    var msg_name = document.querySelector('#msg_name');

    var res = await fetch('result.json');
    var result = await res.json();
    // this is the part for validate "sign up" form
    // if it ture, will be true and redirect to facebook
    // if it false, will be alert to span tag the same error.
    let flag = true;
    if (email == "") {
        msg_email.innerHTML = result.error.email;
        flag = false;  
    } 
    
    if (psw == "") {
        msg_pass.innerHTML = (result.error.psw);
        flag = false;  
    } 
    if (re_psw != psw) {
        msg_re_pass.innerHTML = result.error.re_psw;
        flag = false;
    } 
    if (name == "") {
        msg_name.innerHTML = (result.error.name);
        flag = false;
    } else {
        alert("Đăng kí thành công!");
        flag = true;
    } 
    return flag;
}
