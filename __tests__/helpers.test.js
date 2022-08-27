const { format_date, format_plural, format_url } = require("../utils/helpers");

test("format_date() returns a date string", () => {
  const date = new Date("2020-03-20 16:12:03");

  expect(format_date(date)).toBe("3/20/2020");
});

test("format_plural() correctly pluralizes words", () => {
  const word1 = "word";
  const result1 = format_plural(word1, 1);
  const answer1 = "word";

  const word2 = "word";
  const result2 = format_plural(word2, 2);
  const answer2 = "words";

  expect(result1).toBe(answer1);
  expect(result2).toBe(answer2);
});

test("format_url() returns a simplified url string", () => {
  const url1 = format_url("http://test.com/page/1");
  const url2 = format_url("https://www.coolstuff.com/asdfg/");
  const url3 = format_url("https://www.google.com?q=hello");

  expect(url1).toBe("test.com");
  expect(url2).toBe("coolstuff.com");
  expect(url3).toBe("google.com");
});
