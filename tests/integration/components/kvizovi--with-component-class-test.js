import { module, test } from 'qunit';
import { setupRenderingTest } from 'brain-teaser/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kvizovi--with-component-class',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<KvizoviWithComponentClass />`);

      assert.dom().hasText('');

      // Template block usage:
      await render(hbs`
      <KvizoviWithComponentClass>
        template block text
      </KvizoviWithComponentClass>
    `);

      assert.dom().hasText('template block text');
    });
  },
);
