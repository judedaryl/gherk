import assert from 'assert'
import axios from 'axios'
import { typedCucumber } from '../lib/cucumber';
const { Given, When, Then } = typedCucumber<{ echo: string }, string>()

interface PostmanEcho {
    args: {
        [key: string]: string
    }
}
async function echo(key: string, val: string) {
    return await axios.get<PostmanEcho>(`https://postman-echo.com/get?${key}=${val}`).then(v => v.data)
}

Given('echo is asd', function () {
    this.echo = 'asd'
})

When('when i shout hey', async function () {
    const response = await echo(this.echo, 'asd')
    this.expected = response.args[this.echo]
})

When('when i shout yo', async function () {
    const response = await echo(this.echo, 'qwe')
    this.expected = response.args[this.echo]
})

Then('echo returns {string}', function (expected: string) {
    assert.equal(this.expected, expected)
})

Then('echo does not return {string}', function (notExpected: string) {
    assert.notEqual(this.expected, notExpected)
})