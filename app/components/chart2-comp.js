import Ember from 'ember';

var revenueChart1;
var initial_ds = {
  chart: {
    caption: 'Worlds Top 10 Highest paid',
    subCaption: 'Soccer Players 2017',
    yAxisName: 'Earnings (In USD)',
    numberPrefix: '$',

    //Cosmetics
    captionpadding: '30',
    yaxisname: 'Estimated fans',
    rotatevalues: '0',
    divlinecolor: '#CCCCCC',
    yaxisvaluespadding: '15',
    valuefontbold: '1',
    labelsepchar: ': ',
    labeldisplay: 'AUTO',
    numberscalevalue: '1000,1000,1000',
    numberscaleunit: 'K,M,B',
    animation: '0',
    palettecolors: 'e44a00',
    theme: 'zune',
    valueBgAlpha: '0',

    usePlotGradientColor: '0',
  },
  data: [
    {
      label: 'CR7',
      value: '93000000',
      alpha: '100',
    },
    {
      label: 'Messi',
      value: '80000000',
      alpha: '85',
    },
    {
      label: 'Neymar',
      value: '37000000',
      alpha: '75',
    },
    {
      label: 'Gareth{br}Bale',
      value: '34000000',
      alpha: '65',
    },
    {
      label: 'Zlatan{br}Ibrhimovic',
      value: '32000000',
      alpha: '56',
    },
    {
      label: 'Wayne{br}Rooney',
      value: '23600000',
      alpha: '50',
    },
    {
      label: 'Luis Suarez',
      value: '23300000',
      alpha: '45',
    },
    {
      label: 'Sergio{br}Aguero',
      value: '13700000',
      alpha: '35',
    },
    {
      label: 'James{br}Rodriguez',
      value: '29100000',
      alpha: '30',
    },
    {
      label: 'Paul{br}Pogba',
      value: '21200000',
      alpha: '20',
    },
  ],
};

export default Ember.Component.extend({
  myds:{},
  actions: {

    renderColumn: function () {
      FusionCharts.ready(function () {
        revenueChart1 = new FusionCharts({
          type: 'column2d',
          width: '800',
          height: '350',
          renderAt: 'chart-container',
          dataFormat: 'json',
          dataSource: initial_ds,
        }).render();
      });
    },

    renderBar: function () {
      FusionCharts.ready(function () {
        revenueChart1 = new FusionCharts({
          type: 'bar2d',
          width: '800',
          height: '350',
          renderAt: 'chart-container',
          dataFormat: 'json',
          dataSource: initial_ds,
        }).render();
      });
    },

    renderLine: function () {
      FusionCharts.ready(function () {
        revenueChart1 = new FusionCharts({
          type: 'line',
          width: '800',
          height: '350',
          renderAt: 'chart-container',
          dataFormat: 'json',
          dataSource: initial_ds,
        }).render();
      });
    },

    renderArea: function () {
      FusionCharts.ready(function () {
        revenueChart1 = new FusionCharts({
          type: 'area2d',
          width: '800',
          height: '350',
          renderAt: 'chart-container',
          dataFormat: 'json',
          dataSource: initial_ds,
        }).render();
      });
    },
  },
});
