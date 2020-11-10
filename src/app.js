const newPostBox = document.getElementById('new-post-container');
const bottomNav = document.getElementById('bottom-nav');
const addPostBtns = document.getElementsByClassName('add-post-btn');
const dismissAddNewBtn = document.getElementById('dismiss-new-post-btn');

const showAddNewPostHandler = () => {
    if(!newPostBox.classList.contains('show')) {
        bottomNav.classList.add('hide');
        newPostBox.classList.add('show');
    }
}

const dismissAddNewHandler = () => {
    bottomNav.classList.remove('hide');
    newPostBox.classList.remove('show');
}

for(let addBtn of addPostBtns) {
    addBtn.addEventListener('click', evt => showAddNewPostHandler() )
}

dismissAddNewBtn.addEventListener('click', evt => dismissAddNewHandler() );
