export const users = {
  namespased : true,
  state : {
      users : {}
  },

  getters : {
    getAllUsers(state){
      return state.users;
    },

    getUserById : (state) => (id) =>{
      return state.users[id];
    }
  },

  mutations : {
    setUsers(state, data){
      let target = {}
      for (let i = 0; i < data.length; i++){
        target[data[i].login.uuid] = data[i];
      }
      state.users = Object.assign({}, state.users, target);
    }
  },
  
  actions : {
    fetchUsers(context, payload){
      fetch(payload).then(response => response.json().then(function(data){
      context.commit('setUsers', data.results);
      }))
    }
  }
}