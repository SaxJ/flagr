import helpers from "../../src/helpers/helpers";

describe("string to colour helper", () => {
  it("Different strings map to different colours", () => {
    expect(
      helpers.stringToColour("flag1") != helpers.stringToColour("flag2")
    ).toBeTruthy();
  });

  it("Outputs a valid colour", () => {
    expect(helpers.stringToColour("flag")).toMatch(
      /hsla\(\d+,\d+%,\d+%,\d+(\.\d+)?\)/
    );
  });
});
