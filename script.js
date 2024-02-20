document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const projects = document.querySelectorAll(".project");
    let currentIndex = 0;
  
    function showProject(index) {
      projects.forEach((project, i) => {
        if (i === index) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    }
  
    function goToPrevProject() {
      currentIndex = (currentIndex - 1 + projects.length) % projects.length;
      showProject(currentIndex);
    }
  
    function goToNextProject() {
      currentIndex = (currentIndex + 1) % projects.length;
      showProject(currentIndex);
    }
  
    prevBtn.addEventListener("click", goToPrevProject);
    nextBtn.addEventListener("click", goToNextProject);
  

    showProject(currentIndex);
  });
  