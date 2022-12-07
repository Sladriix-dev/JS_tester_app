import { sayHello } from './unit1'

describe('SayHello Unit Test Suites', () => {
    it('should return "Hello, World', () => {
        expect(sayHello()).toBe("Hello, World")
    })

    it ('should be "Hello, Thomas"', () => {
        expect(sayHello("Thomas")).toBe("Hello, Thomas")
    })

    it ('should return "Bonjour Alexandra', () => {
        expect(sayHello("Alexandra")).toBe("Bonjour Alexandra")
    })

})