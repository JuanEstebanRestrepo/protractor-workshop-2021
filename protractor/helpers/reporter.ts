import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';

const { AwesomeReport } = require('jasmine-awesome-report');

export let reporter = () => {
  const config = {
    fullPath: 'reports',
    fileName: 'awesome',
    merge: true
  };
  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.PRETTY
    }
  }));
  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
};
