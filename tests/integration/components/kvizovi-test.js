import { module, test } from 'qunit';
import { setupRenderingTest } from 'brain-teaser/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | kvizovi', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Kvizovi />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Kvizovi>
        template block text
      </Kvizovi>
    `);

    assert.dom().hasText('template block text');
  });
});
