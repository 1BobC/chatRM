//Real Time Chatroom Section 17 starting #135 project preview setup
//#136. HTML Template
//#137. Connecting to Firebase
// #138. Chatroom Class & Adding Chats
// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room
//#139. Setting up a Real-time Listener
// #140. Complex Queries

class Chatroom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db1.collection('chats');

    }
    async addChat(message){
        //format a chat object
        const now = new Date();
        const chat = {
            message: message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        //save the chat document
        const response = await this.chats.add(chat);
        return response;        //this 'probably' won't be used and will be changed - why? 
    }
    getChats(callback){
        this.chats
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === 'added'){
                        //update the ui - added callback to getChats
                        callback(change.doc.data());
                    }
                });
            });
    }
}
 const chatroom = new Chatroom('gaming', 'ben');
 //console.log(chatroom);
//  chatroom.addChat('Hello, New World!')       time to change this!
//  .then(() => console.log('chat added'))
//  .catch(err => console.log(err));
chatroom.getChats(data => {           //arrow function for now
    console.log(data);
})
 