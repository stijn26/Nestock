const expect = require("chai").expect;
const Event = require("../../app/eventcore/event");

describe("Event Test", () => {
    const event = new Event("agg", 123, "name", { data: "data" });

    it("gets aggregate", () => expect(event.aggregate).to.equal("agg"));

    it("gets when", () => expect(event.when).to.equal(123));

    it("gets name", () => expect(event.name).to.equal("name"));

    it("gets data", () => expect(event.data).to.deep.equal({ data: "data" }));

    it("toString", () => expect(event.toString()).to.equal("Event aggregate=[agg] when=[123] name=[name]"));

});