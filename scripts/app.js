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

//DOM queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');

//add a new chat
newChatForm.addEventListener('submit', e =>  {
    e.preventDefault();
});

//class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'Finn');  //copied from chat.js

//get the chats and render
chatroom.getChats((data) => {    
    // console.log(data);
    chatUI.render(data)
});
