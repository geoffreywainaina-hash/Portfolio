console.log("HELLO WORLD!!!");

// ARRAYS

const skills = ["HTML", "CSS", "JavaScript", "Command Line", "Git & GitHub", "Responsive Design"]

const projects = [
    {
        name: "Atlas",
        image: "#",
        description: "A travel planning website designed to help users organize and explore trips.",
        link: "#"
    },

    {
        name: "Akan Name Generator",
        image: "#",
        description: "A web application that generates an Akan name based on user's date of birth.",
        link: "#"
    }
]

// Render skills section
const skillsContainer = document.querySelector(".skill-container")

skills.forEach (skill => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skills-card");
    skillCard.textContent = skill; 

    skillsContainer.appendChild(skillCard);
});


// Render Projects Section

const projectContainer = document.querySelector(".project-container");

projects.forEach(project => {
    const projectCard = document.createElement("div")
    projectCard.classList.add("project-card")

    projectCard.innerHTML = `
    
    <img src="${project.image}" alt="${project.name}" class="project-image">
    <div class="project-info">
          <h5>${project.name}</h5>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
    </div>`;

    projectContainer.appendChild(projectCard);
});