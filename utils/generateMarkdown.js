// function to generate markdown for README

  
const generateBadge = licenseText => {
  
  if (licenseText == 'MIT') {
     return `![MIT](https://img.shields.io/badge/license-MIT-green "MIT")`;
  } else if (licenseText == 'APACHE') {
     return `![APACHE](https://img.shields.io/badge/license-Apache-blue "APACHE")`;
  } else if (licenseText == 'GPL 3.0') {
    return `![GPL](https://img.shields.io/badge/license-GPL-blue "GPL")`;
  } else if (licenseText == 'BSD 3') {
    return `![BSD](https://img.shields.io/badge/license-BSD-green "BSD")`; 
  } else return ` `
};


function generateMarkdown(userInput) {
  const { license, ...data } = userInput;
  return `# ${data.title}
  
  ${generateBadge(license)}
  
  ## Description
  
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation
  To install necessary dependencies, run the following command:  
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  [${license}](https://choosealicense.com/licenses/)

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions please post them to my GitHub at https://github.com/${data.username} or [click here](mailto:${data.email}?subject=GitHub%20Question) to e-mail me.


`;
}

module.exports = generateMarkdown;
