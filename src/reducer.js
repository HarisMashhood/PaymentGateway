export const initialState ={
    basket: [],
};


//Selector
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item)=> item.price + amount, 0);

const reducer =(state, action)=>{
    
    switch(action.type){
        case 'Add to Basket':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        
            case "SET_USER":
                return  {
                    ...state,
                    user:action.user
                }
            default:
                return state;
    }
};
export default reducer;