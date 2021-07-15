let projectContainer = document.getElementsByClassName('project-container')[0];
let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');


class Project {
    constructor(projectIndex) {
        this._project = projects[projectIndex];

        this.name = this._project.projectName;
        this.joinedName = this.name.replace(/\s+/g, "-").toLowerCase();
        this.description = this._project.description;
        this.language = this._project.language;
        this.start = this._project.startDate;
        this.end = this._project.endDate;

        this.loaded = false;
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
        projectContainer.insertAdjacentHTML('beforeEnd', this.html);
        this.element = document.getElementById(this.joinedName);
        this.loaded = true;
    }

    removeProject() {
        if (this.element) {
            this.element.remove();
            this.loaded = false;
        }
    }
}

class ProjectManager {
    constructor() {
        
    }

    loadProjectJSON() {
        fetch("../resources/js/projects.json")
            .then(response => response.json())
            .then(response => this.projectList = response)
    }

    nextProject() {

    }

    previousProject() {
        
    }

}

let pManager = new ProjectManager(projects);
pManager.loadProjectJSON()

// const NextProject = (loadedProjects, currentProjects) => {
//     alert("Next Project");
//     if (currentProjects[-1] === (loadedProjects.length-1)) {
//         console.log("End of list")
//     }
// }

// const PreviousProject = () => {
//     alert("Previous Project");
// }


// // let holl = new ProjectClass(0);
// // console.log(holl.genHTML())
// // holl.addToProjects()

// const loadAllProjects = () => {
//     let pro = {};
//     for (i in projects) {
//         pro[i] = (new Project(i));
//         pro[i].genHTML()
//     }

//     return pro;
// }

// const initProjects = (loadedProjects) => {
//     let loaded = [];
//     for (let i = 0; i < 3; i++) {
//         loaded.push(loadedProjects[i]);
//         loadedProjects[i].addToProjects();
//         current.push(i)
//     }
// }

// let current = []
// const loadedProjects = loadProjects();
// loadedProjects = initProjects(loadedProjects);





leftArrow.addEventListener('click', event => {
    PreviousProject();
})

rightArrow.addEventListener('click', event => {
    NextProject(loadedProjects, current);
})