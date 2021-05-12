const core = require('@actions/core');

async function run() {
  try {
    core.exportVariable('BRANCH_NAME', process.env.GITHUB_REF.split('/').slice(2).join('/'));
    core.exportVariable('GITHUB_ACTOR', process.env.GITHUB_ACTOR);
    core.exportVariable('GITHUB_SHA', process.env.GITHUB_SHA);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
