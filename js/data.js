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
var rowTemplate = document.querySelector('#row-template').content.querySelector('.table-row');


var renderPicture = function (i) {
    var row = rowTemplate.cloneNode(true);
    var rowId = row.querySelector('.id');
    var firstName = row.querySelector('.firstname');
    var lastName = row.querySelector('.lastname');
    var email = row.querySelector('.email');
    var phone = row.querySelector('.phone');
    var decription = row.querySelector('.decription');
    var streetaddress = row.querySelector('.streetAddress');
    var city = row.querySelector('.city');
    var state = row.querySelector('.state');
    var zip = row.querySelector('.zip');
    pictureImg.src = picturesArr[i].url;
    pictureLikes.textContent = picturesArr[i].likes;
    pictureComments.textContent = picturesArr[i].comments.length;
    picture.addEventListener('click', function () {
        window.preview.previewClickHandler(picture, i, picturesArr);
    });
    return picture;
};
