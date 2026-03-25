# FakeBook App

FakeBook is a simple web application that simulates a social media posting system. Users can create posts with text and images and view them in a feed.

## Features
- Create posts with text, images, or both
- Prevents empty posts (user must add text or image)
- Displays posts with profile picture, user name, date, and image
- Profile modal popup showing user information
- Uses JavaScript classes (User and Subscriber)

## Technologies Used
- HTML
- CSS
- JavaScript (ES Modules)

## Classes

### User (Base Class)
- id
- name
- userName
- email

### Subscriber (Derived Class)
- pages (array)
- groups (array)
- canMonetize (boolean)

## How It Works
Users create posts using the form. The post is added to the feed dynamically. Clicking the profile image opens a modal that displays user information using the getInfo() method.

## Live Demo
[lateefat-obisesan.github.io/fakebook/](https://lateefat-obisesan.github.io/fakebook/)

## Author
Lateefat Obisesan