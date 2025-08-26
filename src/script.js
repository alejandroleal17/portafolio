// Sistema de idiomas
const languages = {
    es: {
        // Navegación
        'nav-inicio': 'Inicio',
        'nav-servicios': 'Servicios',
        'nav-tecnologias': 'Tecnologías',
        'nav-contacto': 'Contacto',
        
        // Hero
        'hero-title': 'Soluciones Tecnológicas Integrales',
        'hero-description': 'Especialista en desarrollo web, infraestructura cloud, seguridad informática y sistemas de visión artificial',
        'hero-btn-servicios': 'Ver Servicios',
        'hero-btn-contactar': 'Contactar',
        
        // Servicios
        'servicios-title': 'Servicios Profesionales',
        'desarrollo-web': 'Desarrollo Web',
        'desarrollo-desc': 'Sitios web responsivos, aplicaciones web y APIs RESTful',
        'bases-datos': 'Bases de Datos',
        'bases-desc': 'Diseño, implementación y optimización de bases de datos',
        'infraestructura': 'Infraestructura',
        'infra-desc': 'Administración de servidores Windows/Linux y servicios cloud',
        'vision-artificial': 'Visión Artificial',
        'vision-desc': 'Sistemas de cámaras Hikvision y análisis de imágenes',
        'ciberseguridad': 'Ciberseguridad',
        'cyber-desc': 'Auditorías de seguridad, pentesting y protección de datos',
        'devops-cloud': 'DevOps & Cloud',
        'devops-desc': 'Automatización, CI/CD y gestión de infraestructura como código',
        
        // Tecnologías
        'tech-title': 'Stack Tecnológico',
        'frontend': 'Frontend',
        'backend': 'Backend',
        'databases': 'Bases de Datos',
        'infrastructure': 'Infraestructura',
        
        // Contacto
        'contacto-title': 'Contacto',
        'nombre': 'Nombre',
        'email': 'Email',
        'ubicacion': 'Ubicación',
        'ubicacion-desc': 'Disponible para proyectos remotos',
        'mensaje': 'Mensaje',
        'enviar': 'Enviar Mensaje',
        
        // Footer
        'derechos': 'Todos los derechos reservados'
    },
    
    en: {
        // Navigation
        'nav-inicio': 'Home',
        'nav-servicios': 'Services',
        'nav-tecnologias': 'Technologies',
        'nav-contacto': 'Contact',
        
        // Hero
        'hero-title': 'Comprehensive Technology Solutions',
        'hero-description': 'Specialist in web development, cloud infrastructure, cybersecurity and computer vision systems',
        'hero-btn-servicios': 'View Services',
        'hero-btn-contactar': 'Contact',
        
        // Services
        'servicios-title': 'Professional Services',
        'desarrollo-web': 'Web Development',
        'desarrollo-desc': 'Responsive websites, web applications and RESTful APIs',
        'bases-datos': 'Databases',
        'bases-desc': 'Database design, implementation and optimization',
        'infraestructura': 'Infrastructure',
        'infra-desc': 'Windows/Linux server administration and cloud services',
        'vision-artificial': 'Computer Vision',
        'vision-desc': 'Hikvision camera systems and image analysis',
        'ciberseguridad': 'Cybersecurity',
        'cyber-desc': 'Security audits, pentesting and data protection',
        'devops-cloud': 'DevOps & Cloud',
        'devops-desc': 'Automation, CI/CD and infrastructure as code',
        
        // Technologies
        'tech-title': 'Technology Stack',
        'frontend': 'Frontend',
        'backend': 'Backend',
        'databases': 'Databases',
        'infrastructure': 'Infrastructure',
        
        // Contact
        'contacto-title': 'Contact',
        'nombre': 'Name',
        'email': 'Email',
        'ubicacion': 'Location',
        'ubicacion-desc': 'Available for remote projects',
        'mensaje': 'Message',
        'enviar': 'Send Message',
        
        // Footer
        'derechos': 'All rights reserved'
    }
};

// Función para cambiar idioma
function changeLanguage(lang) {
    // Actualizar botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Actualizar contenido
    document.querySelectorAll('[data-es], [data-en]').forEach(element => {
        if (element.dataset[lang]) {
            element.textContent = element.dataset[lang];
        }
    });
    
    // Actualizar placeholders
    document.querySelectorAll('[data-es-placeholder], [data-en-placeholder]').forEach(element => {
        if (element.dataset[`${lang}-placeholder`]) {
            element.placeholder = element.dataset[`${lang}-placeholder`];
        }
    });
    
    // Actualizar atributo lang del HTML
    document.documentElement.lang = lang;
    
    // Guardar preferencia en localStorage
    localStorage.setItem('preferred-language', lang);
}

// Función para navegación suave
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Función para manejar el formulario de contacto
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Validación básica
    if (!name || !email || !message) {
        alert('Por favor completa todos los campos / Please fill all fields');
        return;
    }
    
    // Simular envío (aquí puedes integrar con un servicio real)
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Enviando... / Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Mensaje enviado con éxito! / Message sent successfully!');
        event.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Función para animar elementos al hacer scroll
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observar todas las tarjetas y secciones
    document.querySelectorAll('.service-card, .tech-category, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Función para header transparente al hacer scroll
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    const scrollTop = window.pageYOffset;
    
    if (scrollTop > 100) {
        header.style.background = 'rgba(15, 23, 42, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
        header.style.boxShadow = 'none';
    }
}

// Función para mostrar/ocultar menú móvil
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portafolio de Alejandro Leal cargado correctamente');
    
    // Cargar idioma preferido
    const savedLang = localStorage.getItem('preferred-language') || 'es';
    changeLanguage(savedLang);
    
    // Event listeners para cambio de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            changeLanguage(btn.dataset.lang);
        });
    });
    
    // Event listeners para navegación suave
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            smoothScroll(target);
        });
    });
    
    // Event listener para formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Event listener para scroll del header
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Inicializar animaciones
    animateOnScroll();
    
    // Event listener para botones del hero
    document.querySelectorAll('.hero-buttons .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = btn.getAttribute('href');
            smoothScroll(target);
        });
    });
    
    // Añadir efecto hover a las tarjetas de servicio
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Añadir efecto hover a los elementos de tecnología
    document.querySelectorAll('.tech-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });
    
    // Función para mostrar notificación de copiado de email
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            e.preventDefault();
            const email = 'alejandro_leal17@hotmail.com';
            navigator.clipboard.writeText(email).then(() => {
                // Crear notificación temporal
                const notification = document.createElement('div');
                notification.textContent = 'Email copiado al portapapeles / Email copied to clipboard';
                notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: var(--success-color);
                    color: white;
                    padding: 1rem 1.5rem;
                    border-radius: var(--border-radius);
                    z-index: 10000;
                    font-weight: 500;
                    box-shadow: var(--shadow-lg);
                `;
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.remove();
                }, 3000);
            });
        });
    }
});

// Función para manejar el responsive del menú
function handleResponsiveMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Cerrar menú al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });
}

// Event listener para resize de ventana
window.addEventListener('resize', handleResponsiveMenu);

// Función para añadir efecto de typing al título del hero
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Aplicar efecto de typing cuando se carga la página
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const currentLang = document.documentElement.lang;
        const text = languages[currentLang]['hero-title'];
        typeWriter(heroTitle, text, 80);
    }
});
