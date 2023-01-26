// TODO: Generate HTML file
const generateHtml = require("./util/generateHtml");

// TODO: Create inquirer prompt to gather team members and their information
const inquirer = request("inquirer");

function addManager() {
  inquirer
    .prompt([
      // TODO: Prompt user to enter the team manager’s name, employee ID, email address, and office number
      {
        name: "mngrName",
        type: "input",
        message: "What is the manager's name?",
      },
      {
        name: "mngrID",
        type: "input",
        message: "What is the manager's employee ID?",
      },
      {
        name: "mngrEmail",
        type: "input",
        message: "What is the manager's email address?",
      },
      {
        name: "mngrOfficeNum",
        type: "input",
        message: "What is the manager's office number?",
      },
    ])
    .then(addEmployees());
}

// TODO: Once inputs are made prompt user with menu with the option to add an engineer or an intern or to finish
function addEmployees() {
  inquirer
    .prompt({
      name: "option",
      type: "list",
      choices: ["Add engineer", "Add intern", "Finish"],
      message: "What would you like to do?",
    })
    .then((ans) => {
      if (ans.option === "Add engineer") {
        // TODO: create and place in engineer function
        addEngineer();
      } else if (ans.option === "Add intern") {
        // TODO: create and place in intern function
        addIntern();
        // TODO: When finish is selected, exit the application, and the HTML is generated
      } else {
        team;
      }
    });
}

// TODO: Prompt to enter the engineer’s name, ID, email, and GitHub username, then return to menu
function addEngineer() {
  inquirer
    .prompt([
      {
        name: "engrName",
        type: "input",
        message: "What is the engineer's name?",
      },
      {
        name: "engrID",
        type: "input",
        message: "What is the engineer's employee ID?",
      },
      {
        name: "engrEmail",
        type: "input",
        message: "What is the engineer's email address?",
      },
      {
        name: "engrGitHub",
        type: "input",
        message: "What is the engineer's GitHub username?",
      },
    ])
    .then(addEmployees());
}

// TODO: Prompt to enter the intern’s name, ID, email, and school,  then return to menu
function addIntern() {
  inquirer
    .prompt([
      {
        name: "intName",
        type: "input",
        message: "What is the intern's name?",
      },
      {
        name: "intID",
        type: "input",
        message: "What is the intern's employee ID?",
      },
      {
        name: "intEmail",
        type: "input",
        message: "What is the intern's email address?",
      },
      {
        name: "intSchool",
        type: "input",
        message: "What is the intern's school?",
      },
    ])
    .then(addEmployees());
}

// TODO: Link email address to default email application with email address populated
// TODO: GitHub username links to their profile in new tab

addManager();
