let projects = document.getElementsByClassName('project');
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
        projectName: ""
    }
];

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

