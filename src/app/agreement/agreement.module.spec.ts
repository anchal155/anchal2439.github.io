import { AgreementModule } from './agreement.module';

describe('AgreementModule', () => {
  let agreementModule: AgreementModule;

  beforeEach(() => {
    agreementModule = new AgreementModule();
  });

  it('should create an instance', () => {
    expect(agreementModule).toBeTruthy();
  });
});
