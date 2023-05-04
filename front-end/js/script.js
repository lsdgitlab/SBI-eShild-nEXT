$(document).ready(function(){
    $(".hamburger").on('click', function(){
        $(this).toggleClass('menu-opened');
        $('.menu').toggleClass('menu-opened');
    });

    $('.cards .content .read-more').click(function(){
        $('.cards .content').addClass('show');
        $('.cards .content ul').addClass('show');
        $('.cards .content ul li').addClass('show');
        $('.read-more').hide();        
        $('.read-less').show();
    });
    $('.cards .content .read-less').click(function(){
        $('.cards .content').removeClass('show');
        $('.cards .content ul').removeClass('show');
        $('.cards .content ul li').removeClass('show');
        $('.read-less').hide();
        $('.read-more').show();        
    });

    $(document).on('click', '.tabs li', function(){
        $('li').removeClass('active');
        $('ul').toggleClass('expanded');
        $(this).addClass('active');
        var tab_id = $(this).attr('data-tab');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $('#'+tab_id).addClass('current');
    });
    // $("#dob").datepicker({
	// 	dateFormat: "dd-mm-yy"
	// 	,	duration: "fast"
	// });
    
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

// state list 

const stateName = [
    {
    "key": "AN",
    "name": "Andaman and Nicobar Islands"
    },
    {
    "key": "AP",
    "name": "Andhra Pradesh"
    },
    {
    "key": "AR",
    "name": "Arunachal Pradesh"
    },
    {
    "key": "AS",
    "name": "Assam"
    },
    {
    "key": "BR",
    "name": "Bihar"
    },
    {
    "key": "CG",
    "name": "Chandigarh"
    },
    {
    "key": "CH",
    "name": "Chhattisgarh"
    },
    {
    "key": "DH",
    "name": "Dadra and Nagar Haveli"
    },
    {
    "key": "DD",
    "name": "Daman and Diu"
    },
    {
    "key": "DL",
    "name": "Delhi"
    },
    {
    "key": "GA",
    "name": "Goa"
    },
    {
    "key": "GJ",
    "name": "Gujarat"
    },
    {
    "key": "HR",
    "name": "Haryana"
    },
    {
    "key": "HP",
    "name": "Himachal Pradesh"
    },
    {
    "key": "JK",
    "name": "Jammu and Kashmir"
    },
    {
    "key": "JH",
    "name": "Jharkhand"
    },
    {
    "key": "KA",
    "name": "Karnataka"
    },
    {
    "key": "KL",
    "name": "Kerala"
    },
    {
    "key": "LD",
    "name": "Lakshadweep"
    },
    {
    "key": "MP",
    "name": "Madhya Pradesh"
    },
    {
    "key": "MH",
    "name": "Maharashtra"
    },
    {
    "key": "MN",
    "name": "Manipur"
    },
    {
    "key": "ML",
    "name": "Meghalaya"
    },
    {
    "key": "MZ",
    "name": "Mizoram"
    },
    {
    "key": "NL",
    "name": "Nagaland"
    },
    {
    "key": "OR",
    "name": "Odisha"
    },
    {
    "key": "PY",
    "name": "Puducherry"
    },
    {
    "key": "PB",
    "name": "Punjab"
    },
    {
    "key": "RJ",
    "name": "Rajasthan"
    },
    {
    "key": "SK",
    "name": "Sikkim"
    },
    {
    "key": "TN",
    "name": "Tamil Nadu"
    },
    {
    "key": "TS",
    "name": "Telangana"
    },
    {
    "key": "TR",
    "name": "Tripura"
    },
    {
    "key": "UK",
    "name": "Uttar Pradesh"
    },
    {
    "key": "UP",
    "name": "Uttarakhand"
    },
    {
    "key": "WB",
    "name": "West Bengal"
    }
    ]

    for(var i =0; i < stateName.length; i++){
        console.log(stateName[i].name);
        let optn = document.createElement("option");
        optn.value=stateName[i].name;
        optn.innerHTML = stateName[i].name;
        state.appendChild(optn)

    }

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    var regexAlpha = /^[a-zA-Z]*$/;
    var regexNum = /^[0-9]{10}$/;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   if(fullname.value.length === 0 || !regexAlpha.test(fullname.value)){
        fullname.focus()
        fullname.parentElement.classList.add('valerror');
        fullname.style.borderColor ="red";
        console.log("Numbers not allow");
    }else{
        fullname.parentElement.classList.remove('valerror');
        fullname.style.borderColor ="#e5e5e5";
    }

    if(mobile.value.length === 0 || regexAlpha.test(mobile.value) || !regexNum.test(mobile.value)){
        // mobile.focus()
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

    if(fullname.value.length === 0 || dob.value.length === 0 || email.value.length === 0 || mobile.value.length === 0 || email.value.length === 0 || regexAlpha.test(mobile.value) || !regexNum.test(mobile.value) || gender.value == 0 || gender.value=="Select the Gender" || state.value == 0 || state.value=="Select the State"){
        condition.disabled = true;        
        condition.parentElement.classList.add('labelcolor');
    }else{
        condition.disabled = false;
        condition.parentElement.classList.remove('labelcolor');
    }

    if(gender.value == 0 || gender.value=="Select the Gender"){
        gender.parentElement.classList.add('valerror');
        gender.style.borderColor ="red";
        
    }else{
        gender.parentElement.classList.remove('valerror');
        gender.style.borderColor ="#e5e5e5";
    }

    if(state.value == 0 || state.value=="Select the State"){
        state.parentElement.classList.add('valerror');
        state.style.borderColor ="red";
        
    }else{
        state.parentElement.classList.remove('valerror');
        state.style.borderColor ="#e5e5e5";
    }
    


})

var lgs = 123;
// lgs = "Ls Digital";
console.log(lgs);



