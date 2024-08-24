<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';

const users = ref([])
const open = ref(false)
const titles = ["Last name", "First name", "Age", "E-mail", "Role", "Registered at"]
const lastNameContent = ref("")
const firstNameContent = ref("")
const ageContent = ref("")
const emailContent = ref("")
const selectedRole = ref('false')
const errors = ref([])
const successMessage = ref("")
let disableButton = ref(false)
const deletePopupOpen = ref(false)
const userToDelete = ref(null)
const deleteConfirmMessage = ref("")
const editPopupOpen = ref(false)
const isEditing = ref(false)


async function getUsers() {
    try {
        const response = await axios.get("http://localhost:8000/people/getPeople")
        users.value = response.data
    } catch (error) {
        console.error(error)
    }
}

onBeforeMount(async() => {
    await getUsers()
})

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  function addUsers() {
    lastNameContent.value = ""
    firstNameContent.value = ""
    ageContent.value = ""
    emailContent.value = ""
    selectedRole.value = "false"
    isEditing.value = false
    open.value = true
}

async function validForm() {
    errors.value = [];

    if (!lastNameContent.value || lastNameContent.value.length < 2) {
        errors.value.push("Le nom doit comporter au moins 2 caractères.");
    }

    if (!firstNameContent.value || firstNameContent.value.length < 2) {
        errors.value.push("Le prénom doit comporter au moins 2 caractères.");
    }

    if (!ageContent.value) {
        errors.value.push("L'âge est requis.");
    }

    if (!emailContent.value || !emailContent.value.includes('@') || !emailContent.value.includes('.')) {
    errors.value.push("L'email doit être valide.");
    }

    if (errors.value.length) {
        return;
    }

    try {
        const user = {
            firstName: firstNameContent.value.charAt(0).toUpperCase() +
            firstNameContent.value.slice(1).toLowerCase(),
            lastName: lastNameContent.value.toUpperCase(),
            age: ageContent.value,
            email: emailContent.value,
            role: selectedRole.value === 'true'
        };

        if (isEditing.value) {
            await axios.put(`http://localhost:8000/people/editPeople/${user.email}`, user)
            successMessage.value = "L'utilisateur a été modifié avec succès."
        } else {
            await axios.post("http://localhost:8000/people/postPeople", user)
            successMessage.value = "L'utilisateur a été enregistré avec succès."
        }

            await getUsers()
            
            successMessage.value = "L'utilisateur a été enregristé avec succès."
            disableButton.value = true
            setTimeout(() => {
                successMessage.value = ""
                cancelForm()
                disableButton.value = false
            }, 1000)
         
    } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 500) {
            errors.value.push("Cette e-mail existe déjà, veuillez en utiliser une autre.");
        }
        return;
    }
}

function cancelForm() {
    lastNameContent.value = ""
    firstNameContent.value = ""
    ageContent.value = ""
    emailContent.value = ""
    selectedRole.value = "false"
    errors.value = []
    open.value = false
}

function deleteUser(email) {
    userToDelete.value = email
    deletePopupOpen.value = true
}

async function confirmDelete() {
    try {
        await axios.delete(`http://localhost:8000/people/deletePeople/${userToDelete.value}`)

        deleteConfirmMessage.value = "L'utilisateur a bien été supprimé."
        setTimeout(() => {
            deleteConfirmMessage.value = ""
            deletePopupOpen.value = false
        }, 1000)
        await getUsers()
    } catch (error) {
        console.error(error)
    }
}

function editUser(user) {
    lastNameContent.value = user.last_name
    firstNameContent.value = user.first_name
    ageContent.value = user.age
    emailContent.value = user.email
    selectedRole.value = user.role ? "true" : "false"
    isEditing.value = true
    open.value = true
}


</script>


