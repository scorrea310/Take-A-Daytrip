const SET_MODALS = "loginAndSignUpModals/SET_MODALS"


export const setModals = (loginModal, signUpModal) => ({
    type: SET_MODALS,
    payload: { loginModal, signUpModal }
})



const initialState = {};

const loginAndSignUpModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODALS:

            return action.payload
        default:
            return state;
    }
}


export default loginAndSignUpModalReducer