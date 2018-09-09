const execa = require('execa');

async function getECRRepositories() {
  const { stdout } = await execa.shell('aws ecr describe-repositories');
  const { repositories } = JSON.parse(stdout);
  return repositories.map(repo => repo.repositoryUri);
}

module.exports = {
  getECRRepositories
};
