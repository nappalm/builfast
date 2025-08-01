#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const projectName = process.argv[2];

if (!projectName) {
  console.error('Please provide a project name.');
  process.exit(1);
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

async function main() {
  try {
    console.log(`Cloning the repository into ${projectPath}...`);
    execSync(`git clone ${gitRepo} ${projectPath}`);

    process.chdir(projectPath);

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
    execSync('git init');
    execSync('git add .');
    execSync('git commit -m "Initial commit"');

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
