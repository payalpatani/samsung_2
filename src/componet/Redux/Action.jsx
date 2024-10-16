export const myAction=(payload)=>{
    return {
        type:"ADD",
        payload
    }
}

export const removeFromCart = (index) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: index,
    };
};

export const increment= (index)=>{
    return {
        type:"IncQty",
        index
    }
}
export const decrement=(index)=>{
    return{
        type:"DecQty",
        index
    }
}
