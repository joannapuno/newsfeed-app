const newPostBox = document.getElementById('new-post-container');
const bottomNav = document.getElementById('bottom-nav');
const addPostBtns = document.getElementsByClassName('add-post-btn');
const dismissAddNewBtn = document.getElementById('dismiss-new-post-btn');


///// Show Add New Post Field /////
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
    addBtn.addEventListener('click', evt => showAddNewPostHandler())
}

dismissAddNewBtn.addEventListener('click', evt => dismissAddNewHandler());

///// Add New Post /////
const newPostForm = document.getElementById('newPostForm');
const publishPostBtn = document.getElementById('publish-post-btn');


publishPostBtn.addEventListener('click', evt => {
    const newPostCaption = document.getElementById('txt-new-post');
    const newPostAttachment = document.getElementById('post-img');
    let formData = new FormData();

    formData.caption = newPostCaption.value;
    formData.attachment = newPostAttachment.files;
    console.log(formData)
    console.log(newPostCaption.value)
    console.log(newPostAttachment.files)
})