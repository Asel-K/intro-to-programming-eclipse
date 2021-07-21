//COPYRIGHT TEXT IN FOOTER
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');

copyright.innerHTML = `&copy; ${thisYear} Asel Karagazieva`;
footer.appendChild(copyright);

//SKILLS 
let skills = ['JavaScript', 'HTML', 'Github', 'CSS'];
//DOM SELECTION
let skillsSection = document.getElementById('skills');
let skillsList = document.querySelector('ul');

for (i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    //DOM MANIPULATION (MODIFY)
    skillsSection.appendChild(skill)
}

//FETCHING API//
const GITHUB_USERNAME = 'Asel-K'
fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)

    .then(response => response.json())
    .then(data =>repo(data))
    function repo(data) {
        let projectSection = document.getElementById ("projects");
        let projectList = projectSection.querySelector('ul')
        for(let i=0; i<data.length; i++){
            let project = document.createElement('li');
            project.innerHTML=`<a href=${`${data[i].clone_url}`}>${data[i].name}</a>`
            projectList.appendChild(project)

    }}
   


//LEAVE MESSAGE

let messageForm=document.getElementsByName('leave_message')
leave_message.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    let Name=e.target.name.value
    let Email=e.target.email.value
    let Message=e.target.message.value
    
    console.log(Name)
    console.log(Email)
    console.log(Message);
    
    let newMessage = document.createElement('li');
    newMessage.innerHTML=`<a href="mailto:${Email}">${Name}</a>
    wrote :<span>${Message}</span>`
    let messageSection = document.getElementById("messages");
    let  messageList = messageSection.querySelector('ul')

let removeButton= document.createElement("button")
removeButton.id="buttonremove";
removeButton.innerText = "remove";
removeButton.type = "button";

removeButton.addEventListener("click",(e)=> {
    const entry = e.target.parentNode;
    entry.remove();
})
newMessage.appendChild(removeButton);

messageList.appendChild(newMessage);
e.target.reset();
})
