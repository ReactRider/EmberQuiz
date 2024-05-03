import Component from '@glimmer/component';

export default class KvizoviFilterComponent extends Component {
    get results() {
        let { kvizovi, query } = this.args;

        if(query) {
            kvizovi = kvizovi.filter((kviz)=>kviz.title.includes(query));
        }
        
        return kvizovi;
    }
}
