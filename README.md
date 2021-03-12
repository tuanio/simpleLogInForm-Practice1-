# simpleLogInForm-Practice1-
this is the practice 1, training us about ajax and javascript, jquery, json from AI 

![Alt text](https://raw.githubusercontent.com/TuanNguyenVanAnh/simpleLogInForm-Practice1-/master/create-user-form-coach-js-01-850x384.png)

this pictrue just a example 
– User nhập đầy đủ nội dung vào form
– Trừ field Address mọi field còn điều bắt buộc nhập , trường hợp user nhập thiếu sẽ show message thông báo.
– Khi ấn Submit, hệ thống sẽ gởi thông tin đến server thông qua Ajax và nhận về kết quả là chuỗi JSon có format sau:
`
{ 
        error : [
                ’email’ : ’email này đã tồn tại’,
                ‘psw’ : ‘password phải lớn hơn 6 ký tự’
        ],
        result : 0 (có lỗi) hoặc 1 (thành công) 
}   
`
+ trường hợp có lỗi, lỗi sẽ đặt trong array [error] với phần tên  (email, psw . . .) cũng là id của field, giá trị sẽ là chuổi báo lỗi. Các bạn xuất báo lỗi vào cặp thể SPAN thông qua id. VD với email thì xuất id của SPAN tương ứng là msg_email.

+ Nếu không có lỗi (result = 1), hệ thống sẽ xuất 1 alert : “Bạn đã đăng ký thành công”. Khi user ấn [OK] trên alert thì hệ thống di chuyển (redirect) đến trang bất kỳ (như facebook.com)
