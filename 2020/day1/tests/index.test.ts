/*
--- Day 1: Report Repair ---
After saving Christmas five years in a row, you've decided to take a vacation at a nice resort on a tropical island. Surely, Christmas will go on without you.

The tropical island has its own currency and is entirely cash-only. The gold coins used there have a little picture of a starfish; the locals just call them stars. None of the currency exchanges seem to have heard of them, but somehow, you'll need to find fifty of these coins by the time you arrive so you can pay the deposit on your room.

To save your vacation, you need to get all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

For example, suppose your expense report contained the following:

1721
979
366
299
675
1456
In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?
*/

import { assert } from "chai";
import { solvePart1, solvePart2, solvePart2Recursively } from "../src";

describe("day 1 part 1", () => {
	it("should multiply two numbers that have added up to 2020 using the example input", () => {
		const input = [1721, 979, 366, 299, 675, 1456];
		const result = solvePart1(Object.assign([], input));
		assert.equal(result, 514579);
	});
	it("should multiply two numbers that have added up to 2020 using the AOC input", () => {
		const input = [
			1408, 1335, 1648, 1458, 1627, 1928, 1967, 1827, 1606, 1569, 1893, 1866, 1768, 1795,
			1264, 1684, 1552, 1343, 1917, 1675, 1731, 1800, 1413, 1879, 1664, 1350, 1694, 1372,
			1851, 1743, 1735, 833, 748, 1265, 1885, 1874, 2007, 1661, 1895, 1537, 1622, 1355, 762,
			1533, 1771, 1966, 1978, 1572, 1833, 1969, 1805, 1820, 1536, 1911, 2009, 1817, 1268,
			1998, 1759, 2008, 2002, 1187, 1896, 1850, 1734, 1849, 1589, 1302, 444, 1280, 1590, 1959,
			902, 1709, 1932, 1277, 1561, 1301, 1831, 1286, 1693, 1927, 1467, 1384, 1662, 1401, 716,
			1634, 1785, 1801, 1380, 1971, 1292, 1828, 185, 1560, 1322, 1787, 1545, 1395, 1445, 1807,
			1750, 1867, 1433, 1894, 1821, 1983, 1578, 1669, 1610, 1549, 1556, 1346, 1616, 1999,
			1925, 1387, 1659, 1457, 1237, 1808, 69, 1906, 1449, 1723, 1974, 1919, 1914, 1338, 1305,
			1347, 1903, 1929, 1712, 1607, 1400, 197, 1575, 1282, 1296, 1737, 1396, 2003, 1453, 1660,
			1646, 1991, 1565, 1416, 1995, 1784, 1367, 1420, 1593, 1654, 1306, 1916, 1797, 1594,
			1471, 1405, 1698, 1541, 1900, 1963, 1696, 1574, 1853, 511, 1603, 1889, 1940, 1843, 1979,
			272, 1726, 1294, 1877, 1441, 1697, 1644, 1956, 1689, 1665, 1631, 1717, 1781, 1450, 1618,
			1317, 1799, 1950, 1722, 1960, 1628, 1941, 1977, 1775, 1529,
		];
		const result = solvePart1(Object.assign([], input));
		assert.equal(result, 988771);
	});
});

