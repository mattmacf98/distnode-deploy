#!/usr/bin/env node

const test = require("tape");
const Recipe = require("../recipe");

test('Recipe#hydrate()', async (t) => {
    const r = new Recipe(42);
    await r.hydrate();
    t.equal(r.name, "Recipe: #42", 'name equality');
});

test('Recipe#serialize()', (t) => {
    const r = new Recipe(42);
    t.deepLooseEqual(r, {id: 42, name: null}, 'serializes properly');
    t.end();
});
