$(document).ready(function(){

    $(document).on('click', '.tabs li', function(){
        $('li').removeClass('active');
        $('ul').toggleClass('expanded');
        $(this).addClass('active');
        var tab_id = $(this).attr('data-tab');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $('#'+tab_id).addClass('current');
    });
    
})


const submitBtn = document.getElementById('submit');
const fullname = document.getElementById('fullname')
const mobile = document.getElementById('mobile')
const email = document.getElementById('email') 
const dob = document.getElementById('dob')
const gender = document.getElementById('gender')
const anualIncome = document.getElementById('anualIncome')
const workingOpt = document.getElementById('workingOpt')
const state = document.getElementById('state')
const smoke = document.getElementById('smoke')
const condition = document.getElementById('condition')

// var formGrpDiv = document.querySelectorAll('.form-group')

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    var regexAlpha = /^[a-zA-Z]*$/;
    var regexNum = /^[0-9]{10}$/;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   if(fullname.value.length === 0 || !regexAlpha.test(fullname.value)){
        fullname.parentElement.classList.add('valerror');
        fullname.style.borderColor ="red";
        console.log("Numbers not allow");
    }else{
        fullname.parentElement.classList.remove('valerror');
        fullname.style.borderColor ="#e5e5e5";
    }

    if(mobile.value.length === 0 || regexAlpha.test(mobile.value) || !regexNum.test(mobile.value)){
        mobile.parentElement.classList.add('valerror');
        mobile.style.borderColor ="red";
        console.log("Numbers not allow");
    }else{
        mobile.parentElement.classList.remove('valerror');
        mobile.style.borderColor ="#e5e5e5";
    }

    if(email.value.length === 0 || emailRegex.test(mobile.value)){
        email.parentElement.classList.add('valerror');
        email.style.borderColor ="red";
        console.log("Numbers not allow");
    }else{
        email.parentElement.classList.remove('valerror');
        email.style.borderColor ="#e5e5e5";
    }

    if(dob.value.length === 0 || regexAlpha.test(dob.value)){
        dob.parentElement.classList.add('valerror');
        dob.style.borderColor ="red";
        
    }else{
        dob.parentElement.classList.remove('valerror');
        dob.style.borderColor ="#e5e5e5";
    }

    if(fullname.value.length === 0 || dob.value.length === 0 || email.value.length === 0 || mobile.value.length === 0 || email.value.length === 0 || regexAlpha.test(mobile.value) || !regexNum.test(mobile.value)){
        condition.disabled = true;        
        condition.parentElement.classList.add('labelcolor');
    }else{
        condition.disabled = false;
        condition.parentElement.classList.remove('labelcolor');
    }

    // if(anualIncome.value == 0 ){
    //     anualIncome.parentElement.classList.add('valerror');
    //     anualIncome.style.borderColor ="red";
    //     
    // }else{
    //     anualIncome.parentElement.classList.remove('valerror');
    //     anualIncome.style.borderColor ="#e5e5e5";
    // }

})

// function empty(){

// }

