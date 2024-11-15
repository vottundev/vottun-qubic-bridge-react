import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
// import matchers, { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import * as matchers from "@testing-library/jest-dom/matchers";

// declare global {
//   namespace Vi {
//     interface Assertion<T = any> extends TestingLibraryMatchers<T, void> {}
//   }
// }

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
    cleanup();
});
