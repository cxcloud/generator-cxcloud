'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const frontendChoices = [
  {
    value: 'angular-demo',
    name: 'Front-end CXCloud demo based on Angular 7'
  },
  {
    value: 'react-demo',
    name: 'Front-end CXCloud demo based on React'
  }
];

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
        type: 'list',
        name: 'frontend',
        message: 'Which demo do you want to generate?',
        choices: frontendChoices
      },
      {
        type: 'confirm',
        name: 'isDeployedToKube',
        message: 'Do you want to deploy this demo to a Kubernetes cluster?',
        default: true
      },
      {
        type: 'list',
        name: 'ecrRepository',
        when: p => p.isDeployedToKube,
        message: 'Choose an ECR repository',
        choices: this.options.repositories || [
          '307365680736.dkr.ecr.eu-west-1.amazonaws.com/cluster.cxcloud.com'
        ]
      }
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(`${this.props.frontend}/**/*`),
      this.destinationPath(''),
      this.props,
      {},
      {
        globOptions: {
          dot: true,
          ignore: ['.DS_Store', '**/*.(jpg|jpeg|png|gif|svg)']
        }
      }
    );

    // Copy images without ejs processing
    this.fs.copy(
      this.templatePath(`${this.props.frontend}/**/*.(jpg|jpeg|png|gif|svg)`),
      this.destinationPath('')
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
