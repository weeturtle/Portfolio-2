let projectContainer = document.getElementsByClassName('project-container')[0];
let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');


class Project {
    constructor(project) {
        this._project = project;

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
        this._projects = [];
        this.currentLoaded = [];
    }

    loadProjectJSON() {
        return new Promise(resolve => {
            fetch("../resources/js/projects.json")
            .then(response => response.json())
            .then(response => resolve(this.loadProjects(response)))
        })

    }

    loadProjects(projectList) {
        let projects = []
        for (let e in projectList) {
            projects.push(new Project(projectList[e]));
            projects[e].genHTML();
        }
        return projects;
    }
    
    async runProjects() {
        this._projects = await this.loadProjectJSON();
        this.showAll([0, 1, 2])
    }

    showProject(projectIndex) {
        let initLen = this.currentLoaded.length;
        this.currentLoaded.push(this._projects[projectIndex]);
        this.currentLoaded[initLen].addToProjects();
    }

    hideAll() {
        let wasLoaded = [];
        for (let c of this.currentLoaded) {
            wasLoaded.push(this._projects.indexOf(c));
            c.removeProject();
        }

        this.currentLoaded = [];
        return wasLoaded;
    }

    showAll(arr) {
        for (let e of arr) {
            this.showProject(e);
        }
    }

    nextProject() {
        let open = this.hideAll();
        open.shift()
        if (open[1] === this._projects.length-1) {
            open.push(0);
        } else {
            open.push(open[1]+1);
        }
        this.showAll(open);
    }

    previousProject() {
        let open = this.hideAll();
        open.pop()
        if (open[0] === 0) {
            open.unshift(this._projects.length-1);
        } else {
            open.unshift(open[0]-1);
        }
        this.showAll(open);
    }
}

let pManager = new ProjectManager(projects);
pManager.runProjects()


leftArrow.addEventListener('click', event => {
    pManager.previousProject();
})

rightArrow.addEventListener('click', event => {
    pManager.nextProject();
})