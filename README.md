# JM's ƒunctional React component Boilerplate
 A Functional React component Boilerplate which makes use of React Hooks [DEMO](https://jmdisuanco.github.io/react-fn-component-boilerplate)
 
## Features
    - Development preconfigured
        - Storybook
        - Webpack
    - Front-End
        - Ant Design
        - React Hooks
            - useContext `so components deep on the tree can easily access the state`
            - useState
            - immutability via `immutable-helper `


## Getting Started via GIT
- Clone this repository
    - `git clone https://github.com/jmdisuanco/react-fn-component-boilerplate`
- Change directory
    - `cd jm-fn-react-component-boilerplate`
- Remove git reference
    -`rm -rf .git`
- Install Package Dependencies
    - `npm i` or `yarn`
- Start storybook
    - `npm start`
- Access the story on `http://localhost:9999`


## Getting Started using degit
- download the repository to your project directory 
    - `npx degit https://github.com/jmdisuanco/react-fn-component-boilerplate my-project`
- Change directory
    - `cd my-project`
- Install Package Dependencies
    - `npm i` or `yarn`
- Start storybook
    - `npm start`
- Access the story on `http://localhost:9999`


## CLI commands
#### Basic Commands
|Command| Description|
|--|--|
|`npm start`| Start Storybook on port `9999` |
|`npm run build`| Build the package outputs to .`/dist/index.js` |
|`npm run build-storybook`| Build Storybook |

#### Version Management Commands
_must be run after git commits_

|Command| Description|
|--|--|
|`npm run pub:patch`| update package patch version 0.0.x |
|`npm run pub:minor`| update package minor version 0.x.0 |
|`npm run pub:major`| update package major version x.0.0 |

### Publish to Package registry
_will run `build` before publishing & will publish to `git repository` after_

|Command| Description|
|--|--|
|`npm run publish`|publish to NPM registry|

### Contributions are most welcome
Please Fork and Send Pull Request for the improvement of this boilerplate.

### License 
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details


