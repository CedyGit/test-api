
function ajouterLigneDonnees(data){
    const tableau = document.getElementById('donnees-tableau');
    const tbody = tableau.querySelector('tbody');

    const newRow = tbody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.textContent = data.title;
    cell2.textContent = data.body;
    cell3.textContent = data.userId;

}

document.getElementById('formulaire-ajout').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const userId = document.getElementById('userId').value;

    const newData = {
        title : title,
        body : body,
        userId : userId
    };

    fetch('https://jsonplacholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newData),
        headers: {
            'content-Type': 'application/json'
        }
    })

    .then(response => response.json())
    .then(data => {
        console.log('Nouvelle donnee :', data);

        ajouterLigneDonnees(data);

        document.getElementById('title').value = '';
        document.getElementById('body').value = '';
        document.getElementById('userId').value = '';
    })

    .catch(error => {
        console,error('Erreur de la methode POST : ', error);
    });
});

// recuperer les donnees
fetch('https://jsonplacholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log('Donnees recuperees depuis l\'API :', data);
        ajouterLigneDonnees(data);
    })

    .catch(error => {
        console.error('Erre ur lors de la  recuperation GET :', error);
    });