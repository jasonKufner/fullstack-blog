test("expect true to be true", () => {
  expect(true).toBe(true)
})

test("expect false to be false", () => {
  expect(false).toBe(false)
})

test("expect true not to be false", () => {
  expect(true).not.toBe(false)
})
