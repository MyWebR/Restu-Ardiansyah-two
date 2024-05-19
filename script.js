

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

// nav hover otomatis

// jika ingin scrol navbar otomatis haous tag komentar pada code di bawah
// document.addEventListener("DOMContentLoaded", function () {
//   const navLinks = document.querySelectorAll('.nav a');

//   // Function to toggle active class based on scroll position
//   const toggleActiveClass = () => {
//     const scrollPosition = window.scrollY;

//     // Add or remove active class based on scroll position
//     navLinks.forEach(link => {
//       const sectionId = link.getAttribute('href').substring(1);
//       const section = document.getElementById(sectionId);
//       if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
//         link.classList.add('active');
//       } else {
//         link.classList.remove('active');
//       }
//     });
//   };

//   // Add scroll event listener
//   window.addEventListener('scroll', toggleActiveClass);

//   // Add hover event listener
//   navLinks.forEach(link => {
//     link.addEventListener('mouseenter', () => {
//       link.classList.add('hover');
//     });
//     link.addEventListener('mouseleave', () => {
//       link.classList.remove('hover');
//     });
//   });
// });
// -------------------------------------------------------


// Toggle navigation menu (existing code)
function toggleNav() {
  var nav = document.querySelector('.nav');
  var menuIcon = document.querySelector('.menu img');
  
  if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      menuIcon.src = 'image/icon/menu.png';
  } else {
      nav.classList.add('active');
      menuIcon.src = 'image/icon/close.png';
  }
}
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


// blur gambar pada class blog
document.addEventListener("DOMContentLoaded", function () {
  const imgBlog1 = document.querySelector('.img-blog-1');
  const imgBlog2_1 = document.querySelector('.img-blog-2-1');
  const imgBlog2_2 = document.querySelector('.img-blog-2-2');
  const imgBlog2_3 = document.querySelector('.img-blog-2-3');

  // Function to add the 'img-blur' class
  const blurImage = (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        entry.target.classList.add('img-blur');
      } else {
        entry.target.classList.remove('img-blur');
      }
    });
  };

  // Create an IntersectionObserver for each image element
  const observer1 = new IntersectionObserver(blurImage, { threshold: 0 });
  const observer2_1 = new IntersectionObserver(blurImage, { threshold: 0 });
  const observer2_2 = new IntersectionObserver(blurImage, { threshold: 0 });
  const observer2_3 = new IntersectionObserver(blurImage, { threshold: 0 });

  // Start observing the image elements
  observer1.observe(imgBlog1);
  observer2_1.observe(imgBlog2_1);
  observer2_2.observe(imgBlog2_2);
  observer2_3.observe(imgBlog2_3);
});

// ------------------------------------------------------------


// efek blog 1 ke 2
document.addEventListener("DOMContentLoaded", function () {
  const contentBlog2 = document.querySelector('.content-blog-2');
  
  // Function to add the 'visible' class
  const showContentBlog2 = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  };

  // Create an IntersectionObserver
  const observer = new IntersectionObserver(showContentBlog2, {
    threshold: 0.1 // Trigger when 10% of the element is in the viewport
  });

  // Start observing the content-blog-2 element
  observer.observe(contentBlog2);
});

// ------------------------------------------------------------------------


//popup-1
document.addEventListener("DOMContentLoaded", function () {
  const openPopup = document.querySelector('.open-popup-1');
  const popup = document.querySelector('.popup-project-1');
  const closePopup = document.querySelector('.close-popup-1');
  const allElements = document.querySelectorAll('body > *:not(.popup-project-1)');

  openPopup.addEventListener('click', function (event) {
    event.preventDefault();
    popup.style.display = 'flex';
    allElements.forEach(element => {
      element.classList.add('blur-background');
    });
  });

  closePopup.addEventListener('click', function () {
    popup.style.display = 'none';
    allElements.forEach(element => {
      element.classList.remove('blur-background');
    });
  });
});
// -------------------------------------------------------------------------


//popup-2
document.addEventListener("DOMContentLoaded", function () {
  const openPopup2 = document.querySelector('.open-popup-2');
  const popup2 = document.querySelector('.popup-project-2');
  const closePopup2 = document.querySelector('.close-popup-2');
  const allElements2 = document.querySelectorAll('body > *:not(.popup-project-2)');

  openPopup2.addEventListener('click', function (event) {
    event.preventDefault();
    popup2.style.display = 'flex';
    allElements2.forEach(element => {
      element.classList.add('blur-background');
    });
  });

  closePopup2.addEventListener('click', function () {
    popup2.style.display = 'none';
    allElements2.forEach(element => {
      element.classList.remove('blur-background');
    });
  });
});
// -------------------------------------------------------------------------


//popup-3
document.addEventListener("DOMContentLoaded", function () {
  const openPopup3 = document.querySelector('.open-popup-3');
  const popup3 = document.querySelector('.popup-project-3');
  const closePopup3 = document.querySelector('.close-popup-3');
  const allElements3 = document.querySelectorAll('body > *:not(.popup-project-3)');

  openPopup3.addEventListener('click', function (event) {
    event.preventDefault();
    popup3.style.display = 'flex';
    allElements3.forEach(element => {
      element.classList.add('blur-background');
    });
  });

  closePopup3.addEventListener('click', function () {
    popup3.style.display = 'none';
    allElements3.forEach(element => {
      element.classList.remove('blur-background');
    });
  });
});
// -------------------------------------------------------------------------


//popup-2
document.addEventListener("DOMContentLoaded", function () {
  const openPopup4 = document.querySelector('.open-popup-4');
  const popup4 = document.querySelector('.popup-project-4');
  const closePopup4 = document.querySelector('.close-popup-4');
  const allElements4 = document.querySelectorAll('body > *:not(.popup-project-4)');

  openPopup4.addEventListener('click', function (event) {
    event.preventDefault();
    popup4.style.display = 'flex';
    allElements4.forEach(element => {
      element.classList.add('blur-background');
    });
  });

  closePopup4.addEventListener('click', function () {
    popup4.style.display = 'none';
    allElements4.forEach(element => {
      element.classList.remove('blur-background');
    });
  });
});
// -------------------------------------------------------------------------