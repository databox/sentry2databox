# Event counts per project

Extract [Sentry](https://sentry.io/) event counts per project via API and load it to [Databox](https://databox.com).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Sentry API token. Find or create it [here](https://sentry.io/api/)
- Databox push token. Read more how to get one [here](https://developers.databox.com/api/#get-your-token)
- Docker or NodeJS v8.x.x for running code

### Installing

Copy code from Github to local machine

```
git clone https://github.com/databox/sentry2databox
```

Install dependencies

```
cd sentry2databox
npm install
```

Sync data

```
export SENTRY_TOKEN=<your-sentry-token>
export SENTRY_ORG=<your-sentry-organization>
export DATABOX_TOKEN=<your-databox-token>

./bin/sync-data
```

## Environment variables

| name            | description                    | required       |
| --------------- | ------------------------------ | -------------- |
| `SENTRY_TOKEN`  | Sentry API token               | yes            |
| `SENTRY_ORG`    | Sentry organization slug       | yes            |
| `DATABOX_TOKEN` | Databox data source token      | yes            |
| `LAST_X_DAYS`   | Retrieve data for last X days. | No. Default: 1 |

## Deployment

You can deploy this code to Heroku and setup a scheduler to regularly sync your data from Sentry to Databox

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
