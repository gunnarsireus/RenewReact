import AdminDispatcher from '../dispatcher/AdminDispatcher';
import AdminConstants from '../constants/AdminConstants';

let AdminActions = {
    setValue11(value) {
        AdminDispatcher.dispatch({
            actionType: AdminConstants.SET_VALUE11,
            value: value
        });
    },
    setValue12(value) {
        AdminDispatcher.dispatch({
            actionType: AdminConstants.SET_VALUE12,
            value: value
        });
    },
    setValue13(value) {
        AdminDispatcher.dispatch({
            actionType: AdminConstants.SET_VALUE13,
            value: value
        });
    },
    setValue21(value) {
        AdminDispatcher.dispatch({
            actionType: AdminConstants.SET_VALUE21,
            value: value
        });
    },
    setValue22(value) {
        AdminDispatcher.dispatch({
            actionType: AdminConstants.SET_VALUE22,
            value: value
        });
    },
    setValue23(value) {
        AdminDispatcher.dispatch({
            actionType: AdminConstants.SET_VALUE23,
            value: value
        });
    }
}

export default AdminActions;