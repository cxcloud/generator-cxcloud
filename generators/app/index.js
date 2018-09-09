'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const { getECRRepositories } = require('./utils/cli');

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

    const githubUsername = await this.user.github.username();

    this.props = await this.prompt([
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
      },
      {
        type: 'confirm',
        name: 'isDeployedToKube',
        message:
          'Do you want to deploy this microservice to a Kubernetes cluster?',
        default: true
      },
      {
        type: 'list',
        name: 'ecrRepository',
        when: p => p.isDeployedToKube,
        message: 'Choose an ECR repository',
        choices: () => getECRRepositories()
      }
    ]);
  }

  writing() {
    // Copy Base Structure
    const templates = [
      'service/package.json',
      'service/swagger.config.json',
      'service/README.md'
    ];
    this.fs.copy(this.templatePath('service/**/'), this.destinationPath(), {
      globOptions: { dot: true }
    });
    templates.forEach(tpl => {
      this.fs.copyTpl(
        this.templatePath(tpl),
        this.destinationPath(tpl),
        this.props
      );
    });

    // Copy Deployment
    if (this.props.isDeployedToKube) {
      this.fs.copyTpl(
        this.templatePath('deployment/**/'),
        this.destinationPath('deployment/'),
        this.props
      );
    }
  }

  install() {
    this.installDependencies({
      bower: false
    });
  }
};
