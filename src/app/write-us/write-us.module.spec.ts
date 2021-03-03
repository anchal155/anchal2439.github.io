import { WriteUsModule } from "./write-us.module";

describe("FeaturesModule", () => {
  let featuresModule: WriteUsModule;

  beforeEach(() => {
    featuresModule = new WriteUsModule();
  });

  it("should create an instance", () => {
    expect(featuresModule).toBeTruthy();
  });
});
