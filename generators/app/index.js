'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  initializing() {
    this.composeWith(require.resolve('generator-git-init'));
  }

  prompting() {
    this.log(
      // eslint-disable-next-line prettier/prettier
      yosay(
        `Welcome to the impeccable ${chalk.red('generator-cxcloud')} generator!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Enter a DNS compatible project name',
        default: this.appname
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Enter the project description',
        default: 'A CXCloud Microservice'
      },
      {
        type: 'input',
        name: 'orgName',
        message: 'Enter your Github username/organization name',
        default: this.user.github.username
      },
      {
        type: 'input',
        name: 'authorName',
        message: 'Enter your name and email',
        default: this.user.git.name()
      },
      {
        type: 'input',
        name: 'authorEmail',
        message: 'Enter your name and email',
        default: this.user.git.email()
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const templates = ['package.json', 'swagger.config.json', 'README.md'];
    this.fs.copy(this.templatePath('**/'), this.destinationPath());
    templates.forEach(tpl => {
      this.fs.copyTpl(
        this.templatePath(tpl),
        this.destinationPath(tpl),
        this.props
      );
    });
  }

  install() {
    this.installDependencies({
      bower: false
    });
  }
};
