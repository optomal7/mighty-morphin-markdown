# mighty-morphin-markdown
A markdown editor to help you fight evil and get through high school on a weekly basis.
![alt text](http://www.onetruegreenberg.com/images/mmmarkdown.png "project demo image")

[Live Website](https://tranquil-island-38005.herokuapp.com/)

## What is this madness?

It's a markdown editor so you can see in real time what your markdown will look like without having to go through multiple rounds of saving and checking to see if you got it just right. Just start typing in the left hand panel and watch it appear like magic on the right hand pane.

Minor note: While there is a save button, it's saved to the server file system not a database or on your computer (unless that is where you're hosting it). The live deployment I set up is a heroku free tier web app, so after an hour it will spin down and anything saved to the file system will be lost.

## Install & Run

After cloning down the app to your computer navigate to the projects root directory and run the following commands:

```
  $ npm install
  $ node app / npm start
```
