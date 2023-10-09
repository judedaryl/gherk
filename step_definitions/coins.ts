import assert from 'assert'
import { typedCucumber } from '../lib/cucumber';
const { Given, When, Then } = typedCucumber<{ coins: number }, number>()


function coinMan(darylCoins: number, asks: number) {
    if (darylCoins == 0)
        return 0
    return asks / 2
}

Given('daryl has {int} coins', function (coins: number) {
    this.coins = coins;
})

When('someone asks for {int} coins', function (coins: number) {
    this.expected = coinMan(this.coins, coins)
})

Then('he can only give {int} coins', function (expected: number) {
    assert.equal(this.expected, expected)
})