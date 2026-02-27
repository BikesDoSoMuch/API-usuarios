const API_URL = 'http://localhost:8080/usuarios';

const userForm = document.getElementById('userForm');
const usersList = document.getElementById('usersList');
const formMessage = document.getElementById('formMessage');

function showMessage(message, type) {
    formMessage.innerHTML = `<div class="message ${type}">${message}</div>`;

    setTimeout(() => {
        formMessage.innerHTML = '';
    }, 4000);
}

function clearForm() {
    userForm.reset();
}

userForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const ageValue = document.getElementById('age').value.trim();

    const formData = {
        nome: document.getElementById('nome').value.trim(),
        email: document.getElementById('email').value.trim(),
        senha: document.getElementById('senha').value.trim(),
        idade: ageValue ? parseInt(ageValue) : null
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(error);
        }

        showMessage('Usuário cadastrado com sucesso!', 'success');
        clearForm();
        loadUsers();

    } catch (error) {
        showMessage('Erro ao cadastrar usuário', 'error');
        console.error(error);
    }
});

async function loadUsers() {
    try {
        const response = await fetch(API_URL);
        const users = await response.json();

        displayUsers(users);

    } catch (error) {
        usersList.innerHTML = '<p>Erro ao carregar usuários.</p>';
    }
}

function displayUsers(users) {
    if (!users || users.length === 0) {
        usersList.innerHTML = '<p>Nenhum usuário cadastrado.</p>';
        return;
    }

    usersList.innerHTML = users.map(user => `
        <div class="user-item">
            <div class="user-header">
                <strong>${user.nome}</strong>
                <span>ID: ${user.id}</span>
            </div>
            <div>Email: ${user.email}</div>
            <div>Idade: ${user.idade ?? 'Não informada'}</div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadUsers);
