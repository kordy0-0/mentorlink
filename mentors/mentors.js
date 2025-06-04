// Mobile Navigation Toggle
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Mentor filtering functionality
const filterButtons = document.querySelectorAll(".filter-btn")
const mentorCards = document.querySelectorAll(".mentor-card")
const searchInput = document.getElementById("searchInput")

// Filter by category
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"))
    // Add active class to clicked button
    button.classList.add("active")

    const filterValue = button.getAttribute("data-filter")

    mentorCards.forEach((card) => {
      if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
        card.classList.remove("hidden")
      } else {
        card.classList.add("hidden")
      }
    })
  })
})

// Search functionality
searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase()

  mentorCards.forEach((card) => {
    const mentorName = card.querySelector("h3").textContent.toLowerCase()
    const mentorTitle = card.querySelector(".mentor-title").textContent.toLowerCase()
    const mentorCompany = card.querySelector(".mentor-company").textContent.toLowerCase()
    const mentorSkills = Array.from(card.querySelectorAll(".skill-tag"))
      .map((skill) => skill.textContent.toLowerCase())
      .join(" ")

    const searchContent = `${mentorName} ${mentorTitle} ${mentorCompany} ${mentorSkills}`

    if (searchContent.includes(searchTerm)) {
      card.classList.remove("hidden")
    } else {
      card.classList.add("hidden")
    }
  })
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe elements for fade-in animation
document.querySelectorAll(".mentor-card, .service-card, .about-text, .contact-form").forEach((el) => {
  el.classList.add("fade-in")
  observer.observe(el)
})

// Form submission
document.querySelector(".contact-form form").addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Thank you for your message! We'll get back to you soon.")
})

// Newsletter subscription
document.querySelector(".newsletter-form").addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Thank you for subscribing to our newsletter!")
})

// Connect button functionality
document.querySelectorAll(".mentor-actions .btn-primary").forEach((button) => {
  button.addEventListener("click", (e) => {
    const mentorName = e.target.closest(".mentor-card").querySelector("h3").textContent
    alert(`Connecting you with ${mentorName}! You'll receive a confirmation email shortly.`)
  })
})

// View Profile button functionality
document.querySelectorAll(".mentor-actions .btn-secondary").forEach((button) => {
  button.addEventListener("click", (e) => {
    const mentorName = e.target.closest(".mentor-card").querySelector("h3").textContent
    alert(`Opening ${mentorName}'s detailed profile...`)
  })
})
