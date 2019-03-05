const {expect} = require('chai');
const Puml = require('../src');


describe('pumlgen', function () {
    it('ok', function () {
        const puml = new Puml();
        expect(puml).is.ok;
        expect(Puml.fromFile).to.be.an('function');
        expect(Puml.fromString).to.be.an('function');
    });
    describe('handlers', function () {
        let puml;
        beforeEach(function () {
            puml = new Puml();
        });
        it('_offHandler', function () {
            expect(puml._offHandler('')).to.be.undefined;
            expect(puml._offHandler('@startuml')).to.be.equal('_idleHandler');
        });
        it('_idleHandler', function () {
            expect(puml._idleHandler('')).to.be.undefined;
            expect(puml._idleHandler('class Test')).to.be.undefined;
            expect(puml._idleHandler('class Test {')).to.be.equal('_classHandler');
        });
        it('_classHandler', function () {
            puml._addClass('myClass');
            expect(puml._classHandler('')).to.be.undefined;
            expect(puml._classHandler('-Test test')).to.be.undefined;
        });
    });
});
