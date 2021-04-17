const fs = require("fs");
let licenseLink = "";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    console.log(license[0])
  switch (license[0]) {
    case "GPLv3":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n`;

    case "Apache":
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n`;

    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`;
   
      default:
        return ''
  }
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseLink) {
  // License
  if (licenseLink) {
    return `\n This repository is released under the ${licenseLink}\n`;
  } else {
      return''
  }
 
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  ${renderLicenseBadge(answers.license)}
  # ${answers.title}\n
  ## Desription \n ${answers.description}
  ## Table of contents
     * [Installation](#Installation)
     * [Usage](#Usage)
     * [Credits](#Credits)
     * [License](#License)
     * [Questions](#Questions)
  ## Installation \n ${answers.Install}
  ## License \n ${renderLicenseSection(answers.license)}
  ## Usage \n ${answers.usage}
  ## Credits \n ${answers.credits}
  ## Questions\n ${answers.Questions}\n ${answers.username} \n ${answers.email}

`;
}

module.exports = generateMarkdown;
