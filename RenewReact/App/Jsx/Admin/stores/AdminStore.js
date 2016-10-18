import { EventEmitter } from 'events';

import AdminDispatcher from '../dispatcher/AdminDispatcher';
import AdminConstants from '../constants/AdminConstants';

let _value11 = '1';
let _value12 = '2';
let _value13 = '3';
let _value21 = '4';
let _value22 = '5';
let _value23 = '6';
alert('_value13 ' + _value13 );
const CHANGE_EVENT = 'change';
let AdminStore = Object.assign({}, EventEmitter.prototype, {
    getValue11: function () {
        return _value11;
    },
    getValue12: function () {
        return _value12;
    },
    getValue13: function () {
        return _value13;
    },
    getValue21: function () {
        return _value21;
    },
    getValue22: function () {
        return _value22;
    },
    getValue23: function () {
        return _value23;
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
    _value11=value
}
function _setValue12(value) {
    _value12=value
}
function _setValue13(value) {
    _value13=value
}
function _setValue21(value) {
    _value21=value
}
function _setValue22(value) {
    _value22=value
}
function _setValue23(value) {
    _value23=value
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