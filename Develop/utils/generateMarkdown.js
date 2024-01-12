// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "None") {
    return `[![License](https://img.shields.io/badge/License-${license}-green.svg)](https://choosealicense.com/licenses/${license})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license != "None") {
  return `[License](#License)`
}}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license != "None") {
    return `## License`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
${renderLicenseLink()}
## Description
${data.description}
## Table of Contents
[1. Installation.](#installation)
[2. Usage.](#usage)
[3. Contributing.](#contributing)
[4. Tests.](#tests)
[5. License.](#license)

<a name="installation"></a>
## Installation
${data.installation}

<a name="usage"></a>
## Usage
${data.usage}

<a name="contributing"></a>
## Contributing
${data.contributing}

<a name="tests"></a>
## Tests
${data.tests}

<a name="license"></a>
${renderLicenseSection(data.license)}
`;
};

module.exports = generateMarkdown;
