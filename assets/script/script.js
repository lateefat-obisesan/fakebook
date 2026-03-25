'use strict';

import { Subscriber } from './Subscriber.js'

const currentUser = new Subscriber(
    '101',
    'Lateefat Obisesan',
    'lateefat_dev',
    'lateefatobi06@gmail.com',
    ['Web-Dev Tips', 'Product Design'],
    ['Winnipeg Developers', 'WITT'],
    true
);

const postButton = document.getElementById('button');
const textArea = document.getElementById('text');
const fileInput = document.getElementById('file');
const fileNameDisplay = document.getElementById('file-name'); 
const feed = document.getElementById('feed');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close');
const userIcon = document.getElementById('user'); 
const infoDiv = document.getElementById('info');

fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = fileInput.files[0].name;
    } else {
        fileNameDisplay.textContent = '';
    }
});

userIcon.addEventListener('click', () => {
    infoDiv.innerHTML = currentUser.getInfo(); // Injects your Name, ID, etc.
    modal.classList.remove('hide'); // Removes 'hide' to show the box
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hide'); 
});

postButton.addEventListener('click', (e) => {
    e.preventDefault(); // Stop the page from refreshing

    const textValue = textArea.value.trim();
    const file = fileInput.files[0];

    if (!textValue && !file) {
        alert('Please add text or an image.');
        return;
    }

    const postDate = new Date().toLocaleDateString();
    const newPost = document.createElement('div');
    newPost.classList.add('post-box');

    let imageHtml = '';
    if (file) {
        const imageUrl = URL.createObjectURL(file);
        imageHtml = `<img src="${imageUrl}" class="post-image">`;
    }

    newPost.innerHTML = `
        <div class="post-header" style="display: flex; align-items: center;">
        <span style="margin-left: auto; font-size: 12px; color: #fff;">${postDate}</span>
        </div>
        <p style="margin-top: 15px;">${textValue}</p>
        ${imageHtml}
    `;

    feed.prepend(newPost);
    textArea.value = '';
    fileInput.value = '';
    fileNameDisplay.textContent = '';
});