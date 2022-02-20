# Serverless TypeScript Template

This is a template to create lambda functions with Serverless framework and TypeScript support.

## Setup

You need to install the dependencies by running:

```sh
npm install
```

## Run it locally

To run it locally, just run the following command:

```sh
npm run offline
```

Once this is running, it's available at [http://localhost:4000](http://localhost:4000).

## Github actions

This template also contains github actions to execute the deployment via Github actions, but you will need to uncomment these lines in the `.github/workflows/main.yml` file:

```yaml
  # ...
  - run: npm ci
  - name: serverless deploy
    uses: serverless/github-action@master
    with:
      args: deploy
    env:
      TEST: ${{ secrets.TEST }}
```

> If you don't have github actions support, simply remove the `.github` folder.
