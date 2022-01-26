const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toMatchObject(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const trimmed = utils.trimProperties(input)
    expect(input).toBe(input)
    expect(input).not.toBe(trimmed)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const original = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    utils.trimPropertiesMutation(original)
    expect(original).toMatchObject(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const original = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    utils.trimPropertiesMutation(original)
    expect(original).toBe(original)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }]
    const largestNumber = utils.findLargestInteger(input)
    expect(largestNumber).toBe(3)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh counter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    counter.countDown()
    expect(counter.count).toBe(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    counter.countDown()
    expect(counter.count).toBe(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    expect(counter.count).toBe(0);
    expect(counter.count).not.toBeLessThan(0);
  })
})


describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    seasons.next()
    expect(seasons.szn).toBe('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    for (let i = 0; i < 2; i++){
      seasons.next()
    }
    expect(seasons.szn).toBe('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    for (let i = 0; i < 3; i++){
      seasons.next()
    }
    expect(seasons.szn).toBe('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 4; i++){
      seasons.next()
    }
    expect(seasons.szn).toBe('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    for (let i = 0; i < 5; i++){
      seasons.next()
    }
    expect(seasons.szn).toBe('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 40; i++){
      seasons.next()
    }
    expect(seasons.szn).toBe('spring')
  })
})

/*
describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  // test('[15] driving the car returns the updated odometer', () => {})
  // test('[16] driving the car uses gas', () => {})
  // test('[17] refueling allows to keep driving', () => {})
  // test('[18] adding fuel to a full tank has no effect', () => {})
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  // test('[19] resolves true if passed an even number', () => {})
  // test('[20] resolves false if passed an odd number', () => {})
})
*/