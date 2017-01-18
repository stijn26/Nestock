"use strict";
const expect = require("chai").expect;
const SourcedEntity = require("../../app/eventcore/sourcedEntity");

class TestEntity extends SourcedEntity {

    constructor() {
        super();
        this.word = "";
    }

    behavior(b) {
        b.on('letterWritten', (data) => {
            this.word += data.letter;
        });
    }
}

describe("SourcedEntity test", () => {
    const testEntity = new TestEntity();
    testEntity.init();

    testEntity.source([
        { name: "letterWritten", data: { letter: "B" } },
        { name: "letterWritten", data: { letter: "E" } },
        { name: "letterWritten", data: { letter: "E" } },
        { name: "letterWritten", data: { letter: "R" } }
    ]);

    it("creates instance", () => expect(testEntity).to.exist);

    it("counts", () => expect(testEntity.word).to.equal("BEER"));

});