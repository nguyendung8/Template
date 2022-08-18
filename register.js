
let passWord =  document.querySelector('#password');
let nameInput = document.querySelector('.name');
let rePassword = document.querySelector('.re-password');
let emailInput = document.querySelector('.email');
let phoneNumber = document.querySelector('.phone-number');
let submitBtn = document.querySelector('.btn-submit');
let message = document.querySelector('.message');
let message1 = document.querySelector('.message1');
let message2 = document.querySelector('.message2');
let message3 = document.querySelector('.message3');
let message4 = document.querySelector('.message4');
let eRror = document.querySelectorAll('.error');
let input = document.querySelectorAll('.k');


passWord.onkeyup = function(e) {
     message.innerText= '';
    if(passWord.value.length <6)
    {
        message.innerText='Mật khẩu phải tối thiểu 6 ký tự';
      
    }
    
};
rePassword.onkeyup = function(e) {
    message1.innerText= '';
    if(passWord.value != rePassword.value)
    {
        message1.innerText='Mật khẩu không giống với mật khẩu đã nhập ở trên'
    
    }
   
};
phoneNumber.onkeyup = function(e) {
    message2.innerText= '';
    if(phoneNumber.value.length <9 || phoneNumber.value.length >15)
    {
    message2.innerText='Số điện thoại phải chứa từ 9-15 ký tự ';
    
}

   
    if(phoneNumber.value.search(/\W/)>=0)
   {
    message2.innerText ='Số điện thoại không được chứa các ký tự đặc biệt';
   
 
   }
   else if(phoneNumber.value.search(/[A-Z]/)>=0 ||phoneNumber.value.search(/[a-z]/)>=0)
   {
    message2.innerText ='Số điện thoại không được chứa các chữ cái';
   
}

};
function validateEmpty() {
    if (
      nameInput.value == "" ||
      phoneNumber.value == "" ||
      emailInput.value == "" ||
      passWord.value == "" ||
      rePassword.value == ""
    ) {
      return "Các trường dấu * không được để trống!";
    }
  }

submitBtn.addEventListener('click',function(e) {
    for(let i=0 ;i<eRror.length ;i++) {
        eRror[i].textContent ='';
    }
if(validateEmpty())
{
   for(let i = 0 ; i<input.length ;i++) {
    if(input[i].value == '')
    {
        eRror[i].textContent = validateEmpty();
    }
   }
}
    let check = true;
    for(let x of eRror){
        if(x.innerText != "")
        {
            check = false;
        }
    }
    if (check == false) {
        document
        .querySelector(".register")
          .setAttribute("onSubmit", "return false;");
      } else {
          alert("Đăng ký thành công");
              document.querySelector(".register").setAttribute("onSubmit", "");   
    }
});


