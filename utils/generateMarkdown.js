// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  return  `![INFO](https://img.shields.io/badge/license-${license}-green)`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
if (license.toLowerCase() === "mit"){
  return "https://opensource.org/licenses/MIT"
}
else if (license.toLowerCase() === "bsd"){
  return "https://opensource.org/licenses/BSD-3-Clause"
}
else if (license.toLowerCase() === "apache"){
  return "https://opensource.org/licenses/BSD-3-Clause"
}
else if (license.toLowerCase() === "no license"){
  return " "
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license.toLowerCase() === "mit"){
    return "The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility."
  }
  else if (license.toLowerCase() === "bsd"){
    return "BSD licenses are a family of permissive free software licenses, imposing minimal restrictions on the use and distribution of covered software."
  }
  else if (license.toLowerCase() === "apache"){
    return "The Apache License is a permissive free software license written by the Apache Software Foundation (ASF). It allows users to use the software for any purpose, to distribute it, to modify it, and to distribute modified versions of the software under the terms of the license, without concern for royalties."
  }
  else if (license.toLowerCase() === "no license"){
    return " "
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})

## Contact
  Email: ${data.email}  
  Github: [${data.github}](http://github.com/${data.github})
    
## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [GuideLines](#guideLines)
  * [Test](#test)
    
## Description
    ${data.description}
    
## Installation
    ${data.installation}
    
## Usage Information
    ${data.usage}

## License
${renderLicenseSection(data.license)}

## Contribution guidelines
    ${data.guidelines}

## Test Instructions
    ${data.test}   
## Walk through Video
  Uses the [Inquirer package](https://drive.google.com/file/d/1YnK6js6nZa2f-Sy14vo2SeoEU4G369Pj/view?usp=sharing).
`;

}

module.exports = generateMarkdown;
