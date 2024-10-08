import "@testing-library/jest-dom";

// setupTests.js
Object.defineProperty(window, "matchMedia", {
  writable: true,
  configurable: true,
  value: jest.fn().mockImplementation((query) => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // For older browsers
      removeListener: jest.fn(), // For older browsers
      addEventListener: jest.fn(), // For modern browsers
      removeEventListener: jest.fn(), // For modern browsers
      dispatchEvent: jest.fn(), // For modern browsers
    };
  }),
});
