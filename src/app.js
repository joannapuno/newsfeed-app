const newPostBox = document.getElementById('new-post-container');
const bottomNav = document.getElementById('bottom-nav');
const addPostBtns = document.querySelectorAll('.add-post-btn');
const dismissAddNewBtn = document.getElementById('dismiss-new-post-btn');
const noPostsView = document.getElementById('no-posts-container');

const newPostForm = document.getElementById('new-post-form');
const publishPostBtn = document.getElementById('publish-post-btn');
const newPostCaption = document.getElementById('txt-new-post');
const newPostAttachment = document.getElementById('post-img');

///// Show Add New Post Field /////
const showAddNewFormHandler = () => {

    if(!newPostBox.classList.contains('show')) {
        bottomNav.classList.add('hide');
        newPostBox.classList.add('show');
    }
    newPostForm.reset();
    publishPostBtn.disabled = true;

    [newPostCaption, newPostAttachment].forEach(element => {
        element.addEventListener('change', evt => {
            publishPostBtn.disabled = false;
        })
    });
}

const dismissAddNewHandler = () => {
    bottomNav.classList.remove('hide');
    newPostBox.classList.remove('show');
}

///// Add New Post /////
const createNewPostHandler = formData => {
    const cardsWrapper = document.querySelector('.cards-wrapper');
    const card_orig = document.querySelector('.card-item-orig');
    const card_c = card_orig.cloneNode(true);

    card_c.classList.remove('card-item-orig');
    card_c.classList.add('card-item');

    const dateStamp = card_c.querySelector('.date-stamp');
    const caption = card_c.querySelector('.caption');
    const attachment = card_c.querySelector('.card-attachment');

    
    dateStamp.innerText = formData.date;
    caption.style.display = 'none';
    attachment.style.display = 'none';
    
    //Check which has content
    if(formData.attachment){
        attachment.style.display = 'block';
        var myImage = document.createElement('img');
        myImage.src = URL.createObjectURL(formData.attachment)
        attachment.appendChild(myImage);
    }

    if(formData.caption) {
        caption.style.display = 'block';
        caption.innerText = formData.caption;
    }

    cardsWrapper.appendChild(card_c);

};



addPostBtns.forEach(btn => {
    btn.addEventListener('click',showAddNewFormHandler, false)
})
dismissAddNewBtn.addEventListener('click',dismissAddNewHandler, false);

publishPostBtn.addEventListener('click', evt => {
    const todayDate = new Date();
    const dateFormatted = todayDate.toLocaleString('default', 
    { 
        month: 'long', day: 'numeric', year: 'numeric' 
    } ); 
    let formData = new FormData();

    formData.caption = newPostCaption.value;
    formData.attachment = newPostAttachment.files[0];
    formData.date = dateFormatted;
    console.log(formData)

    noPostsView.style.display = 'none';
    

    createNewPostHandler(formData);
    dismissAddNewHandler();
})



