describe("The Add Todo Component", () => {
  // runs before each test
  beforeEach(() => {
    console.log("Before each");
  });

  // runs bofore all tests
  beforeAll(() => {
    console.log("Before all");
  });

  // runs after each test
  afterEach(() => {
    console.log("After each");
  });

  // runs after all tests
  afterAll(() => {
    console.log("After all");
  });

  it("Should not regress", () => {
    // asertions
    expect(40 + 2).toEqual(42);
  });

  // asynchronous tests
  it("async test 1", (done) => {
    setTimeout(done, 100);
  });

  it("async test 2", () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 100);
    });
  });

  it("async test 3", async () => {
    await setTimeout(100);
  });
});
