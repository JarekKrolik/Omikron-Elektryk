  document.addEventListener('DOMContentLoaded', () => {
      const currentYear = document.querySelector('.currentYear');
      const aLink = document.querySelectorAll('.nav-link');
      const menuHide = document.querySelector('.navbar-collapse');




      aLink.forEach(element => {
          element.addEventListener('click', () => {
              menuHide.classList.remove('show')
          })
      })


      const whatYear = () => {
          const nowYear = new Date().getFullYear();
          currentYear.textContent = nowYear;
      }
      whatYear()


  })