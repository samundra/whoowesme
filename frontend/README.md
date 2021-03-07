<h1 align="center">Whoowesme - Frontend</h1>
<div>
    <p align="center">:construction: This project is still a work in progress :construction:</p><br/>
</div>
<div>

**Disclaimer:** This project is not ready yet. Some of the parts may be broken. I will keep on adding new
features when I have time.

### Project Introduction

**Title:** Who Owes Me

**About:** A project to keep track of money. We share money with friends and often forget to keep track. This
project will be home for those money.

### Why this project

- Learn more about ReactJS and experiment new reactjs packages
- Learn more about Typescript
- Use knowledge gained to create a simple project enough to explore tech stacks.

### How to setup this project in local machine?

```txt
- git clone https://github.com/samundra/whoowesme
- cd whoowesme
- yarn install
- yarn run start
```

Then browse to `http:/localhost:3000`

### Storybooks

Run storybook with `yarn run storybook` and then follow on-screen guide to open storybook page

### Hygen Code Generator

Install hygen `npm install -g hygen` Install eslint_d `npm install -d eslint_d`

### Available Generators

```bash
$ hygen comp new --name {NewComponentName}
$ hygen page new --name {NewPageName} --routePath "/user/1"

## Example
# hygen page new ManageOrder --routePath "user/manage-order"
```

Making changes to Generators If you make changes to generators and have to commit it to repository then use
--no-verify to bypass husky linter. Otherwise, it will report error and you won't be able to commit it.

```bash
$ git commit -m 'commit message' --no-verify
```

### TODO

#### Backend (API)

#### Frontend (UI)
