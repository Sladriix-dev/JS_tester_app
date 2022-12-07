import { isInTestEnv } from './index'

describe('isInTestEnv', () => {
  it('should return true if process.env.NODE_ENV is "test"', () => {
    // Arrange
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'test';

    // Act
    const result = isInTestEnv();

    // Assert
    expect(result).toBe(true);

    // Restore
    process.env.NODE_ENV = originalEnv;
  });

  it('should return false if process.env.NODE_ENV is not "test"', () => {
    // Arrange
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    // Act
    const result = isInTestEnv();

    // Assert
    expect(result).toBe(false);

    // Restore
    process.env.NODE_ENV = originalEnv;
  });

  it('should return false if typeof process is "undefined"', () => {
    // Arrange
    const originalProcess = global.process;
    delete global.process;

    // Act
    const result = isInTestEnv();

    // Assert
    expect(result).toBe(false);

    // Restore
    global.process = originalProcess;
  });
});
