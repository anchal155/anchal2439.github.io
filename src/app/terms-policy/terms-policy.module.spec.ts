import { TermsPolicyModule } from './terms-policy.module';

describe('TermsPolicyModule', () => {
  let termsPolicyModule: TermsPolicyModule;

  beforeEach(() => {
    termsPolicyModule = new TermsPolicyModule();
  });

  it('should create an instance', () => {
    expect(termsPolicyModule).toBeTruthy();
  });
});
