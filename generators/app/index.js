"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        `Welcome to the impeccable ${chalk.red("generator-cxcloud")} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "projectName",
        message: "Enter a DNS compatible project name",
        default: this.appname
      },
      {
        type: "input",
        name: "projectDescription",
        message: "Enter the project description"
      },
      {
        type: "input",
        name: "orgName",
        message: "Enter your Github username/organization name",
        default: this.user.github.username
      },
      {
        type: "input",
        name: "authorInfo",
        message: "Enter your name and email",
        default: `${this.user.git.name()} <${this.user.git.email()}>`
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("package.json"),
      this.destinationPath("package.json"),
      this.props
    );
  }

  install() {
    // this.installDependencies({
    //   bower: false
    // });
  }
};
