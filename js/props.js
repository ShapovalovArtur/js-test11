
var row = document.querySelector('.table-row');
var props = document.querySelector('.table-row__properties');
row.addEventListener('click', function() {
    props.classList.toggle('hidden');
});