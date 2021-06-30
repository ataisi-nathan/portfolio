const homeId = document.querySelector('#home');
const projectId = document.querySelector('#project');
const contactId = document.querySelector('#contact');
const aboutId = document.querySelector('#about');

function home(){
    const content=`<div class="background"></div>
    <div class="content">
        <h1>Hi, I'm Ataisi.</h1>
        <p>I am a Front-End Developer looking forward to working with you.</p>
        <div class="buttons">
            <button onclick="project()"> <a href="">View Projects</a></button>
            <button onclick="contact()"><a href="">Contact Me</a></button>
        </div>
    </div>`;
    document.querySelector('.desktopView').innerHTML=content;
    if (projectId.className =="proSize" || contactId.className =="proSize"  || aboutId.className =="proSize" ){
        homeId.className="proSize";
        projectId.className="prosize";
        aboutId.className="prosize";
        contactId.className="prosize";
    }
    else{
        homeId.className="proSize";
    }
}
function project(){
    const content = `
    <div class="project">
        <h1>My Projects</h1>
        <div class="projects">
            <div class="windows">
                <span class="windowsImage">
                    <img src="styles/images/Screenshot from 2021-06-20 16-21-41.png" alt="An image of windows 10 emulator">
                </span>
                <span class="paragraph">
                    <h3>Windows 10 Online Emulator</h3>
                    <p>This project is an inspiration of the Microsoft windows 10 Operating System. It was just a personal project, I just wanted to have my on Windows 10 emulator online and that was how this project came to life.</p>
                    <div>
                        <a target="_blank" href="../Projects/Windows10/index.html"><button>Visit Site</button></a>
                        <a href="#"><button>Open Git</button></a>
                    </div>
                </span>
            </div>
            
        </div>
    </div>
    `;
    document.querySelector('.desktopView').innerHTML=content;
    if (homeId.className =="proSize" || contactId.className =="proSize"  || aboutId.className =="proSize" ){
        homeId.className="prosize";
        projectId.className="proSize";
        aboutId.className="prosize";
        contactId.className="prosize";
    }
    else{
        projectId.className="proSize";
    }
}
function contact(){
    const content=`<div class="contact">
    <h1>Contact Me</h1>
    <div class="contactMe">
    <h3>Contact Information</h3>
    <p>I am looking forward to working with you, you can contact me by clicking on any of the icons below</p>
    <div class="contactCards">
        <span class="callMe">
            <a href="tel: +2348114761768">
                <span>Call me</span>
            </a>
        </span>
        <span class="callMe">
            <a href="mailto:ataisinathan@gmail.com?subject=Hello, let's talk&body=Hello Ataisi Nathan, I have seen your works and I am impressed and I would love to work with you.">
                Send me an e-mail
            </a>
        </span>
    </div>

        
    </div>
</div>`;
    document.querySelector('.desktopView').innerHTML=content;
    if (homeId.className =="proSize" || projectId.className =="proSize"  || aboutId.className =="proSize" ){
        homeId.className="prosize";
        projectId.className="prosize";
        aboutId.className="prosize";
        contactId.className="proSize";
    }
    else{
        contactId.className="proSize";
    }
}

function about(){

    if (homeId.className =="proSize" || projectId.className =="proSize"  || contactId.className =="proSize" ){
        homeId.className="prosize";
        projectId.className="prosize";
        aboutId.className="proSize";
        contactId.className="prosize";
    }
    else{
        aboutId.className="proSize";
    }
}

function hamBtn(){
    document.querySelector(".mobileView").classList.toggle("hide");
}
function closeHam(){
    document.querySelector(".mobileView").classList.toggle("hide");
}


function mobHome(){
    home();
    document.querySelector(".mobileView").classList.toggle("hide");
}
function mobProject(){
    project();
    document.querySelector(".mobileView").classList.toggle("hide");
}
function mobContact(){
    contact();
    document.querySelector(".mobileView").classList.toggle("hide");
}
function mobAbout(){
    about();
    document.querySelector(".mobileView").classList.toggle("hide");
}