<template>
<body>
    <header class="header-top-page">
        <h1>People</h1>
        <button class="add-users" @click="addUsers">Ajouter un utilisateur</button>
    </header>
    <main>
        <div class="li-header">
            <div v-for="(title, i) in titles" :key="i" class="li-title">
                {{ title }}
            </div>
        </div> 
        <section v-for="(user, i) in users" :key="i" class="users">
            <div class="user-params-wrapper">
                <div class="user-param">{{ user.last_name }}</div>
                <div class="user-param">{{ user.first_name }}</div>
                <div class="user-param">{{ user.age }}</div>
                <div class="user-param">{{ user.email}}</div>
                <div class="user-param">{{ user.role ? "Admin" : "Membre" }}</div>
                <div class="user-param">{{ formatDate(user.registered_at.slice(0, 10)) }}</div>
            </div>
            <div class="button-user">
                <button class="edit" @click="editUser(user)">Edit</button> <button class="delete" @click="deleteUser(user.email)" >Delete</button>
            </div>
        </section>
    </main>
    <div class="popup-overlay" :class="{open: deletePopupOpen}">
        <div class="popup-content">
            <p v-if="!deleteConfirmMessage" class="p-delete-popup">{{ userToDelete ? "Etes-vous sûr de vouloir supprimer cet utilisateur ?" : "" }}</p>
            <p v-else class="div-success">{{ deleteConfirmMessage }}</p>
            <div class="button-delete-popup">
                <button v-if="!deleteConfirmMessage" @click="confirmDelete" class="delete">Delete</button>
                <button v-if="!deleteConfirmMessage" @click="deletePopupOpen = false" class="cancel-delete-popup">Cancel</button>
            </div>
        </div>
    </div>
    <div class="popup-overlay" :class="{open: open}">
    <div class="popup-content">
        <form action="" class="form">
            <div>
                <label for="last-name">Last name</label>
                <input type="text" class="input-last-name" id="last-name"
                required minlength="2" v-model="lastNameContent">
            </div>
            <div>
                <label for="first-name">First name</label>
                <input type="text" class="input-first-name" id="first-name"
                required minlength="2" v-model="firstNameContent">
            </div>
            <div>
                <label for="age">Age</label>
                <input type="number" class="age" id="age"
                required v-model="ageContent">
            </div>
            <div>
                <label for="email">E-mail</label>
                <input type="email" class="email" id="email"
                required v-model="emailContent">
            </div>
            <div>
                <fieldset class="choice-role">
                    <legend>Select a role : </legend>
                    <input type="radio" id="membre" name="role" value="false" v-model="selectedRole">
                    <label for="membre">Membre</label>
                    <input type="radio" id="admin" name="role" value="true" v-model="selectedRole">
                    <label for="admin">Admin</label>
                </fieldset>   
            </div>
            <div v-if="errors.length" class="div-error">
                <p v-for="error in errors" :key="error">{{ error }}</p>
            </div>
            <div v-if="successMessage" class="div-success">
                {{ successMessage }}
            </div>
        </form>
        <div class="div-button">
          <button v-if="!successMessage" class="button-form submit" @click="validForm" :disabled="disableButton">{{ isEditing ? "Edit" : "Submit"}}</button>
          <button v-if="!successMessage" class="button-form cancel" @click="cancelForm" :disabled="disableButton">Cancel</button>
        </div>
    </div>
    </div>
</body>
</template>

<style lang="scss" scoped>

body {
    width: 100%;
    background-color: rgba(245, 245, 245, 1);
}

.header-top-page {
    max-width: 1110px;
    margin: 0 auto 30px auto;
    height: 103px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);

    h1 {
        font-weight: bold;
        font-size: 24px;
    }

    .add-users {
        background-color: rgb(178, 216, 240);
        font-size: 15px;
        font-weight: 700;
        color: black;
        padding: 10px 15px;
        border-radius: 10px;
        cursor: pointer;

        &:hover{
            color: white;
            background-color: darken(rgb(178, 216, 240), 25%);
        }
    }
}

