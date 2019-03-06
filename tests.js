const errors = {
    notANumber: 'nb is not a number',
    nbTooHigh: 'nb is too high',
    nbTooLow: 'nb is too low'
}

function add(nb1, nb2) {
    validateNumber(nb1);
    validateNumber(nb2);
    return nb1 + nb2;
}

function multiply(nb1, nb2) {
    validateNumber(nb1);
    validateNumber(nb2);
    return nb1 * nb2;
}

function substract(nb1, nb2) {
    validateNumber(nb1);
    validateNumber(nb2);
    return nb1 - nb2;
}

function divide(nb1, nb2) {
    validateNumber(nb1);
    validateNumber(nb2);
    return nb1 / nb2;
}

function validateNumber(nb) {
    if (typeof nb != 'number') throw errors.notANumber;

    if (nb > Number.MAX_SAFE_INTEGER) throw errors.nbTooHigh;
    else if (nb < -Number.MAX_SAFE_INTEGER) throw errors.nbTooLow;
}

QUnit.test("test operation Package", function (assert) {
    assert.ok(2 == add(1, 1), "Test add operation");
    assert.ok(2 == substract(3, 1), "Test substract operation");
    assert.ok(2 == multiply(1, 2), "Test multiply operation");
    assert.ok(2 == divide(4, 2), "Test divide operation");
});
