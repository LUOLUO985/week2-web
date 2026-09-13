const form = document.getElementById('user-form');
const tbody = document.getElementById('table-body');
const emptyBtn = document.getElementById('empty-table');


form.addEventListener('submit', function(e) {
    
    e.preventDefault(); 

    
    const username = document.getElementById('input-username').value.trim();
    const email = document.getElementById('input-email').value.trim();
    const isAdmin = document.getElementById('input-admin').checked ? 'X' : '-';
    const imageFile = document.getElementById('input-image').files[0];
    
    
    let imgTag = '';
    if (imageFile) {
        const imgUrl = URL.createObjectURL(imageFile);
        imgTag = `<img src="${imgUrl}" width="64" height="64" alt="user">`;
    }

    
    let existingRow = null;
    for (let i = 0; i < tbody.rows.length; i++) {
        if (tbody.rows[i].cells[0].innerText === username) {
            existingRow = tbody.rows[i];
            break;
        }
    }

    if (existingRow) {
        existingRow.cells[1].innerText = email;
        existingRow.cells[2].innerText = isAdmin;
        if (imageFile) existingRow.cells[3].innerHTML = imgTag; // 只有上传新图才替换
    } else {
        const newRow = tbody.insertRow();
        newRow.insertCell(0).innerText = username;
        newRow.insertCell(1).innerText = email;
        newRow.insertCell(2).innerText = isAdmin;
        newRow.insertCell(3).innerHTML = imgTag;
    }

    form.reset();
});
emptyBtn.addEventListener('click', function() {
    tbody.innerHTML = '';
});