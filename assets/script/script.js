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