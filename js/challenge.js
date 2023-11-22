document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const likeButton = document.getElementById('like');
    const likesList = document.getElementById('likes');
    const pauseButton = document.getElementById('pause');
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');

    let intervalId = setInterval(() => {
        counter.innerText = parseInt(counter.innerText) + 1;
    }, 1000);

    plusButton.addEventListener('click', () => {
        counter.innerText = parseInt(counter.innerText) + 1;
    });

    minusButton.addEventListener('click', () => {
        counter.innerText = parseInt(counter.innerText) - 1;
    });

    likeButton.addEventListener('click', () => {
        const currentNumber = counter.innerText;
        const li = document.createElement('li');
        li.innerText = `Number ${currentNumber} has been liked!`;
        likesList.appendChild(li);
    });

    pauseButton.addEventListener('click', () => {
        if (pauseButton.innerText == "pause") {
            clearInterval(intervalId);
            plusButton.disabled = true;
            minusButton.disabled = true;
            likeButton.disabled = true;
            pauseButton.innerText = "resume";
        } else {
            intervalId = setInterval(() => {
                counter.innerText = parseInt(counter.innerText) + 1;
            }, 1000);
            plusButton.disabled = false;
            minusButton.disabled = false;
            likeButton.disabled = false;
            pauseButton.innerText = "pause";
        }
    });

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const commentInput = document.getElementById('comment-input');
        const newComment = document.createElement('p');
        newComment.innerText = commentInput.value;
        commentList.appendChild(newComment);
        commentForm.reset();
    });
});