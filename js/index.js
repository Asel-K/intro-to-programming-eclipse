let today=new Date();
// console.log(today)
let thisYear=today.getFullYear();
// console.log(thisYear);
let footer=document.querySelector('footer');

let copyright = document.createElement('p');

copyright.innerHTML = `&copy; ${thisYear} Asel Karagazieva`;
footer.appendChild(copyright);

let skills=['JavaScript', 'HTML', 'Github', 'CSS'];
// console.log(skills);
let skillsSection=document.getElementById('skills');
let skillsList=document.querySelector('ul');
for (i=0; i<skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML=skills[i];
    skillsSection.appendChild(skill)
}

let githubRequest = new XMLHttpRequest ();
const GITHUB_USERNAME = 'Asel-K'
githubRequest.open("GET", `https://api.github.com/users/${GITHUB_USERNAME}/repos`);
githubRequest.send(); 
githubRequest.onload = function () {
    let repositories = JSON.parse (this.response);
    console.log ("response", repositories)

let projectSection = document.getElementById ("projects");
let projectList = projectSection.querySelector('ul')
for(let i=0; i<repositories.length; i++){
    let project = document.createElement('li');
    project.innerHTML=`<a href=${`${repositories[i].clone_url}`}>${repositories[i].name}
    </a>`
    projectList.appendChild(project);
}
}

let messageForm=document.getElementsByName('leave_message')
leave_message.addEventListener('submit',function(e){
    e.preventDefault()

    let Name=e.target.name.value
    let Email=e.target.email.value
    let Message=e.target.message.value

    console.log(Name)
    console.log(Email)
    console.log(Message);

    let messageSection = document.getElementById('messages');
    let messageList = document.querySelector('ul');
    let newMessage = document.createElement ('li');
   newMessage.innerHTML=`<a href='mailto:asel.karagazieva@gmail.com'>${Name}</a>
   wrote <span>${Message}</span>`
   messageSection.appendChild(newMessage);

    let removeButton=document.createElement('button')
    removeButton.id="buttonremove";
    removeButton.innerHTML = 'remove';
    removeButton.type = 'button';
    messageSection.appendChild(removeButton)
    removeButton.addEventListener('click', (e) =>{
    let entry= document.getElementById('messages').parentNode
    entry.remove();
    })

    document.forms['leave_message'].reset()
})