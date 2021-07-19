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
   


// LEAVE MESSAGE   
let messageForm=document.getElementsByName('leave_message')
leave_message.addEventListener('submit',function(e){
    e.preventDefault()

    let Name=e.target.name.value
    let Email=e.target.email.value
    let Message=e.target.message.value



    let messageSection = document.getElementById('messages');
    let messageList = document.querySelector('ul');

    if (messageSection.style.display=== 'none'){
        messageSection.style.display = 'block'
    }

//create new message
    let newMessage = document.createElement ('li');
    newMessage.classList.add('list_item')
   newMessage.innerHTML =`<a href='mailto:asel.karagazieva@gmail.com'>${Name}</a>
   wrote <span>${Message}</span>`
   messageSection.appendChild(newMessage);

   //remove button
    let removeButton = document.createElement('button')
    removeButton.id = "buttonremove";
    removeButton.innerText = "remove";
    removeButton.type = 'button';
    messageSection.appendChild(removeButton)
    
    removeButton.addEventListener('click', (e) => {
    let entry = document.getElementById('messages').parentNode

    

    entry.remove();
    })

    document.forms['leave_message'].reset()
})



