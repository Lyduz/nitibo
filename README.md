# Nitibo

#### A Nativescript-Vue Class Component Starter Template Using Module-Oriented Structure.

## Module-Oriented Structure

```bash
├── app
│   ├── App_Resources
│   ├── modules
│   │   ├── auth
│   │   │   ├── repository
│   │   │   │   ├── auth.api.ts
│   │   │   │   ├── auth.types.ts
│   │   │   │   └── index.ts
│   │   │   └── store
│   │   │       ├── actions.ts
│   │   │       ├── getters.ts
│   │   │       ├── index.ts
│   │   │       ├── mutations.ts
│   │   │       └── state.ts
│   │   ├── chart
│   │   │   ├── routes
│   │   │   │   └── index.ts
│   │   │   ├── store
│   │   │   └── views
│   │   │       ├── chart.vue
│   │   │       └── index.ts
│   │   ├── home
│   │   └── social
│   ├── repository
│   ├── router
│   ├── store
│   ├── App.vue
│   ├── main.ts
│   ├── package.json
│   └── styles.scss
├── types
│   ├── env.d.ts
│   ├── nativescript-vue.d.ts
│   └── vue-sfc.d.ts
├── .babelrc
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .prettierrc
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.esm.json
├── tsconfig.json
└── webpack.config.js
```

## The App/ Directory

> The **App/** namespace is equvalent to **src/** in other Vue projects. The TSLINT reads files frim **App/** and **types** with the following extension:

- \*.ts
- \*.tsx
- \*.vue
- \*.js

### modules/

> The approach is inspired by Domain-Driven Design (DDD), to focus the structure on every feature (per modules). Each modules may contain the following sub-items:

- routes/ - contains the modules' navigator route
- repository/ - contains the modules' API calls which extends the base API
- store/ - contains the modules' vuex store configurations
- views/ - contains the `view` of the application. The Component/ is also placed here for easy referencing

### repository/

> Contains the base repository initiliazation. By default, the project uses REST API calls via axios

### router/

> Injects all the declared routes in modules and inject to the Vue instance

### store/

> Injects all the declared modules store and inject to the Vue instance

### App.vue

> The main vue file

### main.ts

> the main Typescript file

## The types/ Directory

> This directory includes Typescript shims files for global and explicit parsing. E.g `env.d.ts`

## Environmental Variables

> Environment variables are set in the `webpack.config.js` file within the snippet below:

```js
plugins: [
            // ... Vue Loader plugin omitted
            // make sure to include the plugin!
            new VueLoaderPlugin(),
            // Define useful constants like TNS_WEBPACK
            new webpack.DefinePlugin({
                "global.TNS_WEBPACK": "true",
                "TNS_ENV": JSON.stringify(mode),
                "TNS_API_URL": (mode === "production") ? JSON.stringify("https://jsonplaceholder.typicode.com") : JSON.stringify("https://jsonplaceholder.typicode.com"),
                "process": "global.process"
            }),

            ...
```
> IMPORTANT: TNS_ENV returns mode `development or production`. This is important during builds.

## Project Setup

- Clone the project [nitibo master branch (latest stable release)](https://github.com/lyduz/nitibo)
- Confirm from your machine that nativescript is properly installed. Run `tns doctor` and see results
- `cd` to project and run `npm install`
- You may configure your emulators now for [android](https://docs.nativescript.org/tooling/android-virtual-devices) and [iOS](https://docs.nativescript.org/start/ns-setup-os-x)

## Development Mode

- To start development with [android](https://www.android.com), run `npm run android`
- To start development with [iOS](https://developer.apple.com/ios/), run `npm run ios`
- Run the configured linter using `npm run lint`
- Run and fix the configure linter using `npm run lint-and-fix`
- Run vue devtools using `npx vue-devtools` and in another terminal, run the platform with the commands above (`npm run android or npm run ios`). Please follow this awesome guide from [nativescript-vue docs](https://nativescript-vue.org/en/docs/getting-started/vue-devtools/)
- You may use the default `tns` commands as usual (e.g `tns run android --bundle, tns run ios --bundle`)
- Append the `--device <device-id>` when using actual devices for [android](https://docs.nativescript.org/tooling/docs-cli/project/testing/run-android) and [iOS](https://docs.nativescript.org/tooling/docs-cli/project/testing/run-ios)

## Production Mode (Docs WIP)

- Publish your android application following this [guide](https://docs.nativescript.org/tooling/publishing/publishing-android-apps)
- Publish your iOS application following this [guide](https://docs.nativescript.org/tooling/publishing/publishing-ios-apps)

## Debugging vs Production

During usual run, project runs with following settings -

1. Code is **not** minified
2. Vue.config.silent is false, so every component creation is logged

```bash
# Build, watch for changes and debug the application
tns debug <platform> --bundle
```

To minify code, and prevent Vue logs -

```bash
# Build for production
tns build <platform> --bundle --env.production

tns run <platform> --bundle --env.production
```

## Technologies Used

- [Nativescript](https://nativescript.org)
- [VueJS](https://vuejs.org/)
- [Nativescript-Vue](https://nativescript-vue.org)
- [Nativesript-Vue-Navigator](https://github.com/nativescript-vue/nativescript-vue-navigator)
- [Typescript](https://typescriptlang.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Vue-Class-Component](https://class-component.vuejs.org/)
- [Axios](https://github.com/axios/axios) for REST API

## Issues

> Please file issues to further improve this project here https://github.com/Lyduz/nitibo/issues

- Major Issue: HRM run for checking linters. See https://github.com/Lyduz/nitibo/issues/7

## Pull Request

> Contributions are the most welcome. To request changes, please follow the following:

- Always branch out with a branch name format: `feature/*` for feature related changes or `bugfix/*` for bug related changes
- No direct push to master branch
- All changes are subject for reviews

## TODO

- Fix major issues [#7](https://github.com/Lyduz/nitibo/issues/7)
- Finish production documentation
- Non-breaking upgrade and up to date with latest nativescript core versions (both android and iOS)
- Documentation for optimization
- Preview support and documentation
- CI with TravisCI

## Contributors ✨
[![](https://avatars0.githubusercontent.com/u/38805756?s=90&u=96545a7174420f0ae00a9511c74e6ed74a9e5319&v=4)](https://github.com/kabaluyot)
[![](https://avatars3.githubusercontent.com/u/25500525?s=90&u=dca9d68091f2cde34fc93b3ca5cfe2a65d113dc0&v=4)](https://github.com/rttolipas)

### Thank you so much to our contributors.
