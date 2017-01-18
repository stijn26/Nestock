"use strict";
const events = require("events");

const p = new WeakMap();

class SourcedEntity {

    constructor() {
        p.set(this, {
            eventEmitter: new events.EventEmitter()
        });
    }

    init() {
        this.behavior(p.get(this).eventEmitter);
    }

    source(events) {
        events.forEach((event) => {
            p.get(this).eventEmitter.emit(event.name, event.data);
        });
    }

    behavior(eventEmitter) {
        // Overwrite this method to add behaviour
    }
}

module.exports = SourcedEntity;