//Real Time Chatroom Section 17 starting #135 project preview setup
//#136. HTML Template
// #137. Connecting to Firebase
// #138. Chatroom Class & Adding Chats
//#139. Setting up a Real-time Listener
// #140. Complex Queries  this set up for eg gaming room
// #141. Updating the Room & Username
// #142. Creating a ChatUI Class 
// #143. Formatting the Dates
// #144. Sending New Chats
// #145. Changing Username & Local
// #146. Updating the Room
// #147. Testing the App

//DOM queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name'); 
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

//add a new chat
newChatForm.addEventListener('submit', e =>  {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
});

//update username
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    //update name via chatroom class
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    //now reset the form
    newNameForm.reset();
    //show then hide the update message
    updateMssg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => updateMssg.innerText = '', 3000);
});

//update the room
rooms.addEventListener('click', e => {
    //console.log(e);   //tab name BUTTON located
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));  
    }
});

//check local storage for a username
const username = localStorage.username ? localStorage.username : 'anon';

//class instances
const chatUI = new ChatUI(chatList);
//const chatroom = new Chatroom('general', 'Finn');     //copied from chat.js
const chatroom = new Chatroom('general', username);   //can now change Finn to username

//get the chats and render
chatroom.getChats((data) => {    
    // console.log(data);
    chatUI.render(data)
});
