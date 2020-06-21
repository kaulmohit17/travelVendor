// making the toggle btn functional
const toggleBtn = document.querySelector(".toggle-btn");
const linkContainer = document.querySelector(".link-container");
const links = document.querySelector(".links");
const linkContainerHeight = linkContainer.getBoundingClientRect().height;

// inserting dynamic copyright date
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

// adding links dynamically
toggleBtn.addEventListener("click", function () {
  // linkContainer.classList.toggle("show-links");

  
  const linksHeight = links.getBoundingClientRect().height;
  if (linkContainerHeight === 0) {
    linkContainer.style.height = `${linksHeight}px`;
  } else {
    linkContainer.style.height = 0;
  }
});



const navContainer = document.querySelector(".nav-container");
const navContainerHeight = navContainer.getBoundingClientRect().height;
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {

  // making the navbar fixed
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navContainerHeight) {
    navContainer.classList.add("nav-toggle");
  } else {
    navContainer.classList.remove("nav-toggle");
  }

  // making top-link visible 
  const header = document.querySelector(".header-container");
  const headerHeight = header.getBoundingClientRect().height;
  if(scrollHeight > headerHeight){
    topLink.classList.add("top-link-toggle");
  }else{
    topLink.classList.remove("top-link-toggle"); 
  }
});


// smoth scroll

const scrollLink = document.querySelectorAll(".scroll-link");

scrollLink.forEach(function(link){
  link.addEventListener("click", function(e){
    e.preventDefault(); //prevent default behavior
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const fixedNav = navContainer.classList.contains("nav-toggle");
    let elementPosition = element.offsetTop - navContainerHeight; // offsettop will give us the position of the element from the top in pixels
    // console.log("the element position is " + elementPosition);
    console.log("the offset value for the element is " + elementPosition)

    if(!fixedNav){
      elementPosition = elementPosition - navContainerHeight;
    }
    // if(navContainerHeight > 150){
    //   elementPosition = elementPosition - linkContainerHeight;
    // }
    window.scrollTo({
      left: 0, top: elementPosition
    });
    linkContainer.style.height = 0;
  });
});

