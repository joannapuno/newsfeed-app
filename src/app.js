const addPostHandler = () => {
    const newPostBox = document.getElementById('new-post-container');
    if(!newPostBox.classList.contains('show')) {
        newPostBox.classList.add('show');
    }
}

const addPostBtns = document.getElementsByClassName('add-post-btn');

for(let addBtn of addPostBtns) {
    addBtn.addEventListener('click', evt => {
        addPostHandler();
    })
}