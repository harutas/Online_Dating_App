import { Chat } from '../../model/index'

export const messages = {
    namespaced : true,
    state : {
        messages : {}
    },
    getters : {
        getMessagesById : (state) => (id) => {
            return state.messages[id];
        }
    },
    mutations : {
        setMessages(state, payload){
            let target = state.messages;
            
            if (payload.id in target){
                    target[payload.id].push(payload);
            }
            else {
                target[payload.id] = [payload];
            }

            state.messages = Object.assign({}, target);
        }
    },
    actions : {
        replyMessage(context, payload){
            setTimeout(() => {
                let formData = new FormData();
                formData.append('apikey', process.env.VUE_APP_APIKEY);
                formData.append('query', payload.content);
                fetch("https://api.a3rt.recruit.co.jp/talk/v1/smalltalk",
                    {
                        method : 'POST',
                        body : formData,
                    }).then(response => response.json().then(function(data){
                        let reply = data.results[0].reply;
                        let replyMessage = new Chat(payload.count+1, payload.id, reply, false);
                        replyMessage.date = Chat.getDateString();

                        context.commit('setMessages', replyMessage);
                    }));

            }, Math.floor(Math.random() * 3000));
        }
    }
}