describe("day 1 part 2", () => {
	it("should multiply three numbers that can add up to 2020 using the example input", () => {
		const input = [1721, 979, 366, 299, 675, 1456];
		const result = solvePart2(Object.assign([], input));
		assert.equal(result, 241861950);
	});
	it("should multiply three numbers that can add up to 2020 using the AOC input", () => {
		const input = [
			1408, 1335, 1648, 1458, 1627, 1928, 1967, 1827, 1606, 1569, 1893, 1866, 1768, 1795,
			1264, 1684, 1552, 1343, 1917, 1675, 1731, 1800, 1413, 1879, 1664, 1350, 1694, 1372,
			1851, 1743, 1735, 833, 748, 1265, 1885, 1874, 2007, 1661, 1895, 1537, 1622, 1355, 762,
			1533, 1771, 1966, 1978, 1572, 1833, 1969, 1805, 1820, 1536, 1911, 2009, 1817, 1268,
			1998, 1759, 2008, 2002, 1187, 1896, 1850, 1734, 1849, 1589, 1302, 444, 1280, 1590, 1959,
			902, 1709, 1932, 1277, 1561, 1301, 1831, 1286, 1693, 1927, 1467, 1384, 1662, 1401, 716,
			1634, 1785, 1801, 1380, 1971, 1292, 1828, 185, 1560, 1322, 1787, 1545, 1395, 1445, 1807,
			1750, 1867, 1433, 1894, 1821, 1983, 1578, 1669, 1610, 1549, 1556, 1346, 1616, 1999,
			1925, 1387, 1659, 1457, 1237, 1808, 69, 1906, 1449, 1723, 1974, 1919, 1914, 1338, 1305,
			1347, 1903, 1929, 1712, 1607, 1400, 197, 1575, 1282, 1296, 1737, 1396, 2003, 1453, 1660,
			1646, 1991, 1565, 1416, 1995, 1784, 1367, 1420, 1593, 1654, 1306, 1916, 1797, 1594,
			1471, 1405, 1698, 1541, 1900, 1963, 1696, 1574, 1853, 511, 1603, 1889, 1940, 1843, 1979,
			272, 1726, 1294, 1877, 1441, 1697, 1644, 1956, 1689, 1665, 1631, 1717, 1781, 1450, 1618,
			1317, 1799, 1950, 1722, 1960, 1628, 1941, 1977, 1775, 1529,
		];
		const result = solvePart2(Object.assign([], input));
		assert.equal(result, 171933104);
	});
	it("should multiply three numbers that can add up to 2020 using the example input, using recursion", () => {
		const input = [1721, 979, 366, 299, 675, 1456];
		const result = solvePart2Recursively(Object.assign([], input));
		assert.equal(result, 241861950);
	});
	it("should multiply three numbers that can add up to 2020 using the AOC input, using recursion", () => {
		const input = [
			1408, 1335, 1648, 1458, 1627, 1928, 1967, 1827, 1606, 1569, 1893, 1866, 1768, 1795,
			1264, 1684, 1552, 1343, 1917, 1675, 1731, 1800, 1413, 1879, 1664, 1350, 1694, 1372,
			1851, 1743, 1735, 833, 748, 1265, 1885, 1874, 2007, 1661, 1895, 1537, 1622, 1355, 762,
			1533, 1771, 1966, 1978, 1572, 1833, 1969, 1805, 1820, 1536, 1911, 2009, 1817, 1268,
			1998, 1759, 2008, 2002, 1187, 1896, 1850, 1734, 1849, 1589, 1302, 444, 1280, 1590, 1959,
			902, 1709, 1932, 1277, 1561, 1301, 1831, 1286, 1693, 1927, 1467, 1384, 1662, 1401, 716,
			1634, 1785, 1801, 1380, 1971, 1292, 1828, 185, 1560, 1322, 1787, 1545, 1395, 1445, 1807,
			1750, 1867, 1433, 1894, 1821, 1983, 1578, 1669, 1610, 1549, 1556, 1346, 1616, 1999,
			1925, 1387, 1659, 1457, 1237, 1808, 69, 1906, 1449, 1723, 1974, 1919, 1914, 1338, 1305,
			1347, 1903, 1929, 1712, 1607, 1400, 197, 1575, 1282, 1296, 1737, 1396, 2003, 1453, 1660,
			1646, 1991, 1565, 1416, 1995, 1784, 1367, 1420, 1593, 1654, 1306, 1916, 1797, 1594,
			1471, 1405, 1698, 1541, 1900, 1963, 1696, 1574, 1853, 511, 1603, 1889, 1940, 1843, 1979,
			272, 1726, 1294, 1877, 1441, 1697, 1644, 1956, 1689, 1665, 1631, 1717, 1781, 1450, 1618,
			1317, 1799, 1950, 1722, 1960, 1628, 1941, 1977, 1775, 1529,
		];
		const result = solvePart2Recursively(Object.assign([], input));
		assert.equal(result, 171933104);
	});
});
