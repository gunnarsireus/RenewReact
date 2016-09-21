import { EventEmitter } from 'events';

import LoginDispatcher from '../dispatcher/LoginDispatcher';
import LoginConstants from '../constants/LoginConstants';

let _panelList = [
    {id: 0, panel: "ValidateAccountPanel", active: true},
    {id: 1, panel: "ForgetAccountPanel", active: false},
    {id: 2, panel: "SecureAccountPanel", active: false}
 ];

const CHANGE_EVENT = 'change';
let LoginStore = Object.assign({}, EventEmitter.prototype, {
    getPanels: function () {
        return _panelList;
    },
    getActiveId: function () {
        var id=-1;
        _panelList.forEach(function (item, index, array) {
            if (item.active===true) {
                id = index;
            }
        });
        return id;
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

function _setActive(id) {
    _panelList.forEach(function (item, index, array) {
        if (item.id===id) {
            item.active = true;
        }
        else
        {
            item.active = false;
        }
    });
}

function _inactivateAll() {
    _panelList.forEach(function (item, index, array) {
            item.active = false;
    });
}

LoginDispatcher.register(function (action) {
    switch (action.actionType) {
        case LoginConstants.SET_ACTIVE:
            _setActive(action.data);
            LoginStore.emitChange();
            break;
        case LoginConstants.INACTIVE_ALL:
            _inactivateAll();
            LoginStore.emitChange();
            break;
        default:
    }
});

export default LoginStore;