let today=new Date();
// console.log(today)
let thisYear=today.getFullYear();
// console.log(thisYear);
let footer=document.querySelector('footer');

let copyright = document.createElement('p');

copyright.innerHTML = `Asel Karagazieva ${thisYear}`;
footer.appendChild(copyright);

let skills=['JavaScript', 'HTML'];
// console.log(skills);
let skillsSection=document.getElementById('skills');
let skillsList=document.querySelector('ul');
for (i=0; i<skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML=skills[i];
    skillsSection.appendChild(skill)
}