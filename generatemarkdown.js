// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
 
//  ## Badges \n [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
//[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
//[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ## Desription \n ${answers.description}
  ## Table of contents
     * [Installation](#Installation)
     * [Usage](#Usage)
     * [Credits](#Credits)
     * [License](#License)
     * [Questions](#Questions)
  ## Installation \n ${answers.Install}
  ## Usage \n ${answers.usage}
  ## Credits \n ${answers.credits}
  ## Licenses \n ${answers.license}
  ## Questions\n ${answers.Questions}

`;
}

module.exports = generateMarkdown;