import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ChartList/chart2', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:chart-list/chart2');
    assert.ok(route);
  });
});
