import { KikodaOpenSourceProject, KikodaStandards } from '@kikoda/projen-templates';
import { YamlFile } from 'projen';
import { GithubCredentials } from 'projen/lib/github';
import { TypeScriptProject } from 'projen/lib/typescript';

const project = new TypeScriptProject({
  name: 'kikoda-craco-plugin-config-manifest',
  description:
    'CRACO plugin to generate an opinionated config manifest file used to load runtime configuration files in react apps',
  authorName: 'Kikoda, LLC',
  authorEmail: 'platform@kikoda.com',
  repository: 'https://github.com/KikodaCode/kikoda-craco-plugin-config-manifest.git',
  defaultReleaseBranch: 'main',
  keywords: ['configuration', 'craco', 'create-react-app', 'cicd', 'webpack', 'react'],
  stability: 'experimental',
  license: 'Apache-2.0',
  projenrcTs: true,
  devContainer: true,
  vscode: true,
  prettier: true,
  releaseToNpm: true,
  prettierOptions: KikodaStandards.PrettierOptions,
  bundledDeps: [],
  tsconfig: {
    compilerOptions: { esModuleInterop: true },
  },
  deps: ['@kikoda/generated-config'],
  devDeps: ['@kikoda/projen-templates', '@kikoda/generated-config'],
  peerDeps: ['webpack', 'webpack-manifest-plugin'],
  packageName: '@kikoda/craco-plugin-config-manifest',
  gitignore: [],
  githubOptions: {
    projenCredentials: GithubCredentials.fromApp(),
  },
  pullRequestTemplate: false,
  codeCov: true,
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['projen-workflows[bot]'],
  },
});

new YamlFile(project, 'codecov.yml', {
  obj: {
    coverage: {
      status: {
        patch: true,
      },
    },
  },
});

new KikodaOpenSourceProject(project, {
  title: 'craco-plugin-config-manifest',
});

project.synth();
