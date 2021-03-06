const EventEmitter = require("events");

class PrankExecutorBase extends EventEmitter {
  constructor(configuration, schedule, expressApp) {
    super();
    console.log(`Sin ${configuration.name} is now initialized with the the
             following config ${configuration}`);

    this.context = {};
    this.context.expressApp = expressApp;
    this.context.configuration = configuration;
    this.context.schedule = schedule;
    schedule.on("start", () => {
      console.log(`Prank ${this.context.configuration.name} just received a start command from scheduler`);
      this.start();
    });
    schedule.on("stop", () => {
      console.log(`Prank ${this.context.configuration.name} just received a stop command from scheduler`);
      this.stop();
    });
  }
}

module.exports = PrankExecutorBase;