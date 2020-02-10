import stringfyNumber from "../stringfyNumber";

describe("Should test helpers", () => {
  it("should stringfy a number", () => {
    const firstNumber = 1;
    const secondNumber = 10;
    const thirdNumber = 100;
    const expectedFirstResponse = "001";
    const expectedSecondResponse = "010";
    const expectedThirdResponse = "100";
    expect(stringfyNumber(firstNumber)).toEqual(expectedFirstResponse);
    expect(stringfyNumber(secondNumber)).toEqual(expectedSecondResponse);
    expect(stringfyNumber(thirdNumber)).toEqual(expectedThirdResponse);
  });
});
