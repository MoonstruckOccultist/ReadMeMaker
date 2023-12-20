// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var text = `# ${data.title} 

## Description
${data.description}

## Table of Contents`;
  if (data.installation != '') {
    text = text + `\n[Installation](#installation) /`
  }
  if (data.usage != '') {
    text = text + `\n[Usage](#usage) /`
  }
  if (data.contributers != '') {
    text = text + `\n[Contributers](#contributers) /`
  }
  if (data.Qs != '') {
    text = text + `\n[Questions](#questions)`
  }


  if (data.installation != '') {
    text = text + `\n\n## Installation
${data.installation}`
  }

  if (data.usage != '') {
    text = text + `\n\n## Usage
${data.usage}`
  }
  // if (data.screenshot != '') {
  //   text = text + `\n![screenshot showing project working](./${data.screenshot})`
  // }

  if (data.contributers != '') {
    text = text + `\n\n## Contributers`
    var contrib = data.contributers.split(',')
    for (var i = 0; i < contrib.length; i++) {
      text = text + `\n[${contrib[i]}](https://github.com/${contrib[i]}), `
    }
  }
  if (data.Qs != '') {
    text = text + `\n\n## Questions
if you have any questions please send them to: ${data.Qs}`
  }

  return text;
}

module.exports = {
  generateMarkdown,
}
