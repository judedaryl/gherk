import { Given, When, Then } from '@cucumber/cucumber'
export function typedCucumber<TParams, TExpected>() {
    return {
        Given: Given<TParams & { expected: TExpected }>,
        When: When<TParams & { expected: TExpected }>,
        Then: Then<TParams & { expected: TExpected }>
    }
}