# 👨‍💻 Samuel Vallejo Morales — Portafolio Profesional

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Responsive](https://img.shields.io/badge/Responsive-100%25-brightgreen?style=for-the-badge)

Portafolio web personal y hoja de vida interactiva. Diseñado como un sitio estático de alto rendimiento, bilingüe (Español / Inglés) y estructurado bajo los principios del **Minimalismo Editorial** monocromático. 

🔗 **[Ver Demo en Vivo](https://sxmuelvm.github.io/portafolio/)** 

---

## 👤 Sobre mí

Soy **Samuel Felipe Vallejo Morales**, estudiante de Tecnología Superior en Administración de Infraestructura y Plataformas Tecnológicas en la Universidad de Cuenca, con formación en sistemas operativos (Linux y Windows Server), redes, programación en Python y desarrollo web, además de certificaciones complementarias de Cisco Networking Academy. Busco iniciar mi carrera profesional como soporte técnico, programador junior o asistente de administración de sistemas, aportando disciplina, capacidad de aprendizaje autónomo y ganas de asumir nuevos retos.

---

## ✨ Características del Proyecto

* **100% Estático y Nativo:** Desarrollado puramente en HTML5, CSS3 y JavaScript moderno, sin dependencias de frameworks ni procesos de compilación (build steps), garantizando tiempos de carga ultrarrápidos.
* **Arquitectura Bilingüe Independiente:** Sistema de internacionalización mediante estructura de directorios separada (`/` para Español y `/eng/` para Inglés) con un selector de idiomas funcional que mantiene la coherencia de navegación.
* **Componentes Modulares:** Cada sección (Proyectos, Habilidades, Formación) funciona como un módulo independiente con sus propias reglas de estilo y scripts, optimizando el renderizado.
* **Recursos Centralizados:** Gestión eficiente de `assets`, donde ambas versiones de idiomas consumen los mismos documentos (`/docs`) e imágenes (`/img`) desde la raíz, evitando redundancia de datos.
* **Diseño Responsivo:** Adaptación fluida a dispositivos móviles con un menú de navegación tipo *hamburger* personalizado.

---

## 🎨 Diseño e Identidad Visual

El proyecto adopta un enfoque de **Minimalismo Editorial**:

* **Tipografía:** Combinación contrastante de `Fraunces` (Serif con cursiva elegante para titulares) y `Work Sans` (Grotesca para el cuerpo de texto y UI), alejándose de combinaciones web genéricas.
* **Paleta Monocromática:** 
  * ⬛ Texto principal: `#1A1A1A`
  * ⬜ Fondo principal: `#FFFFFF`
  * 🔲 Fondos secundarios: `#F2F2F2`
  * 🔘 Acentos: `#6B6B6B`
* **Composición:** Uso extenso de espacios en blanco (whitespace), bloques alternados de texto e imágenes a gran escala, y tarjetas de información limpias con iconografía de Font Awesome.

---

## 📂 Estructura del Repositorio

El proyecto mantiene un árbol de directorios optimizado donde la versión en inglés es un espejo exacto de la versión en español, pero compartiendo los recursos pesados:

```text
site/
├── index.html                    # Inicio (ES)
├── style.css                     # Estilos globales (ES)
├── script.js                     # Lógica de interfaz (ES)
├── 404.html                      # Página de error (Autocontenida)
├── .htaccess                     # Reglas de enrutamiento para hosting Apache
├── img/                          # 📁 Imágenes compartidas globalmente
├── docs/                         # 📁 Documentos compartidos (CV.pdf)
│
├── formacion-academica/          # Secciones en Español
├── habilidades-idiomas/
├── proyectos/
├── capacitaciones-recomendaciones/
│
└── eng/                          # 🌐 Versión en Inglés (Espejo de estructura)
    ├── index.html                # Home (EN)
    ├── style.css                 
    ├── script.js                 
    ├── 404.html                  
    ├── academic-background/      
    ├── skills-languages/         
    ├── projects/                 
    └── certifications-recommendations/ 

```

---

## 🚀 Instalación y Uso Local

Al ser un sitio web estático puro, no requiere instalación de dependencias ni entornos de ejecución complejos.

1. Clona este repositorio en tu máquina:
```bash
git clone https://github.com/sxmuelvm/portafolio.git
```

2. Navega al directorio del proyecto:
```bash
cd portafolio
```

3. Visualiza el proyecto:
Puedes abrir el archivo `index.html` de la raíz directamente en tu navegador web (Chrome, Firefox, Safari, Edge). Sin embargo, para una mejor experiencia de desarrollo, se recomienda ejecutarlo usando la extensión **Live Server** en Visual Studio Code.

> **💡 Nota sobre la página 404:** 
> El enrutamiento de errores 404 funciona de manera automática en entornos de producción (GitHub Pages, Vercel, o servidores Apache gracias al archivo `.htaccess` incluido). Si navegas de forma estrictamente local sin un servidor, deberás abrir el archivo `404.html` manualmente para previsualizar su diseño.

---

### 📱 ¡Conectemos!

## [📷 @sxmuel.vm en Instagram](https://www.instagram.com/sxmuel.vm)

---

*Diseñado y desarrollado por Samuel Vallejo Morales.*
