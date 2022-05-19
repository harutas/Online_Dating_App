import { getDateString } from '../../model/index'

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
                    target[payload.id].push(payload.messages);
            }
            else {
                target[payload.id] = [payload.messages];
            }

            state.messages = Object.assign({}, target);

        }
    },
    actions : {
        fetchMessage(context, payload){
            let formData = new FormData();
            formData.append('apikey', process.env.VUE_APP_APIKEY);
            formData.append('query', payload.messages.content);
            fetch("https://api.a3rt.recruit.co.jp/talk/v1/smalltalk",
                {
                    method : 'POST',
                    body : formData,
                }).then(response => response.json().then(function(data){
                    let reply = data.results[0].reply
                    console.log(data.results[0].reply);
                    let partnerMessage = {
                        id : payload.id,
                        messages : {
                        count : payload.messages.count+1, 
                        id : payload.id,
                        content : reply,
                        date : getDateString()
                        }
                    }
                    context.commit('setMessages', partnerMessage);
                }));
            // setTimeout(() => {
            //     context.commit('setMessages', payload);
            // }, 5000);
        }
    }
}