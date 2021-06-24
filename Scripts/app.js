const homeId = document.querySelector('#home');
const projectId = document.querySelector('#project');
const contactId = document.querySelector('#contact');
const aboutId = document.querySelector('#about');
const mobileNavigations = document.querySelector(".mobileView").classList.toggle("hide");

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
                    <img src="styles/images/Screenshot from 2021-06-20 16-21-41.png" alt="An image of windows 10 emulator" width="500px" height="300px">
                </span>
                <span class="paragraph">
                    <h3>Windows 10 Online Emulator</h3>
                    <p>This project is an inspiration of the Microsoft windows 10 Operating System. It was just a personal project, I just wanted to have my on Windows 10 emulator online and that was how this project came to life.</p>
                    <div>
                        <a href="#"><button>Visit Site</button></a>
                        <a href="#"><button>Open Git</button></a>
                    </div>
                </span>
            </div>
            <div class="pro2">
                <span class="windowsImage">
                    <img src="styles/images/Screenshot from 2021-06-20 16-21-41.png" alt="An image of windows 10 emulator" width="500px" height="300px">
                </span>
                <span class="paragraph">
                    <h3>Windows 10 Online Emulator</h3>
                    <p>This project is an inspiration of the Microsoft windows 10 Operating System. It was just a personal project, I just wanted to have my on Windows 10 emulator online and that was how this project came to life.</p>
                    <div>
                        <a href="#"><button>Visit Site</button></a>
                        <a href="#"><button>Open Git</button></a>
                    </div>
                </span>
            </div>
            <div class="windows">
                <span class="windowsImage">
                    <img src="styles/images/Screenshot from 2021-06-20 16-21-41.png" alt="An image of windows 10 emulator" width="500px" height="300px">
                </span>
                <span class="paragraph">
                    <h3>Windows 10 Online Emulator</h3>
                    <p>This project is an inspiration of the Microsoft windows 10 Operating System. It was just a personal project, I just wanted to have my on Windows 10 emulator online and that was how this project came to life.</p>
                    <div>
                        <a href="#"><button>Visit Site</button></a>
                        <a href="#"><button>Open Git</button></a>
                    </div>
                </span>
            </div>
            <div class="pro2">
                <span class="windowsImage">
                    <img src="styles/images/Screenshot from 2021-06-20 16-21-41.png" alt="An image of windows 10 emulator" width="500px" height="300px">
                </span>
                <span class="paragraph">
                    <h3>Windows 10 Online Emulator</h3>
                    <p>This project is an inspiration of the Microsoft windows 10 Operating System. It was just a personal project, I just wanted to have my on Windows 10 emulator online and that was how this project came to life.</p>
                    <div>
                        <a href="#"><button>Visit Site</button></a>
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
        <div class="callMe">
            <a href="tel: +2348114761768">
                <span>
                    <svg enable-background="new 0 0 50 50" height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="none" height="50" width="50"/><path d="M30.217,35.252c0,0,4.049-2.318,5.109-2.875  c1.057-0.559,2.152-0.7,2.817-0.294c1.007,0.616,9.463,6.241,10.175,6.739c0.712,0.499,1.055,1.924,0.076,3.32  c-0.975,1.396-5.473,6.916-7.379,6.857c-1.909-0.062-9.846-0.236-24.813-15.207C1.238,18.826,1.061,10.887,1,8.978  C0.939,7.07,6.459,2.571,7.855,1.595c1.398-0.975,2.825-0.608,3.321,0.078c0.564,0.781,6.124,9.21,6.736,10.176  c0.419,0.66,0.265,1.761-0.294,2.819c-0.556,1.06-2.874,5.109-2.874,5.109s1.634,2.787,7.16,8.312  C27.431,33.615,30.217,35.252,30.217,35.252z" fill="none" stroke-miterlimit="10" stroke-width="3"/></svg>
                </span><span>Call me @+234 (0)811-476-1768</span>
            </a>
        </div>
        <div class="callMe">
            <a href="mailto:ataisinathan@gmail.com?subject=Hello, let's talk&body=Hello Ataisi Nathan, I have seen your works and I am impressed and I would love to work with you.">
                Send me an e-mail
            </a>
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
    mobileNavigations;
}
function closeHam(){
    mobileNavigations;
}