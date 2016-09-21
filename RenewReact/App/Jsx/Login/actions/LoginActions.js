import LoginDispatcher from '../dispatcher/LoginDispatcher';
import LoginConstants from '../constants/LoginConstants';

let LoginActions = {
    setActive(id) {
        LoginDispatcher.dispatch({
            actionType: LoginConstants.SET_ACTIVE,
            id: id
        });
    },
    inactivateAll() {
        LoginDispatcher.dispatch({
            actionType: LoginConstants.INACTIVATE_ALL,
        });
    }
}

export default LoginActions;