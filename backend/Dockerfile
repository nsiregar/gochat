FROM golang:1.13.0-alpine3.10

RUN mkdir /app
Add . /app

WORKDIR /app
RUN go mod download
RUN go build -v
