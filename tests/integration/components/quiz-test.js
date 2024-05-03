import { module, test } from 'qunit';
import { setupRenderingTest } from 'brain-teaser/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | quiz', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Quiz />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Quiz>
        template block text
      </Quiz>
    `);

    assert.dom().hasText('template block text');
  });
});
