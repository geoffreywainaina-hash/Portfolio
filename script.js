console.log("HELLO WORLD!!!");

// ARRAYS

const skills = ["HTML", "CSS", "JavaScript", "Command Line", "Git & GitHub", "Responsive Design"]

const skillsContainer = document.querySelector(".skill-container")

skills.forEach (skill => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skills-card");
    skillCard.textContent = skill; 

    skillsContainer.appendChild(skillCard);
});