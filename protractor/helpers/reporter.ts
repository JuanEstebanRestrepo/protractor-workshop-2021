import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';
export let reporter = () => {
  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.PRETTY
    }
  }));
};
