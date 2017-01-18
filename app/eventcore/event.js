"use strict";

const p = new WeakMap();

class Event {

    constructor(aggregate, when, name, data) {
        p.set(this, {
            aggregate: aggregate,
            when: when,
            name: name,
            data: data
        });
    }

    get aggregate() {
        return p.get(this).aggregate;
    }

    get when() {
        return p.get(this).when;
    }

    get name() {
        return p.get(this).name;
    }

    get data() {
        return p.get(this).data;
    }

    toString() {
        return `Event aggregate=[${this.aggregate}] when=[${this.when}] name=[${this.name}]`
    }
}

module.exports = Event;