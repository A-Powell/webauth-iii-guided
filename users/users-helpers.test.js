const { validateUser } = require('./users-helpers.js')

// Sent an empty object, we saw the result fail
// sent an object with a username less than 2 characters, we verified it failed
// sent object with a valid username, no password

describe('users helpers', () => {

    describe('validateUser()', () => {
        it('should fail when missing username and password', () => {
            // Arrange: setup the world for the test
            const invalidUser = { };
            const expected = false;

            //Act: execute the system under test (SUT) => validateUser method
            const actual = validateUser(invalidUser);

            // Assert: Check the result
            expect(actual.isSuccessful).toBe(expected) //matchers
        });

        it('should fail if missing password', () => {
            const result = validateUser({ username: "Somebody"});
            
            expect(result.isSuccessful).toBe(false);
            expect(result.errors).toHaveLength(1);
        })

        it.todo('should fail if username is an object')
    });
});