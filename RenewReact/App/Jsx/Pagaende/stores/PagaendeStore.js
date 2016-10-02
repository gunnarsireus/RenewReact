import { EventEmitter } from 'events';

import PagaendeDispatcher from '../dispatcher/PagaendeDispatcher';
import PagaendeConstants from '../constants/PagaendeConstants';

let _panelList = [
    {id: 0, panel: "CreateIssuePanel", active: false},
    {id: 1, panel: "IssueCalendarView", active: true},
    {id: 2, panel: "IssueScheduleView", active: false},
    {id: 3, panel: "IssueListView", active: false}
 ];

const CHANGE_EVENT = 'change';
let PagaendeStore = Object.assign({}, EventEmitter.prototype, {
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

PagaendeDispatcher.register(function (action) {
    switch (action.actionType) {
        case PagaendeConstants.SET_ACTIVE:
            _setActive(action.id);
            PagaendeStore.emitChange();
            break;
        case PagaendeConstants.INACTIVE_ALL:
            _inactivateAll();
            PagaendeStore.emitChange();
            break;
        default:
    }
});

export default PagaendeStore;