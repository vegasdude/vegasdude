Yaml


version:

jobs:
  build:
   docker:
    - image: cimg/node:20.10
   steps:
    - checkout
    - run:
       name: Install
       command: npm ci
    - run:
       name: Build
       command: npm run build

  workflows:
   version: 2
   build_and_test:
    jobs: 
     - build