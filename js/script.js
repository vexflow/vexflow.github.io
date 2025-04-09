const openButton = document.getElementById('open-sidebar-button')
const navLinks = document.getElementById('nav-links')
const overlay = document.getElementById('overlay')

const media = window.matchMedia("(width < 800px)")
// runs whenever width goes above/below 800 (point that navbar changes style)
media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e) {
  const isMobile = e.matches;

  if (!isMobile) {
    navLinks.classList.remove('show');
    overlay.style.display = 'none'
    navLinks.removeAttribute('inert');
    openButton.setAttribute('aria-expanded', 'false');
  } else if (!navLinks.classList.contains('show')) {
    navLinks.setAttribute('inert', '');
  }
}

function openSidebar(){
  navLinks.classList.add('show')
  overlay.style.display = 'block'
  openButton.setAttribute('aria-expanded', 'true')
  navLinks.removeAttribute('inert')
}

function closeSidebar(){
  navLinks.classList.remove('show')
  overlay.style.display = 'none'
  openButton.setAttribute('aria-expanded', 'false')
  navLinks.setAttribute('inert', '')
}

updateNavbar(media)