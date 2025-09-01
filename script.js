document.addEventListener("DOMContentLoaded", () => {
    // GSAP ScrollTrigger setup
    gsap.registerPlugin(ScrollTrigger)
  
    // Custom cursor
    const cursor = document.querySelector(".cursor")
    const cursorBlur = document.querySelector(".cursor-blur")
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
      cursorBlur.style.left = e.clientX + "px"
      cursorBlur.style.top = e.clientY + "px"
    })
  
    document.addEventListener("click", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(0.8)"
      setTimeout(() => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)"
      }, 100)
    })
  
    // Mobile navigation
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll(".nav-links li")
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active")
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ""
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
      })
  
      burger.classList.toggle("toggle")
    })
  
    // Close mobile menu when a link is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-active")
        burger.classList.remove("toggle")
        navLinks.forEach((link) => {
          link.style.animation = ""
        })
      })
    })
  
    // Handle resize events
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        nav.classList.remove("nav-active")
        burger.classList.remove("toggle")
        navLinks.forEach((link) => {
          link.style.animation = ""
        })
      }
    })
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Animate skill bars
    const skillBars = document.querySelectorAll(".skill-bar")
    skillBars.forEach((bar) => {
      const percentage = bar.getAttribute("data-percentage")
      gsap.to(bar.querySelector(".skill-progress"), {
        width: `${percentage}%`,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bar,
          start: "top 80%",
        },
      })
    })
  
    // Animate project cards
    gsap.utils.toArray(".project-card").forEach((card) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      })
    })
  
    // Animate timeline items
    gsap.utils.toArray(".timeline-item").forEach((item) => {
      gsap.from(item, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
        },
      })
    })
  
    // Parallax effect for hero background shapes
    gsap.to(".circle", {
      y: "30%",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
  
    gsap.to(".square", {
      y: "-30%",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
  
    gsap.to(".triangle", {
      y: "20%",
      rotation: 180,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
  
    // Form submission
    const contactForm = document.getElementById("contact-form")
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // Add your form submission logic here
      alert("Thank you for your message! I will get back to you soon.")
      contactForm.reset()
    })
  })
  
  