import { module, test } from 'qunit';
import { setupRenderingTest } from 'brain-teaser/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | quiz/quizbutton', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Quiz::Quizbutton />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Quiz::Quizbutton>
        template block text
      </Quiz::Quizbutton>
    `);

    assert.dom().hasText('template block text');
  });
});
