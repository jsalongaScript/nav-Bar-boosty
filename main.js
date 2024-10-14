function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

function closeMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.remove('active');
}


// Change the main image when a thumbnail is clicked
function changeImage(element) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = element.src;
}

// Select color option
function selectColor(color) {
    const selectedColor = document.getElementById('selected-color');
    selectedColor.textContent = color;
}

// Select size option
function selectSize(size) {
    const selectedSize = document.getElementById('selected-size');
    selectedSize.textContent = size;
}

//addtocart
function addToCart() {
    // Get the selected product option
    const selectedPair = document.querySelector('input[name="pair-selection"]:checked');

    if (!selectedPair) {
        alert('Please select a pair option.');
        return;
    }

    // Get the value of the selected option (e.g., 1 Pair, 2 Pairs, etc.)
    const selectedValue = selectedPair.value;

    // Prepare an object to store the selected product details
    let product = {
        selection: selectedValue,
        price: '',
        colors: [],
        sizes: []
    };

    // Depending on the selection, gather colors and sizes
    if (selectedValue === "1 Pair") {
        product.price = "$39.99";
    } else if (selectedValue === "2 Pairs") {
        product.price = "$39.99 (Buy 1 Get 1 Free)";
        product.colors.push(document.getElementById('color1-2').value);
        product.colors.push(document.getElementById('color2-2').value);
        product.sizes.push(document.getElementById('size1-2').value);
        product.sizes.push(document.getElementById('size2-2').value);
    } else if (selectedValue === "3 Pairs") {
        product.price = "$54.99 (Buy 2 Get 1 Free)";
        product.colors.push(document.getElementById('color1-3').value);
        product.colors.push(document.getElementById('color2-3').value);
        product.colors.push(document.getElementById('color3-3').value);
        product.sizes.push(document.getElementById('size1-3').value);
        product.sizes.push(document.getElementById('size2-3').value);
        product.sizes.push(document.getElementById('size3-3').value);
    }

    // Store the product in the cart (use localStorage or sessionStorage)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);

    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Display success message
    alert('Product added to cart successfully!');

    // Log the current cart for debugging purposes
    console.log(cart);
}


/*size chart img and togglr */
function toggleImage() {
    var image = document.getElementById('size-chart-image');
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
}

/*sliderev*/
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("review-slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

//scrollrevealpart1
const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
  };

ScrollReveal().reveal("before-after img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal("before_after h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".before_after h2", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".before_after h3", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".before_after p", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal("scroll_reveal", {
    ...scrollRevealOption,
    delay: 500,
});

//scrollrevealtest2
document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.scroll_reveal', {
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: true
    });
});

//feedbackstats
document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        const progressCircle = circle.querySelector('.progress');
        const radius = progressCircle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        // Set the strokeDasharray to the circumference
        progressCircle.style.strokeDasharray = `${circumference}`;
        
        // Calculate the stroke offset based on percentage
        const offset = circumference - (percentage / 100) * circumference;
        
        // Animate the circle strokeDashoffset to reveal progress
        progressCircle.style.strokeDashoffset = offset;
    });
});

//vi.gall
document.addEventListener('DOMContentLoaded', () => {
    console.log('Customer proof section loaded');
});

//vid2
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * (slides[0].offsetWidth + 20); // 20px gap
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentIndex);
});

//faq
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const answer = item.querySelector('.faq-answer');
      const plus = question.querySelector('.plus');
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.padding = '0 15px';
        plus.textContent = '+';
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.padding = '15px';
        plus.textContent = '-';
      }
    });
  });
});

