'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const downlodGit = require('download-git-repo');
const fs = require('fs-extra');

// Temporarily disable choices
// const frontendChoices = [
//   {
//     value: 'angular-demo',
//     name: 'Front-end CXCloud demo based on Angular 7'
//   },
//   {
//     value: 'react-demo',
//     name: 'Front-end CXCloud demo based on React'
//   }
// ];

module.exports = class extends Generator {
  initializing() {
    this.composeWith(require.resolve('generator-git-init'));
  }

  async prompting() {
    this.log(
      // eslint-disable-next-line prettier/prettier
      yosay(
        `Welcome to the impeccable ${chalk.red('generator-cxcloud')} generator!`
      )
    );

    const githubUsername = await this.user.github.username().catch(() => {
      return '';
    });

    this.props = await this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Enter a DNS compatible project name',
        default: this.appname.replace(/\s/g, '-').toLowerCase()
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Enter the project description',
        default: 'A CXCloud demo'
      },
      {
        type: 'input',
        name: 'orgName',
        message: 'Enter your Github username/organization name',
        default: githubUsername
      },
      {
        type: 'input',
        name: 'authorName',
        message: 'Enter your name',
        default: this.user.git.name()
      },
      {
        type: 'input',
        name: 'authorEmail',
        message: 'Enter your email',
        default: this.user.git.email()
      }
      // {
      //   type: 'list',
      //   name: 'frontend',
      //   message: 'Which demo do you want to generate?',
      //   choices: frontendChoices
      // }
    ]);
  }

  writing() {
    let done = this.async();
    this.log('Downloading the necessary modules..');
    downlodGit(
      'direct:https://github.com/cxcloud/demo-frontend-angular/archive/master.zip',
      this.destinationPath(''),
      {},
      async err => {
        if (err) {
          return this.log('Could not read the file package.json... Aborting');
        }
        this.log('Download complete.. Updating the packages file');
        try {
          const data = await fs.readFile(this.destinationPath('package.json'));
          const originalData = JSON.parse(data);
          // Build extra fields
          const customJSON = {
            name: this.props.projectName,
            description: this.props.projectDescription,
            author: {
              email: this.props.authorEmail,
              name: this.props.authorName
            },
            bugs: {
              url: `https://github.com/${this.props.orgName}/${
                this.props.projectName
              }/issues`
            },
            homepage: `https://github.com/${this.props.orgName}/${
              this.props.projectName
            }#readme`
          };

          // Create new object with old package.json data and extra fields
          const finalData = Object.assign(originalData, customJSON);

          // Overwrite package.json with new object
          await fs.writeFile(
            this.destinationPath('package.json'),
            JSON.stringify(finalData, null, 2)
          );
          this.log('Packages file update complete..');

          /** Because the process of downloading files from Git is async
             done() is needed so that the process does not jump straight to the install method.
          */
          done();
        } catch (err) {
          return this.log('Could not read the file package.json... Aborting');
        }
      }
    );

    this.fs.copyTpl(
      this.templatePath('meta/gitignore'),
      this.destinationPath('.gitignore'),
      this.props
    );

    // Copy Deployment
    if (this.props.isDeployedToKube) {
      this.fs.copyTpl(
        this.templatePath('meta/cxcloud.yaml'),
        this.destinationPath('.cxcloud.yaml'),
        this.props
      );
    }
  }

  install() {
    this.installDependencies({
      bower: false
    });

    this.npmInstall();
  }
};
