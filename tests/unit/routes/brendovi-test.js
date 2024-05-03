import { module, test } from 'qunit';
import { setupTest } from 'brain-teaser/tests/helpers';

module('Unit | Route | brendovi', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:brendovi');
    assert.ok(route);
  });
});
