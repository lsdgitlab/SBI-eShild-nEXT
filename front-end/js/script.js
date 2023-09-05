
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
 
})
const myForm = document.getElementById('myForm')
const submitBtn = document.getElementById('submit')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const mobile = document.getElementById('mobile')
const email = document.getElementById('email');
const dob = document.getElementById('dob')
const gender = document.getElementById('gender')
const anualIncome = document.getElementById('anualIncome')
const workingOpt = document.getElementById('workingOpt')
const state = document.getElementById('state')
const smoke = document.getElementById('smoke')
const condition = document.getElementById('condition')
const penEmpl = document.getElementById('penemployee')
const numEployer = document.getElementById('nemployer')

// var formGrpDiv = document.querySelectorAll('.form-group')

// state list

const stateName = [
  {
    key: 'AN',
    name: 'Andaman and Nicobar Islands',
  },
  {
    key: 'AP',
    name: 'Andhra Pradesh',
  },
  {
    key: 'AR',
    name: 'Arunachal Pradesh',
  },
  {
    key: 'AS',
    name: 'Assam',
  },
  {
    key: 'BR',
    name: 'Bihar',
  },
  {
    key: 'CG',
    name: 'Chandigarh',
  },
  {
    key: 'CH',
    name: 'Chhattisgarh',
  },
  {
    key: 'DH',
    name: 'Dadra and Nagar Haveli',
  },
  {
    key: 'DD',
    name: 'Daman and Diu',
  },
  {
    key: 'DL',
    name: 'Delhi',
  },
  {
    key: 'GA',
    name: 'Goa',
  },
  {
    key: 'GJ',
    name: 'Gujarat',
  },
  {
    key: 'HR',
    name: 'Haryana',
  },
  {
    key: 'HP',
    name: 'Himachal Pradesh',
  },
  {
    key: 'JK',
    name: 'Jammu and Kashmir',
  },
  {
    key: 'JH',
    name: 'Jharkhand',
  },
  {
    key: 'KA',
    name: 'Karnataka',
  },
  {
    key: 'KL',
    name: 'Kerala',
  },
  {
    key: 'LD',
    name: 'Lakshadweep',
  },
  {
    key: 'MP',
    name: 'Madhya Pradesh',
  },
  {
    key: 'MH',
    name: 'Maharashtra',
  },
  {
    key: 'MN',
    name: 'Manipur',
  },
  {
    key: 'ML',
    name: 'Meghalaya',
  },
  {
    key: 'MZ',
    name: 'Mizoram',
  },
  {
    key: 'NL',
    name: 'Nagaland',
  },
  {
    key: 'OR',
    name: 'Odisha',
  },
  {
    key: 'PY',
    name: 'Puducherry',
  },
  {
    key: 'PB',
    name: 'Punjab',
  },
  {
    key: 'RJ',
    name: 'Rajasthan',
  },
  {
    key: 'SK',
    name: 'Sikkim',
  },
  {
    key: 'TN',
    name: 'Tamil Nadu',
  },
  {
    key: 'TS',
    name: 'Telangana',
  },
  {
    key: 'TR',
    name: 'Tripura',
  },
  {
    key: 'UK',
    name: 'Uttar Pradesh',
  },
  {
    key: 'UP',
    name: 'Uttarakhand',
  },
  {
    key: 'WB',
    name: 'West Bengal',
  },
]
const mobile10digit = (()=>{
  mobile.addEventListener('input', function(event) {
    const errorText = document.getElementById('dispErr');
    // const errorText = document.createElement('span')
    let errorMessageDisplayed = false;
    const inputText = event.target.value;
    if (inputText.length > 10) {
      event.target.value = inputText.slice(0, 10);
      if (!errorMessageDisplayed) {   
        // this.parentElement.appendChild(errorText)     
        // errorText.textContent = 'Please enter only 10 digits.';
        errorMessageDisplayed = true;
      }
    } else {
      // errorText.textContent = '';
      errorMessageDisplayed = false;
      // this.parentElement.removeChild(errorText)
    }
  });
})
mobile10digit()

// const numallow = 
function isNumber(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
  }
  return true;
}

// mobile.onkeydown = ( (e)=>{
//   if(e.keycode === 13 && this.value.length === 10){
//     e.preventDefault()
//   }
// })
for (var i = 0; i < stateName.length; i++) {
  // console.log(stateName[i].name)
  let optn = document.createElement('option')
  optn.value = stateName[i].name
  optn.innerHTML = stateName[i].name
  state.appendChild(optn)
}



submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  var regexAlpha = /^[a-zA-Z ]*$/
  var regexNum = /^[0-9]{10}$/
  var emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
  if (fname.value.length === 0 || !regexAlpha.test(fname.value)) {
    fname.focus()
    let loweCase = email.value
    loweCase.toLowerCase()
    fname.parentElement.classList.add('valerror')
    fname.style.borderColor = 'red'
    console.log('Numbers not allow')
  } else {
    fname.parentElement.classList.remove('valerror')
    fname.style.borderColor = '#e5e5e5'
  }

  if (lname.value.length === 0 || !regexAlpha.test(lname.value)) {
    let loweCase = email.value
    loweCase.toLowerCase()
    lname.parentElement.classList.add('valerror')
    lname.style.borderColor = 'red'
    console.log('Numbers not allow')
  } else {
    lname.parentElement.classList.remove('valerror')
    lname.style.borderColor = '#e5e5e5'
  }

  if (mobile.value.length === 0 
    || !isNumber(mobile)
     || regexAlpha.test(mobile.value)
    //  || !regexNum.test(mobile.value)
  ) {
    // mobile.focus()
    
    mobile.parentElement.classList.add('valerror')
    mobile.style.borderColor = 'red'
    // console.log('Numbers not allow')
  } else {
    mobile.parentElement.classList.remove('valerror')
    mobile.style.borderColor = '#e5e5e5'
  }

  if (mobile.value.length === 0 || emailRegex.test(email.value)) {
    email.parentElement.classList.add('valerror')
    email.style.borderColor = 'red'
    console.log('Email')
  } else {
    email.parentElement.classList.remove('valerror')
    email.style.borderColor = '#e5e5e5'
  }

  if (dob.value.length === 0 || regexAlpha.test(dob.value)) {
    dob.parentElement.classList.add('valerror')
    dob.style.borderColor = 'red'
  } else {
    dob.parentElement.classList.remove('valerror')
    dob.style.borderColor = '#e5e5e5'
  }

  if (
    fname.value.length === 0 ||
    lname.value.length === 0 ||
    dob.value.length === 0 ||
    email.value.length === 0 ||
    mobile.value.length === 0 ||
    email.value.length === 0 ||
    regexAlpha.test(mobile.value) ||
    !regexNum.test(mobile.value) ||
    gender.value == 0 || gender.value == 'Select the Gender' ||
    state.value == 0 || state.value == 'Select the State' ||
    anualIncome.value == 0 || anualIncome.value == 'Your Annual Income*'
  ) {
    condition.disabled = true
    condition.parentElement.classList.add('labelcolor')
  } else {
    condition.disabled = false
    condition.parentElement.classList.remove('labelcolor')
  }

  if (gender.value == 0 || gender.value == 'Select the Gender') {
    gender.parentElement.classList.add('valerror')
    gender.style.borderColor = 'red'
  } else {
    gender.parentElement.classList.remove('valerror')
    gender.style.borderColor = '#e5e5e5'
  }

  if (state.value == 0 || state.value == 'Select the State') {
    state.parentElement.classList.add('valerror')
    state.style.borderColor = 'red'
  } else {
    state.parentElement.classList.remove('valerror')
    state.style.borderColor = '#e5e5e5'
  }
  if (anualIncome.value == 0 || anualIncome.value == 'Your Annual Income Look Like*') {
    anualIncome.parentElement.classList.add('valerror')
    anualIncome.style.borderColor = 'red'
  } else {
    anualIncome.parentElement.classList.remove('valerror')
    anualIncome.style.borderColor = '#e5e5e5'
  }
  if (smoke.value == 0 || smoke.value == 'Do you Smoke') {
    smoke.parentElement.classList.add('valerror')
    smoke.style.borderColor = 'red'
  } else {
    smoke.parentElement.classList.remove('valerror')
    smoke.style.borderColor = '#e5e5e5'
  }
  // handleRadioClick()
  if (penEmpl.value.length === 0 || !regexAlpha.test(penEmpl.value)) { 
    // mobile.focus()
    penEmpl.parentElement.classList.add('valerror')
    penEmpl.style.borderColor = 'red'
  } else {
    penEmpl.parentElement.classList.remove('valerror')
    penEmpl.style.borderColor = '#e5e5e5'
  }
  if (numEployer.value.length === 0 || !regexAlpha.test(numEployer.value)) { 
    // mobile.focus()
    numEployer.parentElement.classList.add('valerror')
    numEployer.style.borderColor = 'red'
  } else {
    numEployer.parentElement.classList.remove('valerror')
    numEployer.style.borderColor = '#e5e5e5'
  }
})




const radioButtons = document.querySelectorAll('input[name="choice"]');
function handleRadioClick() {
  const shwBox = document.getElementById('choiceData');
  if(document.getElementById('yes').checked){
  shwBox.style.display = 'block';
  
}else{
  shwBox.style.display = 'none';  
}




  // document.getElementById('yes').checked ? shwBox.style.display = 'block' : shwBox.style.display = 'none';  
}

radioButtons.forEach(radio => {
  radio.addEventListener('click', handleRadioClick);
});

const leftsideHe = document.querySelector('.leftside').clientHeight;
const headerHe = document.querySelector('header').clientHeight;
let topOffHeight = leftsideHe - headerHe
let formHe = document.querySelector('.top-form-area').clientHeight
console.log("Height===>",topOffHeight);
$(window).scroll( function(){
  if($(this).scrollTop()  >= topOffHeight && $(this).scrollTop()  <= formHe +30){
    $('#submit').addClass('stick')
  }else{
    $('#submit').removeClass('stick')
  }
})

// $(function() { // called when page is refreshed
//   var scroll = $(window).scrollTop();

//   if (scroll > 728) {
//     $("#submit").addClass("scroll");
//   } else {
//     $("#submit").removeClass("scroll");
//   }
// });

