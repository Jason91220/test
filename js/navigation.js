tailwind.config = {
  theme: {
    extend: {
      colors: {
        "cyan-glow": "#0E19E1",
        "custom-red": "#C21919",
      },
    },
  },
};

// Script pour gérer la navigation et les liens actifs
document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner tous les liens de navigation
  const navLinks = document.querySelectorAll('nav a');
  
  // Fonction pour mettre à jour les liens actifs en fonction du défilement
  function updateActiveLinks() {
    const scrollPosition = window.scrollY;
    
    // Sélectionner toutes les sections avec des ID (pour la navigation)
    const sections = document.querySelectorAll('div[id], footer[id]');
    
    // Parcourir toutes les sections
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      // Vérifier si la section est visible dans la fenêtre
      if (scrollPosition >= sectionTop - 200 && 
          scrollPosition < sectionTop + sectionHeight - 200) {
        
        // Retirer la classe active de tous les liens
        navLinks.forEach(link => {
          link.classList.remove('text-cyan-glow');
          link.classList.add('text-white');
        });
        
        // Ajouter la classe active au lien correspondant à la section visible
        const activeLink = document.querySelector(`nav a[href="#${section.id}"]`);
        if (activeLink && !activeLink.classList.contains('border')) {
          activeLink.classList.remove('text-white');
          activeLink.classList.add('text-cyan-glow');
        }
      }
    });
    
    // Ajuster l'opacité du header en fonction du défilement
    const header = document.querySelector('header');
    if (header) {
      if (scrollPosition > 100) {
        header.classList.remove('bg-black/70');
        header.classList.add('bg-black/90');
      } else {
        header.classList.remove('bg-black/90');
        header.classList.add('bg-black/70');
      }
    }
  }
  
  // Mettre à jour les liens actifs lors du défilement
  window.addEventListener('scroll', updateActiveLinks);
  
  // Mettre à jour les liens actifs au chargement de la page
  updateActiveLinks();
  
  // Ajouter un défilement fluide pour les liens d'ancrage internes uniquement
  navLinks.forEach(link => {
    if (link.getAttribute('href').startsWith('#')) {
      link.addEventListener('click', function(e) {
        // Empêcher le comportement par défaut du lien
        e.preventDefault();
        
        // Obtenir l'ID de la cible à partir de l'attribut href
        const targetId = this.getAttribute('href');
        
        // Faire défiler jusqu'à la cible
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  });
  
  // Ajouter un défilement fluide pour tous les autres liens internes
  document.querySelectorAll('a[href^="#"]:not(nav a)').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});




  document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.querySelector('.menu-mobile');
    const mobileLinks = document.querySelectorAll('.menu-mobile a');

    // Toggle menu on burger click
    burgerBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        burgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  });


  // Script pour l'accordéon des mentions légales
  document.getElementById('mentionsBtn').addEventListener('click', function() {
    const content = document.getElementById('mentionsContent');
    const arrow = document.getElementById('mentionsArrow');
    
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      content.classList.add('animate-fade-in');
      arrow.classList.add('rotate-180');
    } else {
      content.classList.add('hidden');
      content.classList.remove('animate-fade-in');
      arrow.classList.remove('rotate-180');
    }
  });