

// bg header
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');

  // Function to add or remove class based on scroll position
  const checkScroll = () => {
    if (window.scrollY > 0) {
      header.classList.remove('transparent');
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      header.classList.add('transparent');
    }
  };

  // Initial check
  checkScroll();

  // Check scroll position on scroll event
  window.addEventListener('scroll', checkScroll);
});
// -------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  var nav = document.querySelector('.nav');
  var menuIcon = document.querySelector('.menu img');

  function toggleNav() {
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      nav.classList.add('inactive');
      menuIcon.src = 'image/icon/menu.png';
      
      // Ensure the element is hidden after the animation ends
      setTimeout(() => {
        nav.style.visibility = 'hidden';
      }, 500); // Match the transition duration
    } else {
      nav.classList.remove('inactive');
      nav.classList.add('active');
      nav.style.visibility = 'visible';
      menuIcon.src = 'image/icon/close.png';
    }
  }

  document.querySelector('.menu').addEventListener('click', toggleNav);
});


// ------------------------------------------------

//  animasi ketik
 const mengetik = new Typed(".typing", {
    strings : [ "My Skils", "Front End Developer", "Programing", "Designer"],
    typeSpeed : 100,
    backSpeed : 50,
    loop : true,
  });
// --------------------------------------------------------------------------
 

//   animasi motion text home
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector('.text',);
    
    // Function to add the 'visible' class
    const showTextElement = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };
  
    // Create an IntersectionObserver
    const observer = new IntersectionObserver(showTextElement, {
      threshold: 0.1 // Trigger when 10% of the element is in the viewport
    });
  
    // Start observing the text element
    observer.observe(textElement);
  });
// ------------------------------------------------------------------------
  

//   animasi motion profile home
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector('.profile',);
    
    // Function to add the 'visible' class
    const showTextElement = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };
  
    // Create an IntersectionObserver
    const observer = new IntersectionObserver(showTextElement, {
      threshold: 0.1 // Trigger when 10% of the element is in the viewport
    });
  
    // Start observing the text element
    observer.observe(textElement);
  });
// -----------------------------------------------------------------------

// ABOUT
document.addEventListener("DOMContentLoaded", function () {
  const aboutmeElement = document.querySelector('.aboutme');
  const ppElement = document.querySelector('.pp');
  const myinfoElement = document.querySelector('.my-info');

  // Function to add the 'visible' class to aboutmeElement
  const showAboutmeElement = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Set timeout to start ppElement animation after 2 seconds
        setTimeout(() => {
          ppElement.classList.add('visible');
          // Set timeout to start myinfoElement animation after ppElement animation ends
          setTimeout(() => {
            myinfoElement.classList.add('visible');
          }, 1000); // 1000 milliseconds = 1 second
        }, 1000); // 1000 milliseconds = 1 second
      } else {
        entry.target.classList.remove('visible');
      }
    });
  };

  // Create an IntersectionObserver for aboutmeElement
  const observerAboutme = new IntersectionObserver(showAboutmeElement, {
    threshold: 0.1 // Trigger when 10% of the element is in the viewport
  });

  // Start observing the .aboutme element
  observerAboutme.observe(aboutmeElement);

  // Function to add the 'visible' class to ppElement
  const showPpElement = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  };

  // Create an IntersectionObserver for ppElement
  const observerPp = new IntersectionObserver(showPpElement, {
    threshold: 0.1 // Trigger when 10% of the element is in the viewport
  });

  // Start observing the .pp element
  observerPp.observe(ppElement);

  // Function to add the 'visible' class to myinfoElement when it enters the viewport
  const showMyinfoElement = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  };

  // Create an IntersectionObserver for myinfoElement
  const observerMyinfo = new IntersectionObserver(showMyinfoElement, {
    threshold: 0.1 // Trigger when 10% of the element is in the viewport
  });

  // Start observing the .my-info element
  observerMyinfo.observe(myinfoElement);
});


// baca selengkapnya
document.addEventListener("DOMContentLoaded", function() {
  const readMoreBtn = document.querySelector('.read-more-btn');
  const shortText = document.querySelector('.short-text');
  const fullText = document.querySelector('.full-text');

  readMoreBtn.addEventListener('click', function() {
    // Toggle kelas 'hidden' pada teks lengkap
    fullText.classList.toggle('hidden');
    // Toggle teks tombol
    if (readMoreBtn.textContent === 'Baca Selengkapnya') {
      readMoreBtn.textContent = 'Tampilkan Lebih Sedikit';
    } else {
      readMoreBtn.textContent = 'Baca Selengkapnya';
    }
  });
});

// ------------------------------------------------------------------------
