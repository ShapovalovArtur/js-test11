var smallArr = [
    {
        id: 101,
        firstName: 'Sue',
        lastName: 'Corson',
        email: 'DWhalley@in.gov',
        phone: '(612)211-6296',
        address: {
            streetAddress: '9792 Mattis Ct',
            city: 'Waukesha',
            state: 'WI',
            zip: '22178'
        },
        description: 'et lacus magna dolor...'
    },
    {
        id: 102,
        firstName: 'Hue',
        lastName: 'Gordon',
        email: 'DWhy@in.ov',
        phone: '(61-6296',
        address: {
            streetAddress: '9792 Mats Ct',
            city: 'Fsha',
            state: 'WEI',
            zip: '22378'
        },
        description: 'wet wlac'
    },
    {
        id: 103,
        firstName: 'Drue',
        lastName: 'Werson',
        email: 'wwehalley@in.gov',
        phone: '(612)321-626',
        address: {
            streetAddress: '22 attis Ct',
            city: 'Vreesha',
            state: 'WI',
            zip: '321178'
        },
        description: 'Xers mrr...'
    }
]

var table = document.querySelector('.table-container');
var rowTemplate = document.querySelector('row-template').content.querySelector('.table-row');


var renderPicture = function (i) {
    var picture = pictureTemplate.cloneNode(true);
    var pictureImg = picture.querySelector('.picture__img');
    var pictureLikes = picture.querySelector('.picture__likes');
    var pictureComments = picture.querySelector('.picture__comments');
    pictureImg.src = picturesArr[i].url;
    pictureLikes.textContent = picturesArr[i].likes;
    pictureComments.textContent = picturesArr[i].comments.length;
    picture.addEventListener('click', function () {
        window.preview.previewClickHandler(picture, i, picturesArr);
    });
    return picture;
};
