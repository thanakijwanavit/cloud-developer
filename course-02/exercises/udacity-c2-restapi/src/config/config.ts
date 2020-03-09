export const config = {
  "dev": {
    "username": "postgres",
    "password": "postgres",
    "database": "postgres",
    "host": "udacitypostgrestest.c9nhdgatw2gq.ap-southeast-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "ap-southeast-1",
    "aws_profile": "udagram",
    "aws_media_bucket": "udagram-nic-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
    "jwt": {
        "secret": "helloworld"
    }
}
