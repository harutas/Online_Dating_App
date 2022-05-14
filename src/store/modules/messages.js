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
                    target[payload.id].push(...payload.messages);
            }
            else {
                target[payload.id] = payload.messages;
            }

            state.messages = Object.assign({}, target);

        }
    },
    actions : {

    }
}