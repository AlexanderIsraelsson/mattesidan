const { sum, calculate, compute, compute2, compute3 } = require("./calc");
const puppeteer = require("puppeteer");
test("beräkna summan av 2 + 3 till 5",() => {
      expect(sum(2,3)).toBe(5);
  } );

test("testa pq - formeln om p = 0 och q = -4 då blir svar 1 = 2 och svar 2 = -2",() => {
    expect(calculate(0,-4)).toBe("Svar 1 = 2 Svar 2 = -2");
});

test("testa pq - formeln om p = -4 och q = -5 då blir svar 1 = 5 och svar 2 = -1",() => {
    expect(calculate(-4,-5)).toBe("Svar 1 = 5 Svar 2 = -1");
});

test("pythagoras sats 3^2+4^2=sqrt(25)",() => {
    expect(compute(3, 4)).toBe("Svar: C = 5");
});

test("pythagoras sats 5^2-4^2=sqrt(9)",() => {
    expect(compute2(5,4)).toBe("Svar: A = 3");
});

test("pythagoras sats 13^2-12^2=sqrt(25)",() => {
    expect(compute2(13,12)).toBe("Svar: A = 5");
});

test("pythagoras sats 5^2-3^2=sqrt(16)",() => {
    expect(compute3(5,3)).toBe("Svar: B = 4");
});


  test("simulera en användare på sidan", async () => {
      const browser = await puppeteer.launch({
      headless: false,
      slowMo: 70,
      args: ["--window-size=1920, 1080"]
    });
    const page = await browser.newPage();
    await page.goto(
      "file:///C:/Users/alexander.israelss1/Documents/GitHub/mattesidan/index.html");

      await page.click("#a");
      await page.type("#a", "3");
      await page.click("#b");
      await page.type("#b", "4");
      await page.click("#compute");

      const final_result = await page.$eval("#svar1", el => el.textContent);
      await expect(final_result).toBe("Svar: C = 5");

  });
 