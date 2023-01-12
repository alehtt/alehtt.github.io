var skillsEl = document.getElementById("skills-list");
//skillsEl.style.fontSize = "25px";
//skillsEl.style.color = "red";

//var oldText = skillsEl.innerHTML;
//skillsEl.innerHTML = oldText + "<li>JS</li>";

//skillsEl.innerHTML = skillsEl.innerHTML + "<li>JS</li>";

// skillsEl.innerHTML += '<li class="favorite">HTML</li>';
// skillsEl.innerHTML += '<li class="favorite">CSS</li>';
// skillsEl.innerHTML += "<li>JS</li>";

var skills = ["HTML", "CSS", "JS", "Drive"];

// skillsEl.innerHTML += "<li>" + skills[0] + "</li>";
// skillsEl.innerHTML += "<li>" + skills[1] + "</li>";
// skillsEl.innerHTML += "<li>" + skills[2] + "</li>";

var skillsHTML = " ";

for (var i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;
