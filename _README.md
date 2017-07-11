# Repeat.it

Repeat.it is a web app that allows users to create and study flashcards online. After signing into Repeat.it, users can create flashcard decks, edit existing decks, study their decks in random order and delete any decks they no longer need. A unique feature of Repeat.it is the ability to style cards as code, allowing them to create flashcards for studying various programming language snippets.

## Team

  - __Product Owner__: James Quillin
  - __Scrum Master__: Sheena Ramirez
  - __Development Team Members__: Patrick Tang, Junji Otsuka, Ciarán Conners

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    2. [Tasks](#tasks)
4. [Team](#team)
5. [Contributing](#contributing)

## Usage

Log-in/Sign-in

On your first visit to Repeat.it, create a user name and password and you'll automatically be logged into the site. You'll need to be signed into Repeat.it any time that you would like to review or change decks that you've created.

Home page

Click the "Create a new deck" button or the deck creation link at the top of the page to start making flashcards. Any decks that you create will later be listed on the home page, where you can also choose to study, edit or delete existing decks. When you're finished studying, click "Log out" in the top right corner of the screen to end your session.

Create/edit deck pages

Type the front and back content of each card in the designated text areas and create a card by hitting enter or the "Add card" button. Cards can be deleted and rearranged within the decks. To style a card as code click the button on the top right corner of the card. Click "Click to save the deck" at the bottom of the page when you're done with your changes.

Study deck page

Click on the card to view the answer to the current question. Use the navigation buttons below the flashcard to choose whether to view the next card or a previous card. When you're done studying, click "Save and quit" to return to the home page.

See [here](https://www.youtube.com/watch?v=dQw4w9WgXcQ) for more details.

## Requirements

- AngularJS 1.6.4 (included as CDN)
- Angular-route (included as CDN)
- bcrypt
- body-parser
- express
- mongoose
- mongoDB
- Bootstrap (included as CDN)
- Highlight.js (included as CDN)

## Development

### Installing Dependencies

From within the root directory:

```
npm install
```
### Tasks

In order to open the Node server and the MongoDB server, from within the root directory:

```
node server.js
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines and ideas to extend the app.

##############################################################
    NEW CONTRIBUTIONS TO VERSION 2 README (LEGACY SPRINT):
##############################################################

## Team

  - __Team Name__: Team Vort
  - __Product Owner__: Himanshu Pant
  - __Scrum Master__: Andrew Foresi
  - __Development Team Members__: Doug Lyford, Semie Rogers

## New Features

- Password reset function
    - Enter a randomly generated reset code sent to your email address to reset your account’s password

- Deck categories
    - New ability to categorize decks based on their subject
    - Each category can have an unlimited amount of decks
    - To create a new category or add a deck to an existing one, simply enter the proper deck name in the form when creating a new deck

- Multiple choice card
    - Can provide between 2-5 options for answers
    - Only one answer can be selected as the “Correct” answer
    - Dynamic card flip styled differently for correct/incorrect answer

- Image cards
    - Having image cards becomes effective for studying subjects with visual characteristics
    - This new functionality still allows the user to include an answer on the back of the image card

- Shuffle deck
    - Studying cards in a repetitive order can be counter productive, this new feature allows the user to randomize the order in which cards will appear as they are studying

- Progress tracker for iterating through the cards in a deck & start over function
    - This feature makes it easy to determine which card you are currently studying in a deck or whether or not you have seen each card once
    - After you have iterated through each card in the deck, you are given the option of starting over

- New design and layout that is more user friendly
    - Improvements were made on top of the styles and layout originally included in version 1
    - The new layout makes it much easier for the user to logically determine where to navigate to on the current page to get a desired result


## Developer Notes

- Nodemailer sends emails from the server using the following Gmail account
    - Email: repeatit8521475@gmail.com
    - Password: admin1010
    - You can access nodemailer from the route on line 176 pf routes.js


