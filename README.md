[<img src="https://kikoda.com/wp-content/uploads/2019/07/Logo_White_bg.svg" width="300"/>](https://kikoda.com)
# craco-plugin-config-manifest

[![NPM](https://img.shields.io/npm/v/@kikoda/craco-plugin-config-manifest?color=39a356)](https://www.npmjs.com/package/@kikoda/craco-plugin-config-manifest)
[![License](https://img.shields.io/badge/license-Apache--2.0-blue)](https://github.com/KikodaCode/kikoda-craco-plugin-config-manifest.git/blob/main/LICENSE)

Use this craco-plugin-config-manifest to architect and model modern applications

## Install from NPM:
```
yarn add --dev @kikoda/craco-plugin-config-manifest

# or

npm install @kikoda/craco-plugin-config-manifest --save-dev
```

## Usage## Usage

### Generaged Config for webpack apps

Use this package and plugin in conjunction with `@kikoda/generated-config` and `@craco/craco` to inject config values depending on environment. Also see `@kikoda/generated-config-hooks` for pre-built React hooks to load config values from generated config files.

#### CRACO

Add this to your `craco.config.js`:

```typescript
import { ConfigManifestPlugin } from '@kikoda/craco-plugin-config-manifest';
import { GeneratedConfig } from '@kikoda/generated-config';

const { fileName } = new GeneratedConfig({
  stage: '<stage-name>',
  servicePath: './app',
});

module.exports = {
  plugins: [{ plugin: ConfigManifestPlugin(fileName) }],
};
```

#### Verbose Logging

Enable verbose logging by setting the `DEBUG` environment variable to 'true'


## Opening Issues

If you encounter a bug with this package, we want to hear about it. Before opening a new issue, search the existing issues to avoid duplicates.

When opening an issue, include the Kikoda Construct Library version, Node version, and stack trace if available. In addition, include the steps to reproduce when appropriate.

You can also open an issue for a feature request.

## Contributing

If you find an issue with this package and have a fix, please feel free to open a pull request following the [procedures](CONTRIBUTING.md).

## Testing

If you contribute to this package you can run the tests using `yarn test`.

## License

Unless explicitly stated otherwise all files in this repository are licensed under the Apache License Version 2.0.

This product includes software developed at Kikoda (https://www.kikoda.com). Copyright 2022 Kikoda, LLC.