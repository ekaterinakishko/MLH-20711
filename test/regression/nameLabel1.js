const sel = require ('../../data/selectors.json')
const exp = require ('../../data/expected.json')
import {field, userInput} from "../../data/helpers"

describe('Label 1: Name', function () {
    before(() => {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
        browser.pause(2000);
    });

    it('TC-3.1 Verify that the Name field is present', function () {
        expect($(sel.name).isDisplayed()).toEqual(true);
    });

    it('TC-3.2 Verify that a label for the Name field is present', function () {
        expect($$(sel.label)[field.name].isDisplayed()).toEqual(true);
    });

    it('TC-3.3 Verify that placeholder for the Name field is present', function () {
        expect($(sel.name).getAttribute('placeholder')).toEqual(exp.placeholderName);
    });

    it('TC-3.4 Verify that the Name field accepts max length (70 symbols)', function () {
        expect($(sel.name).setValue(userInput.name1));
    });

    it('TC-3.5 Verify that the Name field accepts min length (1 symbol)', function () {
        expect($(sel.name).setValue(userInput.name2));
    });

    it('TC-3.6 Verify that the Name field does not accept > max length', function () {
        $(sel.name).setValue(userInput.name3);
        expect($(sel.errorMsg).getText()).toEqual(exp.errorMessage);
    });

    it('TC-3.7 Verify that input field does not accept only spaces', function () {
        expect($(sel.name).setValue(userInput.name4));
    });

    it('TC-3.8 Verify that the input field accepts uppercase letters (A-Z)', function () {
        expect($(sel.name).setValue(userInput.name5));
    });

    it('TC-3.9 Verify that the input field accepts lowercase letters (a-z)', function () {
        expect($(sel.name).setValue(userInput.name6));
    });

    it('TC-3.10 Verify that the input field accepts digits (0-9)', function () {
        expect($(sel.name).setValue(userInput.name7));
    });

    it('TC-3.11 Validate that the input field: accepts special characters (!, @, #, $, %, ^, &, *, (, ), -, +, _, =, ~)', function () {
        expect($(sel.name).setValue(userInput.name8));
    });

    it('TC-3.12 Validate text of the error message', function () {
        expect($(sel.name).setValue(userInput.name9));
    });

    });