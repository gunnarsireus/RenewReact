import PagaendeDispatcher from '../dispatcher/PagaendeDispatcher';
import PagaendeConstants from '../constants/PagaendeConstants';

let PagaendeActions = {
    setActive(id) {
        PagaendeDispatcher.dispatch({
            actionType: PagaendeConstants.SET_ACTIVE,
            id: id
        });
    },
    inactivateAll() {
        PagaendeDispatcher.dispatch({
            actionType: PagaendeConstants.INACTIVATE_ALL,
        });
    }
}

export default PagaendeActions;