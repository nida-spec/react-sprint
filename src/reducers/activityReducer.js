const initialState= [
    {
        id: 0,
        name: "Nida",
        description: "xyz description",
        duration: "09:37:000 PM",
        selectedDate: "11/18/2021",
        activityType: "Run"
        
    },
    {
        id: 1,
        name: "test",
        description: "abc description",
        duration: "09:37:000 PM",
        selectedDate: "11/21/2021",
        activityType: "Run"
       
    }
]

const activityReducer=(state= initialState, action) =>{
    switch(action.type){
        case 'ADD_ACTIVITY':
            state= [...state, action.payload];
            return state;

        default:
             return state
    }
}

export default activityReducer