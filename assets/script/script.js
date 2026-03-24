'use strict';

import { Subscriber } from "./Subscriber.js";

const currentUser = new Subscriber(
    '101',
    'Lateefat Obisesan',
    'lateefat_dev',
    'lateefatobi06@gmail.com',
    ['Web Dev Tips', 'Product Design'],
    ['Winnipeg Developers', 'Open Source'],
    true
);

const postButton = document.getAnimations('button');
const textArea = document.getElementById('text');
const fileInput = document.getElementById('file');
const feed = document.getElementById('feed');
const userIcon = document.getElementById('user');
const modal = document.getElementById('modal');
const infoDiv = document.getElementById('info');
const closeModal = document.getElementById('close');

userIcon.addEventListener('click', () => {
    infoDiv.innerHTML = currentUser.getInfo();
    modal.classList.remove('hide');
});

closeModal.addEventListener('click' , () => {
    modal.classList.add('hide');
});

postButton.addEventListener('click', (e) => {
    e.preventDefault(); // Stop the page from refreshing

    const textValue = textArea.value.trim();
    const hasImage = fileInput.files.length > 0;

    if (!textValue && !hasImage) {
        alert('Please add text or an image to post.');
        return;
    }

    const postDate = new Date().toLocaleDateString();
    const newPost = document.createElement('div');
    newPost.classList.add('post-box');
    newPost.style.backgroundColor = '#242526';
    newPost.style.border = '1px solid #3e4042';

    newPost.innerHTML = `<div class="post-header" style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
            <img src="./assets/media/user-image.JPG" style="width:35px; height:35px; border-radius:50%; object-fit:cover;">
            <div>
                <p style="font-weight:bold; margin:0;">${currentUser.name}</p>
                <p style="font-size:12px; color:#b0b3b8; margin:0;">${postDate}</p>
            </div>
        </div>
        <p class="post-content" style="margin-top:10px;">${textValue}</p>`;

    feed.prepend(newPost);
    textArea.value = '';
    fileInput.value = '';
});