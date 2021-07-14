let projectContainer = document.getElementsByClassName('project-container')[0];
let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');

let projects = [
    {
        projectName: "Holly",
        description: "Holly is a voice controlled assistant with basic commands and the ability to control smart home devices.",
        language: "Python",
        startDate: "8/5/2019",
        endDate: "incomplete"
    },
    {
        projectName: "Scheduling System",
        description: "A simple program which processes events of different types and can remind you of events.",
        language: "Javascript",
        startDate: "24/2/21",
        endDate: "2/3/21"
    },
    {
        projectName: "Home Control",
        description: "Light control with timers and the ability to control lights automatically or with certain terms.",
        language: "Python",
        startDate: "14/5/19",
        endDate: "10/3/20"
    },
    {
        projectName: "IoT Lock",
        description: "Individual device with a keypad and keycard reader which checks database and returns values.",
        language: "Python",
        startDate: "20/11/20",
        endDate: "29/11/20"
    }
];

class ProjectClass {
    constructor(projectIndex) {
        this._project = projects[projectIndex];

        this.name = this._project.projectName;
        this.joinedName = this.name.replace(/\s+/g, "-").toLowerCase();
        this.description = this._project.description;
        this.language = this._project.language;
        this.start = this._project.startDate;
        this.end = this._project.endDate;
    }

    genHTML() {
        this.html =
        `
        <div class="project" id="${this.joinedName}">
            <h3>${this.name}</h3>
            <p class="project-description">${this.description}</p>
            <h4>${this.language}</h4>
            <div class="start-date">
                <h5>Start</h5>
                <h5>${this.start}</h5>
            </div>
            <div class="end-date">
                <h5>End</h5>
                <h5>${this.end}</h5>
            </div>
            <a href="#">More Info</a>
        </div>
        `;
        return this.html;
    }

    addToProjects() {
        projectContainer.insertAdjacentHTML('beforeEnd', this.genHTML());
    }
}

const NextProject = () => {
    alert("Next Project");
}

const PreviousProject = () => {
    alert("Previous Project");
}

leftArrow.addEventListener('click', event => {
    PreviousProject();
})

rightArrow.addEventListener('click', event => {
    NextProject();
})

// let holl = new ProjectClass(0);
// console.log(holl.genHTML())
// holl.addToProjects()

const loadProjects = () => {
    
}