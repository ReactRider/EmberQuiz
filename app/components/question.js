import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class QuestionComponent extends Component {
  @action showAnswer(e) {
    let answerId = e.srcElement.id;
    let answerClass = '.answer-' + answerId;
    document.querySelector(answerClass).style.opacity = '1';
  }
}