main {
    max-width: 1110px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 5px;
    background-color: rgba(245, 245, 245, 1);

    .li-header {
        width: 971px;
        display: flex;
        justify-content: space-between;
        border: solid 1px rgba(0, 0, 0, 0.5);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background-color: white;
        

        .li-title {
            width: 150px;
            display: inline-block;
            flex-basis: 0;
            text-align: center;
            padding: 10px 15px;
            border-right: solid 1px rgba(0, 0, 0, 0.5) ;
            font-size: 18px;
            font-weight: 600;
            height: 100%;
            

            &:last-child {
                border-right: solid 0px rgba(0, 0, 0, 0.5)
            }
        }

        .li-title:nth-child(1) { 
            flex-grow: 18;
        }

        .li-title:nth-child(2) { 
            flex-grow: 18;
        }

        .li-title:nth-child(3) { 
            flex-grow: 5;
        }

        .li-title:nth-child(4) { 
            flex-grow: 34;
        }

        .li-title:nth-child(5) {
            flex-grow: 8;
        }

        .li-title:nth-child(6) { 
            flex-grow: 17;
        }

    }

    .users {
        display: flex;
        justify-content: space-between;

        .user-params-wrapper {
            display: flex;
            justify-content: space-between;
            width: 973px;
        }

        .user-param{
            width: 150px;
            display: inline-block;
            flex-basis: 0;
            text-align: center;
            padding: 10px 15px; 
            border-right: solid 1px rgba(0, 0, 0, 0.5);
            border-bottom: solid 1px rgba(0, 0, 0, 0.5);
            font-size: 16px;
            font-weight: 400;
            background-color: white;
        }

        .user-param:nth-child(1) { 
            flex-grow: 18;
            border-left: solid 1px rgba(0, 0, 0, 0.5);
        }

        .user-param:nth-child(2) { 
            flex-grow: 18;
        }

        .user-param:nth-child(3) { 
            flex-grow: 5;
        }

        .user-param:nth-child(4) { 
            flex-grow: 34;
        }

        .user-param:nth-child(5) {
            flex-grow: 8;
        }

        .user-param:nth-child(6) { 
            flex-grow: 17;
        }

        .button-user {
            width: 100%;
            text-align: center;
            background-color: rgba(245, 245, 245, 1);
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-bottom: solid 1px rgba(0, 0, 0, 0.5);
            

            button {
                height: 25px;

                &:hover {
                    cursor: pointer;
                }
            }

            .edit {
                    background-color: rgb(47, 95, 255);
                    color: white;
                    font-weight: 600;
                }  
        }
    }

    .users:last-of-type .button-user {
        border-bottom: none;
    }
}

.p-delete-popup {
    margin-bottom: 15px;
}

.button-delete-popup {
    max-width: 383px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
}

.cancel-delete-popup {
    font-weight: 600;
    font-size: 16px;
    background-color: rgb(231, 231, 231)
}

.delete {
    background-color: rgb(255, 47, 47);
    color: white;
    font-weight: 600;
    font-size: 16px;
}  

.popup-overlay {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: none;
}

.open {
  display: block;
}

.popup-content {
  width: 510px;
  text-align: center;
  background-color: rgb(57, 56, 61);
  color: white;
  padding: 15px 19px 15px 15px;
  position: absolute;
  border: 1px solid rgb(155, 155, 155);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}

.form div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
}

input {
    margin-top: 5px;
    background-color: rgb(32, 32, 34);
    border: solid 1px rgb(121, 121, 153);
    color: white;
    font-size: 16px;
    height: 18px;
    width: 100%;
}

.choice-role {
    display: flex;
    align-items: center;
    
}

.choice-role legend {
    margin-bottom: 10px;
    margin-left: -32px;
}

.choice-role label {
    margin-top: -5px;
    margin-right: 5px;
}

.choice-role input[type="radio"] {
    margin-right: 5px;
    margin-bottom: 10px;
}

.div-button {
  display: flex;
  justify-content: space-between;
}

.button-form {
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;  
}

.submit {
      background-color: rgb(31, 143, 143);
      color: white;
      &:hover {
      background-color:darken(rgb(31, 143, 143) ,10%)
    }
}

.cancel {
  background-color: rgb(102, 3, 3);
  color: white;
  &:hover {
      background-color:lighten(rgb(102, 3, 3) ,10%)
    }
}

.div-error {
    color: red;
    margin-bottom: 10px;
}

.div-success {
    color: rgb(1, 190, 1);
}
</style>