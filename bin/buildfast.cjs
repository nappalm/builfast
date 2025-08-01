#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-require-imports */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const readline = require('readline');

function promptForProjectName() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.question('Please provide a project name: ', name => {
      rl.close();
      if (!name || !name.trim()) {
        console.error('Project name cannot be empty.');
        process.exit(1);
      }
      resolve(name.trim());
    });
  });
}

function promptForRemoteSetup() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.question('Would you like to set up a remote repository? (y/N) ', answer => {
      rl.close();
      resolve(answer.trim().toLowerCase());
    });
  });
}

function promptForRepoURL() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.question('Please enter the remote repository URL: ', url => {
      rl.close();
      if (!url || !url.trim()) {
        console.error('URL cannot be empty. Skipping remote setup.');
        resolve(null);
      } else {
        resolve(url.trim());
      }
    });
  });
}

async function main() {
  let projectName = process.argv[2];
  if (!projectName) {
    projectName = await promptForProjectName();
  }

  const currentPath = process.cwd();
  const projectPath = path.join(currentPath, projectName);
  const gitRepo = 'https://github.com/nappalm/builfast.git';

  try {
    fs.mkdirSync(projectPath);
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.error(`The directory ${projectName} already exists.`);
    } else {
      console.error(err);
    }
    process.exit(1);
  }

  try {
    console.log(`Cloning the repository into ${projectPath}...`);
    execSync(`git clone ${gitRepo} ${projectPath}`);

    process.chdir(projectPath);

    execSync('rm -rf bin');

    console.log('Updating package.json...');
    const packageJsonPath = path.join(projectPath, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    packageJson.name = projectName;
    delete packageJson.bin; // The new project doesn't need the bin entry
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    console.log('Installing dependencies...');
    execSync('npm install');

    console.log('Cleaning up git history...');
    execSync('rm -rf .git');
    execSync('git init -b main');
    execSync('git add .');
    execSync('git commit -m "feat: initial commit"');

    const setupRemoteAnswer = await promptForRemoteSetup();
    if (setupRemoteAnswer === 'y' || setupRemoteAnswer === 'yes') {
      const repoURL = await promptForRepoURL();
      if (repoURL) {
        try {
          console.log('Setting up remote repository...');
          execSync(`git remote add origin ${repoURL}`);
          console.log('Pushing to remote...');
          execSync('git push -u origin main');
          console.log('Remote repository set up successfully.');
        } catch (gitError) {
          console.error('\nAn error occurred while setting up the remote repository.');
          console.error('Please check the URL and ensure you have the correct permissions.');
          console.error('You can set it up manually later by running:');
          console.error(`  git remote add origin ${repoURL}`);
          console.error('  git push -u origin main');
        }
      }
    }

    console.log('\nDone! Your project is ready.\n');
    console.log(`To get started, run:\n`);
    console.log(`  cd ${projectName}`);
    console.log(`  npm run dev`);
  } catch (error) {
    console.error('An error occurred:', error);
    // Clean up the created directory if an error occurs
    console.log('Cleaning up failed installation...');
    fs.rmSync(projectPath, { recursive: true, force: true });
  }
}

main();
