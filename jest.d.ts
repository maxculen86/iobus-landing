import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Mock<T = unknown, Y extends unknown[] = unknown[]> {
      mockReturnValue(value: T): this;
      mockImplementation(fn: (...args: Y) => T): this;
    }
  }
} 