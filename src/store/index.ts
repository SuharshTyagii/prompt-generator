import { createStore } from 'vuex'

export default createStore({
  state: {
    blocksData: [{
      'color': "#F988b4",
      'selfIndex': 0,
      'enabled': true,
      'blockName': 'Photo type',
      'blockData': [{ value: 'A photo of', name: "A photo of" }, { value: 'A picture of', name: "A picture of" }, { value: 'A snapshot of', name: "A snapshot of" },
      { value: 'A portrait of', name: "A portrait of" }, { value: 'A panorama of', name: "A panorama of" }]
    },
    {
      'selfIndex': 1,
      'color': "#f9d0c4",
      'enabled': true,
      'blockName': 'Adjectives',
      'blockData': [{ value: 'a', name: "a" }, { value: 'the', name: "the" }, { value: 'my', name: "my" }, { value: 'our', name: "our" }]
    },
    {
      'selfIndex': 2,
      'color': "#f9f0c4",
      'enabled': false,
      'blockName': 'colorBlock',
      'blockData': [{ value: 'red', name: "red" }, { value: 'blue', name: "blue" }, { value: 'green', name: "green" }, { value: 'yellow', name: "yellow" }, { value: 'black', name: "black" }, { value: 'white', name: "white" }, { value: 'orange', name: "orange" }, { value: 'purple', name: "purple" }, { value: 'brown', name: "brown" }, { value: 'grey', name: "grey" }]
    },
    {
      'selfIndex': 3,
      'color': "#c4f9f0",
      'enabled': true,
      'blockName': 'symbols',
      'blockData': [{ value: ',', name: "," }, { value: ',', name: "," }, { value: '#', name: "#" }, { value: '$', name: "$" }, { value: '%', name: "%" }, { value: '^', name: "^" }, { value: '&', name: "&" }, { value: '*', name: "*" }, { value: '(', name: "(" }, { value: ')', name: ")" }, { value: '-', name: "-" }, { value: '_', name: "_" }, { value: '=', name: "=" }, { value: '+', name: "+" }, { value: '[', name: "[" }, { value: ']', name: "]" }, { value: '{', name: "{" }, { value: '}', name: "}" }, { value: '|', name: "|" }, { value: ';', name: ";" }, { value: ':', name: ":" }, { value: ',', name: "," }, { value: '.', name: "." }, { value: '<', name: "<" }, { value: '>', name: ">" }, { value: '/', name: "/" }, { value: '?', name: "?" }, { value: '`', name: "`" }, { value: '~', name: "~" }]
    }],


    newBlocks: [
      {
        // latest movies block
        
        'color': "#c4f9f3",
        'enabled': true,
        'blockName': 'movies',
        'blockData': [{ value: 'movie1', name: "movie1" }, { value: 'movie2', name: "movie2" }, { value: 'movie3', name: "movie3" }, { value: 'movie4', name: "movie4" }, { value: 'movie5', name: "movie5" }, { value: 'movie6', name: "movie6" }, { value: 'movie7', name: "movie7" }, { value: 'movie8', name: "movie8" }, { value: 'movie9', name: "movie9" }, { value: 'movie10', name: "movie10" }]
      },
      // games block
      {
        
        'color': "#a4c9a3",
        'enabled': true,
        'blockName': 'games',
        'blockData': [{ value: 'game1', name: "game1" }, { value: 'game2', name: "game2" }, { value: 'game3', name: "game3" }, { value: 'game4', name: "game4" }, { value: 'game5', name: "game5" }, { value: 'game6', name: "game6" }, { value: 'game7', name: "game7" }, { value: 'game8', name: "game8" }, { value: 'game9', name: "game9" }, { value: 'game10', name: "game10" }]
      },
    ],


  },
  getters: {
  },
  mutations: {
    addNewBlockMutation(state, payload) {
      console.log('addNewBlockMutation', payload)
      // state.blocksData.push(payload)
    },
    toggleBlockMutation(state, payload) {
      console.log('enableBlockMutation', payload)
      // get element where selfIndex is equal to payload
      // set enabled to true
      const block = state.blocksData.find(block => block.selfIndex === payload)
      if (block) {
        block.enabled = !block.enabled
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
