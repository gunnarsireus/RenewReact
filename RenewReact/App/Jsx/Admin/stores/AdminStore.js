import { EventEmitter } from 'events';

import AdminDispatcher from '../dispatcher/AdminDispatcher';
import AdminConstants from '../constants/AdminConstants';

let _valueList = [
    {id:0, name: "Value11", value: '1'},
    {id:1, name: "Value12", value: '2'},
    {id:2, name: "Value13", value: '3'},
    {id:3, name: "Value21", value: '4'},
    {id:4, name: "Value22", value: '5'},
    {id:5, name: "Value23", value: '6'}
];

const CHANGE_EVENT = 'change';
let AdminStore = Object.assign({}, EventEmitter.prototype, {
    getValues: function () {
        return _valueList;
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

function _setValue11(value) {
    _valueList[0].value=value
}
function _setValue12(value) {
    _valueList[1].value=value
}
function _setValue13(value) {
    _valueList[2].value=value
}
function _setValue21(value) {
    _valueList[3].value=value
}
function _setValue22(value) {
    _valueList[4].value=value
}
function _setValue23(value) {
    _valueList[5].value=value
}


AdminDispatcher.register(function (action) {
    switch (action.actionType) {
        case AdminConstants.SET_VALUE11:
            _setValue11(action.value);
            AdminStore.emitChange();
            break;
        case AdminConstants.SET_VALUE12:
            _setValue12(action.value);
            AdminStore.emitChange();
            break;
        case AdminConstants.SET_VALUE13:
            _setValue13(action.value);
            AdminStore.emitChange();
            break;
        case AdminConstants.SET_VALUE21:
            _setValue21(action.value);
            AdminStore.emitChange();
            break;
        case AdminConstants.SET_VALUE22:
            _setValue22(action.value);
            AdminStore.emitChange();
            break;
        case AdminConstants.SET_VALUE23:
            _setValue23(action.value);
            AdminStore.emitChange();
            break;
        default:
    }
});

export default AdminStore;