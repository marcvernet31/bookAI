# AskMyBook

AskMyBook is a service that is able to answer questions from a specific book using embedding search. This project is inspired by an [already existing version](https://github.com/slavingia/askmybook), the main difference being that my version is implemented with *Ruby on Rails* and *React*.

## Installation
In order to have a connection with OpenAI library you will need an (API access key)[https://platform.openai.com/account/api-keys]. You will need to create a `.env`file with the key on the root directory (following the example of `.env-example`).
If you want to run the script to generate the embeddings, you will need to add a `.env` file on `/scripts`directory.

With the API key set up, follow these steps:
```
$> npm install
$> bundle install
$> bin/rails db:migrate RAILS_ENV=development
$> rails server
```
Optionally, you can execute the script to generate the embedding with:
```
$> cd scripts
$> ruby pdf_to_pages_embeddings.rb --pdf book.pdf
```
The generated files need to be moved to `app/assets/resources`.

## How it works

## Lessons learned


https://gorails.com/deploy/ubuntu/20.04
https://www.codewithjason.com/install-nginx-passenger-ec2-instance-rails-hosting/
