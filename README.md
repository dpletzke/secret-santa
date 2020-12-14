# Secret Santa Pals
This is a webapp for friends to set a secret santa game, similar to [Drawnames.com](https://www.drawnames.com/).

## Features

Users select who they are, their address and wishlist, then an email is sent to their secret santa with the information. The host also receives an email when each person submits the form to verify when everyone has answered.

## Tech stack

The app is written with Express using EJS as the templating engine with jQuery. It also uses mailgun to supply the email api.  

## Setup

The dev forks the project, enters in name and email data, acquires a custom domain and setups mailgun with the custom domain. They then deploy. Follow the steps below:

1. Acquire a domain from a service such as [Namecheap](https://www.namecheap.com/)
2. Create an account with [Mailgun](https://www.mailgun.com/)
3. Setup mailgun's DNS records with your hosting platform.
4. Create `.env` using `.example.env` as a guide.
5. Create `.participants.js` using `.example.participants.js` as a guide.
6. Push to deployment with a service like Heroku.
7. Send link to your friends!

## Future Work

In the future this app will include styled templates for emails through mailgun.
Also more work should be done on the style of the app.