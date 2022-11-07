# playground - typescript

A playground for typescript - POSTing and GETting shares.

## Dependencies 
- install dependencies by running `npm install`.
- make sure to provide a `.env` file like in the `.env_example` with the relevant environment vars.
## Running the app
### locally
- run `docker compose up mysql`
- run as 'dev' `npm run dev`
- run as 'prod' `npm run build` and then `npm run start`.
### dockerized
- run `docker compose up`

## APIs
- GET /share/:id
- POST /share { "sharingUserId": 3, "siteId": 3, "cycleId": 3 }