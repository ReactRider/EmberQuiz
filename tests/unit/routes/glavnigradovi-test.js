import { module, test } from 'qunit';
import { setupTest } from 'brain-teaser/tests/helpers';

module('Unit | Route | glavnigradovi', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:glavnigradovi');
    assert.ok(route);
  });
});
