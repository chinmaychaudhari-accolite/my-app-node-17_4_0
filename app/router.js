import EmberRouter from '@ember/routing/router';
import config from 'my-app-node-17-4-0/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('charts');
  
  this.route('ChartList', function () {
    this.route('chart2');
    this.route('chart1');
  });

  this.route('TimeSeries', function () {
    this.route('time1');
  });
});
