const fs = require ('fs');
let licenseLink = ''
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
        license = `[MIT License](https://opensource.org/licenses/MIT)`;
        fs.appendFile('Generated-README.md', (
            `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`
        ), (err) => err ? console.error(err) : console.log('Badge added.'))  
            break;
            case 'GPLv3':
            license = `[GPLv3 License](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
                fs.appendFile('Generated-README.md', (
                `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n`
                ), (err) => err ? console.error(err) : console.log('Badge added.'))
            break;
            case 'Apache':
            license = `[Apache License](https://www.apache.org/licenses/LICENSE-2.0)`;
            fs.appendFile('Generated-README.md', (
                `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n`
            ), (err) => err ? console.error(err) : console.log('Badge added.'))
            break;
        default:
             case 'MIT':
        license = `[MIT License](https://opensource.org/licenses/MIT)`;
        fs.appendFile('Generated-README.md', (
            `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`
        ), (err) => err ? console.error(err) : console.log('Badge added.'))
          
    }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    licenseLink = license
    return licenseLink;
}
renderLicenseLink();
}

renderLicenseBadge();




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return ''
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    
  return `# ${answers.title}\n
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
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