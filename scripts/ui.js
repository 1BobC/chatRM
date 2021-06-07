//Real Time Chatroom Section 17 starting #135 project preview setup
//#136. HTML Template
// #137. Connecting to Firebase
// #138. Chatroom Class & Adding Chats
//#139. Setting up a Real-time Listener
// #140. Complex Queries this set up for eg gaming room
// #141. Updating the Room & Username
// #142. Creating a ChatUI Class

//render chat template to the DOM
//clear the list of chats (when the room changes)

class ChatUI{
    constructor(list){
        this.list = list;
    }
    render(data){
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            {addSuffix: true}
        );
        const html = `
        <li class="list-group-item">
        <span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${when}</div>
        </li>
        `;

            this.list.innerHTML += html;
    }
}

//#143. Formatting the Dates
// #144. Sending New Chats