export { Chat }

class Chat{
    constructor(count, id, content, isMyChat){
        this.count = count;
        this.id = id;
        this.content = content;
        this.date = null;
        this.isMyChat = isMyChat;
    }

    static getDateString(){
        let dt = new Date();

        let year = dt.getFullYear();
        let month = dt.getMonth()+1;
        let date = dt.getDate();
        let hours = dt.getHours().toString().padStart(2, "0");
        let minutes = dt.getMinutes().toString().padStart(2, "0");
        let seconds = dt.getSeconds().toString().padStart(2, "0");

        let dateString = `${year}/${month}/${date} ${hours}.${minutes}.${seconds}`;

        return dateString;
    }
}