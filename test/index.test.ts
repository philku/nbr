
import nbr from "../src/index"

test('Contains all Properties', () => {

  expect(nbr(12345678901)).toEqual(expect.objectContaining({
    local: expect.stringContaining(""),
    local_dashed: expect.stringContaining(""),
    domestic: expect.stringContaining(""),
    domestic_dashed: expect.stringContaining(""),
    domestic_dotted: expect.stringContaining(""),
    domestic_areaParentheses: expect.stringContaining(""),
    domestic_areaSpaced: expect.stringContaining(""),
    domestic_areaSpacedParentheses: expect.stringContaining(""),
    international: expect.stringContaining(""),
    international_dashed: expect.stringContaining(""),
  }))

})