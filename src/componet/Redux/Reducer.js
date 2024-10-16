const initialState = [];

export const myReducer = (state = initialState, action) => {
    if (action.type=="ADD") {
      
            return state= [
                ...state, 
                {...action.payload, quantity:1}
            ];
        }
        
       else if ( action.type=="REMOVE_FROM_CART"){

           return state.filter((item, i) => i !== action.payload);
       }

       else if(action.type=="IncQty"){

            return state.map((item, index)=> index === action.index ? {...item , quantity : item.quantity + 1}
            : item
        )

       }

       else if (action.type=="DecQty"){
        return state.map((item, index)=>
            index === action.index && item.quantity > 1
            ? {...item, quantity : item.quantity - 1 }
            : item
        )
       }

       
            return state;
    
 

};
