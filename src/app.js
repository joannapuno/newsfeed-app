const newPostBox = document.getElementById('new-post-container');
const bottomNav = document.getElementById('bottom-nav');
const addPostBtns = document.querySelectorAll('.add-post-btn');
const dismissAddNewBtn = document.getElementById('dismiss-new-post-btn');
const noPostsView = document.getElementById('no-posts-container');

const newPostForm = document.getElementById('new-post-form');
const publishPostBtn = document.getElementById('publish-post-btn');
const newPostCaption = document.getElementById('txt-new-post');
const newPostAttachment = document.getElementById('post-attachment');

///// Show Add New Post Field /////
const showAddNewFormHandler = () => {
    
    if (!newPostBox.classList.contains('show')) {
        bottomNav.classList.add('hide');
        newPostBox.classList.add('show');
    }
    newPostForm.reset();
    publishPostBtn.disabled = true;
    
    document.querySelector('.attached-files-container') ? 
    document.querySelector('.attached-files-container').remove() : null;
    
    newPostCaption.addEventListener('input', () => {
        publishPostBtn.disabled = false;
    })
    newPostAttachment.addEventListener('change', () => {
        let previewContainer = document.querySelector('.new-post-caption');
            publishPostBtn.disabled = false;
            let selectedImgs = createImgSrcHandler([...newPostAttachment.files]);
            previewContainer.appendChild(selectedImgs);
        })
}

const dismissAddNewHandler = () => {
    bottomNav.classList.remove('hide');
    newPostBox.classList.remove('show');
}

const createImgSrcHandler = files => {
    let attachmentContainer = document.createElement('div');
    attachmentContainer.classList.add('attached-files-container');

    for (let file of files) {
        let img = document.createElement('img');
        let imgContainer = document.createElement('div');

        imgContainer.classList.add('img-container');
        img.src = URL.createObjectURL(file)

        imgContainer.appendChild(img)
        attachmentContainer.appendChild(imgContainer)
    };

    return attachmentContainer;
};

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
    if (formData.attachment.length) {
        attachment.style.display = 'block';
        let imgSrcs = createImgSrcHandler(formData.attachment);
        attachment.appendChild(imgSrcs);
    }

    if (formData.caption) {
        caption.style.display = 'block';
        caption.innerText = formData.caption;
    }

    cardsWrapper.prepend(card_c);

};


addPostBtns.forEach(btn => {
    btn.addEventListener('click', showAddNewFormHandler, false)
})
dismissAddNewBtn.addEventListener('click', dismissAddNewHandler, false);

publishPostBtn.addEventListener('click', evt => {
    evt.preventDefault();

    const todayDate = new Date();
    const dateFormatted = todayDate.toLocaleString('default',
        {
            month: 'long', day: 'numeric', year: 'numeric'
        });
    let formData = new FormData();

    formData.caption = newPostCaption.value;
    formData.attachment = [...newPostAttachment.files];
    formData.date = dateFormatted;

    noPostsView.style.display = 'none';

    createNewPostHandler(formData);
    dismissAddNewHandler();
})



