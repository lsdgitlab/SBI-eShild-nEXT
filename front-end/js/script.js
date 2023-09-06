$(document).ready(function () {
  $('.hamburger').on('click', function () {
    $(this).toggleClass('menu-opened')
    $('.menu').toggleClass('menu-opened')
  })

  $('.cards .content .read-more').click(function () {
    $('.cards .content, .cards .content ul, .cards .content ul li').addClass(
      'show'
    )
    $('.read-more').hide()
    $('.read-less').show()
  })

  $('.cards .content .read-less').click(function () {
    $('.cards .content, .cards .content ul, .cards .content ul li').removeClass(
      'show'
    )
    $('.read-less').hide()
    $('.read-more').show()
  })

  $(document).on('click', '.tabs li', function () {
    $('.tabs li').removeClass('active')
    $('ul').toggleClass('expanded')
    $(this).addClass('active')
    var tab_id = $(this).attr('data-tab')
    $('.tab-content').removeClass('current')
    $(this).addClass('current')
    $('#' + tab_id).addClass('current')
  })
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
  // new Element
  const creteElement = document.createElement('b')
  const mobile = document.getElementById('mobile')
  mobile.addEventListener('input', function (event) {
    const inputText = event.target.value
    if (inputText.length > 10) {
      event.target.value = inputText.slice(0, 10)
    }
    var alpha = /[a-zA-Z]/gi
    if (alpha) {
      mobile.value = mobile.value.replace(alpha, '')
      // setErrorFor(mobile, 'Please Enter Numbers Only')
    }
  })

  const state = document.getElementById('state')
  stateName.forEach(function (stateObj) {
    let optn = document.createElement('option')
    optn.value = stateObj.name
    optn.innerHTML = stateObj.name
    state.appendChild(optn)
  })
  const tncMsg = document.getElementById('tnc-msg')
  condition.addEventListener('change', (event) => {
    if (event.target.checked) {
      tncMsg.style.display = 'none'
      tncMsg.textContent = ''
      // alert('sss')
    } else {
      tncMsg.style.display = 'block';
      tncMsg.textContent = 'Please Accept Terms'
    }
  })

  const submitBtn = document.getElementById('submit')
  submitBtn.addEventListener('click', function (e) {
    e.preventDefault()

    const fname = document.getElementById('fname')
    const lname = document.getElementById('lname')
    const mobile = document.getElementById('mobile')
    const email = document.getElementById('email')
    const dob = document.getElementById('dob')
    const gender = document.getElementById('gender')
    const state = document.getElementById('state')
    const anualIncome = document.getElementById('anualIncome')
    const smoke = document.getElementById('smoke')
    const penEmpl = document.getElementById('penemployee')
    const numEployer = document.getElementById('nemployer')
    const condition = document.getElementById('condition')

    const regexAlpha = /^[a-zA-Z ]*$/
    const regexNum = /^[0-9]{10}$/
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const validateField = (field, regex) => {
      if (field.value.length === 0 || !regex.test(field.value)) {
        field.parentElement.classList.add('valerror')
        field.style.borderColor = 'red'
        return false
      } else {
        field.parentElement.classList.remove('valerror')
        field.style.borderColor = '#e5e5e5'
        return true
      }
    }

    const validateDropdown = (field) => {
      if (
        field.value === '0' ||
        field.value === 'Select the ' + field.name ||
        field.value === 'Your Annual ' + field.name ||
        field.value === 'Do you Smoke' ||
        field.value === 'Date Of Birth*'
      ) {
        field.parentElement.classList.add('valerror')
        field.style.borderColor = 'red'
        return false
      } else {
        field.parentElement.classList.remove('valerror')
        field.style.borderColor = '#e5e5e5'
        return true
      }
    }

    const validateRadio = (field) => {
      if (field.value === '0' || field.value === 'Do you ' + field.name) {
        field.parentElement.classList.add('valerror')
        field.style.borderColor = 'red'
        return false
      } else {
        field.parentElement.classList.remove('valerror')
        field.style.borderColor = '#e5e5e5'
        return true
      }
    }
   
    // if (!isValid) {
    //   condition.parentElement.classList.add('labelcolor')
    //   // condition.parentElement.appendChild(creteElement)
    //   tncMsg.style.display = 'none'
    //   tncMsg.textContent = ''
    // } else {
    //   condition.parentElement.classList.remove('labelcolor')
    //   if (!condition.checked) {
    //     // Only show the message if the condition is not already checked
    //     tncMsg.style.display = 'block'
    //     tncMsg.textContent = 'Please Accept Terms'
    //   }
    // }


    const isValid =
    // condition.disabled = !isValid
      validateField(fname, regexAlpha) &&
      validateField(lname, regexAlpha) &&
      validateField(mobile, regexNum) &&
      validateField(email, emailRegex) &&
      validateDropdown(dob) &&
      validateDropdown(gender) &&
      validateDropdown(anualIncome) &&
      validateDropdown(smoke) &&
      validateDropdown(state)
    // &&
    // validateField(penEmpl, regexAlpha) &&
    // validateField(numEployer, regexAlpha)

    
  })

  const radioButtons = document.querySelectorAll('input[name="choice"]')
  radioButtons.forEach(function (radio) {
    radio.addEventListener('click', function () {
      const shwBox = document.getElementById('choiceData')
      // shwBox.style.display = radio.id === 'yes' ? 'block' : 'none';

      if (radio.id === 'yes') {
        shwBox.style.display = 'block'
        validateField(penEmpl, regexAlpha) &&
          validateField(numEployer, regexAlpha)

        // penemployee.style.display = 'block'
        // nemployer.style.display = 'block'
      } else {
        shwBox.style.display = 'none'

        // penemployee.style.display = 'none'
        // nemployer.style.display = 'none'
      }
    })
  })
  const leftsideHe = $('.leftside').height()
  const headerHe = $('header').height()
  const topOffHeight = leftsideHe - headerHe
  const formHe = $('.top-form-area').height()
  $(window).scroll(function () {
    if (
      $(this).scrollTop() >= topOffHeight &&
      $(this).scrollTop() <= formHe + 30
    ) {
      $('#submit').addClass('stick')
    } else {
      $('#submit').removeClass('stick')
    }
  })
})


$(document).ready(function(){
  $('.desclaimer').hide();
  $('.desc-link').click(function(){
    $('.desclaimer').show();
  });
});