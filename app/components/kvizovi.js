import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class KvizoviComponent extends Component {
  @tracked query = '';
}
