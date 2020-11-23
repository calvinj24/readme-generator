// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title};
## Description;
${data.description};
## Table of contents
> * [Title](#title);
> * [Installation](#installation);
> * [Usage](#usage);
> * [Contributing](#contributing);
## Installation;
${data.install};
## Usage;
${data.usage};
## Contributing;
${data.contribution};
## Tests;
${data.test};
## Questions;
* [GitHub](https://github.com/${data.github});
* email: <${data.email}>;
`;
}

module.exports = generateMarkdown;
