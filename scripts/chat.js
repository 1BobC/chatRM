//Real Time Chatroom Section 17 starting #135 project preview setup
//#136. HTML Template
//#137. Connecting to Firebase
// #138. Chatroom Class & Adding Chats
// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room
//#139. Setting up a Real-time Listener
// #140. Complex Queries this set up for eg gaming room
//#141. Updating the Room & Username

class Chatroom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db1.collection('chats');
        //#141. Updating the Room by unsubsacribing from getChats(callback) changes
        this.unsub;

    }
    async addChat(message){
        //format a chat object
        const now = new Date();
        const chat = {
            message: message,
            username: this.username,        //#141. Updating the Username
            room: this.room,                //#141. Updating the Room 
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        //save the chat document
        const response = await this.chats.add(chat);
        return response;        //this 'probably' won't be used and will be changed - why? 
    }
    // #140. Complex Queries this set up for eg gaming room
    //listening for a property and ordering by a property 
    getChats(callback){
        this.unsub = this.chats          ////#141. Updating the Room with this.unsub abpve
            .where('room', '==', this.room )                 // double == not triple
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === 'added'){
                        //update the ui - added callback to getChats
                        callback(change.doc.data());
                    }
                });
            });
    }
    //#141. Updating the Username
    updateName(username){           //NB error I typed 'usename' - see the difference?
        this.username = username;
    }
    //#141. Updating the Room
    updateRoom(room){
        this.room = room;
        console.log('room updated');
        if(this.unsub){             //if this.unsub has no value then an err created
        this.unsub();               //now it will only be called if this.unsub is true (has a value)
    } 
    }

}
// #140. Complex Queries this set up for eg gaming room
// calling functions that are listening for a property and ordering by a property 
const chatroom = new Chatroom('general', 'freya');      // calls all general room messages with or without 'name'
 console.log(chatroom);
//  chatroom.addChat('Hello, New World!')       time to change this!
//  .then(() => console.log('chat added'))
//  .catch(err => console.log(err));
//  chatroom.getChats(data => {           //arrow function for now
//      console.log(data);
//  })
//#141. Updating the Room
//  chatroom.updateRoom('gaming');   //this works but timeout method representing a user
// chatroom.getChats((data) => {    //input following say 3 secs of login is used instead
//     console.log(data);
// });
    setTimeout(() => {
        chatroom.updateRoom('gaming');
        chatroom.updateName('Kelly');
        chatroom.getChats((data) => {    //input following say 3 secs of login is used instead
             console.log(data);
        });
        chatroom.addChat('So far - so good!');
    }, 3000);


 