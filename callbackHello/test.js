const callbackHello = require('./index.js');

describe('callbackHello', () => {
    test('executes the function once', (done) => {
        let test = 0;
        const func = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    test+=1;
                    resolve();
                }, 5);
            });
        };
        Promise.resolve(callbackHello(func, 1)).then((v) => {
            expect(test).toBe(1);
            done();
        });
    });
    test('executes the function twice', (done) => {
        let test = 0;
        const func = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    test+=1;
                    resolve();
                }, 5);
            });
        };
        Promise.resolve(callbackHello(func, 2)).then(() => {
            expect(test).toBe(2);
            done();
        });
    });
    test('executes the function thrice', (done) => {
        let test = 0;
        const func = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    test+=1;
                    resolve();
                }, 5);
            });
        };
        Promise.resolve(callbackHello(func, 3)).then(() => {
            expect(test).toBe(3);
            done();
        });
    });
    test('executes the function in order', (done) => {
        let test = 0;
        let testString = '';
        const func = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    testString+=String(test);
                    test+=1;
                    resolve();
                }, 5);
            });
        };
        Promise.resolve(callbackHello(func, 3)).then(() => {
            expect(testString).toBe('012');
            done();
        });
    });
});
