const {expect, element, device, by} = require('detox');
describe('Example', () => {
  before(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('testItemId'))).toBeVisible();
  });
});
