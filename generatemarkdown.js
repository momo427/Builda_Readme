

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
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