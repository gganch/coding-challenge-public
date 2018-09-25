const countOccurences = require('./index');

describe('countOccurences', () => {
    test('returns the correct result for a JSON object with no nesting', () => {
        const tree = `{
            "feline": 2,
            "canine": 3,
            "lizard": 2,
            "fish": 4
        }`;
        const result = countOccurences(tree);
        expect(result[0]).toBe(4);
        expect(result[1].length).toBe(1);
        expect(result[1]).toContain('fish');
    });

    test('returns the correct result for a JSON object with one level of nesting', () => {
        const tree = `{
            "feline": {
                "bar": 3,
                "baz": 2,
                "zip": 5,
                "zam": 1
            },
            "canine": {
                "foo": 4,
                "baz": 1,
                "zip": 4,
                "zam": 2
            },
            "lizard": {
                "foo": 3,
                "baz": 2,
                "zam": 7
            },
            "fish": {
                "foo": 5,
                "baz": 2
            }
        }`;
        const result = countOccurences(tree);
        expect(result[0]).toBe(12);
        expect(result[1].length).toBe(1);
        expect(result[1]).toContain('foo');
    });

    test('returns the correct result for a JSON object with different levels of nesting', () => {
        const tree = `{
            "feline": {
                "bar": 3,
                "baz": 2,
                "zip": 5,
                "zam": 1
            },
            "canine": {
                "foo": 4,
                "baz": 1,
                "wolf": {
                    "foo": 5,
                    "baz": 2,
                    "zam": 6
                    
                },
                "zam": 2
            },
            "lizard": 5,
            "fish": {
                "foo": 5,
                "baz": 2
            },
            "bird": {
                "raptor": {
                    "bar": 3,
                    "baz": 1
                },
                "songbird": {
                    "zam": 1
                }
            }
        }`;
        const result = countOccurences(tree);
        expect(result[0]).toBe(14);
        expect(result[1].length).toBe(1);
        expect(result[1]).toContain('foo');
    });

    test('returns the correct result for a JSON object with two winners', () => {
        const tree = `{
            "feline": {
                "bar": 3,
                "baz": 2,
                "zip": 5,
                "zam": 1
            },
            "canine": {
                "foo": 4,
                "baz": 6,
                "zip": 4,
                "zam": 2
            },
            "lizard": {
                "foo": 3,
                "baz": 2,
                "zam": 7
            },
            "fish": {
                "foo": 5,
                "baz": 2
            }
        }`;
        const result = countOccurences(tree);
        expect(result[0]).toBe(12);
        expect(result[1].length).toBe(2);
        expect(result[1]).toContain('foo');
        expect(result[1]).toContain('baz');
    });
});
