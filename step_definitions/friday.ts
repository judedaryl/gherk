import assert from 'assert'
import { Given, When, Then } from '@cucumber/cucumber';

function isItFriday(today: string) {
  return today == 'Friday' ? 'Yes' : 'Nope'
}

Given('today is {string}', function (day: string) {
  this.today = day
});

When('I ask whether it\'s Friday yet', function () {
  this.actual = isItFriday(this.today);
});

Then('I should be told {string}', function (expected: string) {
  assert.strictEqual(this.actual, expected);
});