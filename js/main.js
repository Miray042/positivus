
// Animation - Accordion

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.process__accordion');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.process__accordion_control');
      const content = self.querySelector('.process__accordion_content');

      self.classList.toggle('open');

      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;

      }
    });
  });

});

// Change - Color 


function toggleColor(element) {
  element.classList.toggle('clicked');
}


//  Slider 

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2500,
  },
});


// Valodation 

function validation(form) {

  function removeError(input) {
    const parent = input.parentNode;

    if (parent.classList.contains('error')) {
      parent.querySelector('.error-label').remove()
      parent.classList.remove('error')
    }
  }


  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('label')

    errorLabel.classList.add('error-label')
    errorLabel.textContent = text

    parent.append(errorLabel)
    parent.classList.add('error')
  }

  let result = true;

  const allInputs = form.querySelectorAll('input');
  for (const input of allInputs) {
    removeError(input)

    if (input.dataset.required == "true") {
      if (input.value == "") {
        createError(input, 'Error when filling out the form')
        result = false
      }
    }
  }

  return result
}

document.getElementById('add-form').addEventListener('submit', function (event) {
  event.preventDefault()

  if (validation(this) == true) {
    swal({
      title: "Success !",
      text: "Your message has been sent",
      icon: "success",
      button: "OK",
    });


    // alert('success') - стандартный Алерт браузера 
  }
})


// Burger 

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function(){
    document.querySelector(".header").classList.toggle("open-menu")
  })
})