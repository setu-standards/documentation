# Documentation repo

This is the repository with documentation and [Docusaurus](https://docusaurus.io/docs) setup to publish.

A few characteristics of this template:
* The app is configured to be deployed at virtual directory '/docs'.
* The app is configured in [docs-only mode](https://docusaurus.io/docs/docs-introduction#docs-only-mode)

You can add Markdown files in the [docs folder](./app/docs/).

Adapt the settings in [docusaurus.config.js](./app/docusaurus.config.js).

## Prerequisites

* Install NodeJS: https://nodejs.org/en/

## Test locally

> `cd app`

> `npm install`

> `npm run start`

Navigate to http://localhost:3000

## Build and run with Docker

> `docker compose up -d --build`

Navigate to http://localhost/docs
