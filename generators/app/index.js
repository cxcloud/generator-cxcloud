'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const services = [
  {
    value: 'commerce',
    name: 'Commerce (CommerceTools)',
    conflictsWith: ['auth']
  },
  {
    value: 'search',
    name: 'Search (Algolia)'
  },
  {
    value: 'content',
    name: 'Content (Contentful)'
  },
  {
    value: 'auth',
    name: 'Authentication (AWS Cognito)',
    conflictsWith: ['commerce']
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

    const githubUsername = await this.user.github.username();
    const appName = this.appname.replace(/\s/g, '-').toLowerCase();

    this.props = await this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Enter a DNS compatible project name',
        default: appName
      },
      {
        type: 'input',
        name: 'apiPrefix',
        message:
          'Enter an API prefix for this service (without trailing slash)',
        default: `/api/${appName}`
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
        type: 'checkbox',
        name: 'services',
        message: 'Choose the services you want to install',
        choices: services,
        validate: input => {
          for (const serviceName of input) {
            const service = services.find(s => s.value === serviceName);
            if (Array.isArray(service.conflictsWith)) {
              const conflicts = input.some(inputService =>
                service.conflictsWith.includes(inputService)
              );
              if (conflicts) {
                return `'${serviceName}' conflicts with ${service.conflictsWith.join(
                  ', '
                )}. You can not choose conflicting services in one project.`;
              }
            }
          }

          return true;
        }
      }
    ]);
  }

  writing() {
    // Copy Base Structure
    this.fs.copyTpl(
      this.templatePath('service/**/*'),
      this.destinationPath(),
      this.props,
      {},
      {
        globOptions: { dot: true, ignore: ['.DS_Store'] }
      }
    );

    this.props.services.forEach(service => {
      this.fs.copyTpl(
        this.templatePath(`services/${service}/**/*`),
        this.destinationPath('src/'),
        this.props
      );
    });

    this.fs.copyTpl(
      this.templatePath('meta/gitignore'),
      this.destinationPath('.gitignore'),
      this.props
    );

    // Copy Deployment
    this.fs.copyTpl(
      this.templatePath('meta/cxcloud.yaml'),
      this.destinationPath('.cxcloud.yaml'),
      this.props
    );
  }

  install() {
    this.installDependencies({
      bower: false
    });

    const packages = this.props.services.map(service => `@cxcloud/${service}`);

    if (this.props.services.includes('commerce')) {
      packages.push('@cxcloud/ct-types', '@buttercup/generator');
    }

    this.npmInstall(packages);
  }
};
