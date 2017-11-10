describe("makeup-focusable", function() {
    var focusable = require('../index.js');
    var body = document.body;

    describe('when module is imported', function() {
        it("module should not be undefined", function() {
            expect(focusable).not.toEqual(undefined);
        });
    });

    describe('when element contains links', function() {
        var focusableEls;

        beforeAll(function() {
            body.innerHTML = '<a href="http://www.ebay.com"></a><a></a>';
            focusableEls = focusable(body);
        });

        it("should only return links with hrefs", function() {
            expect(focusableEls.length).toBe(1);
        });
    });

    describe('when element contains buttons', function() {
        var focusableEls;

        beforeAll(function() {
            body.innerHTML = '<button></button><button disabled></button>';
            focusableEls = focusable(body);
        });

        it("should only return enabled buttons", function() {
            expect(focusableEls.length).toBe(1);
        });
    });

    describe('when element contains elements with tabindex', function() {
        var focusableEls;

        beforeAll(function() {
            body.innerHTML = '<div tabindex="0"></div><div></div><div tabindex="0"></div>';
            focusableEls = focusable(body);
        });

        it("should return all elements with tabindex=0", function() {
            expect(focusableEls.length).toBe(2);
        });
    });

    describe('when element contains elements with positive tabindex', function() {
        var focusableEls;

        beforeAll(function() {
            body.innerHTML = '<div tabindex="1"></div><div></div><div tabindex="2"></div>';
            focusableEls = focusable(body);
        });

        it("should return all elements with positive tabindex", function() {
            expect(focusableEls.length).toBe(2);
        });
    });

    describe('when element contains elements with negative tabindex', function() {
        var focusableEls;

        beforeAll(function() {
            body.innerHTML = '<div tabindex="-1"></div><div></div><div tabindex="-1"></div>';
            focusableEls = focusable(body);
        });

        it("should return all elements with negative tabindex", function() {
            expect(focusableEls.length).toBe(2);
        });
    });

    describe('when element contains elements with negative tabindex, with sequentialOnly set to true', function() {
        var focusableEls;

        beforeAll(function() {
            body.innerHTML = '<div tabindex="-1"></div><div></div><div tabindex="-1"></div>';
            focusableEls = focusable(body, true);
        });

        it("should return all elements with negative tabindex", function() {
            expect(focusableEls.length).toBe(0);
        });
    });
});
