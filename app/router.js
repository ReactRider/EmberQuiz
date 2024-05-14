import EmberRouter from '@ember/routing/router';
import config from 'brain-teaser/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('biologija');
  this.route('brendovi');
  this.route('decijikviz');
  this.route('dinosaurusi');
  this.route('domacifilmovi');
  this.route('egipatkamitologija');
  this.route('geografija');
  this.route('glavnigradovi');
  this.route('grckamitologija');
  this.route('haripoter');
  this.route('istorija');
  this.route('it');
  this.route('knjizevnost');
  this.route('matematika');
  this.route('menadzment');
  this.route('muzika');
  this.route('naucnici');
  this.route('olimpijskeigre');
  this.route('periodnisistemi');
  this.route('rimskamitologija');
  this.route('stranifilmovi');
  this.route('zastave');
  this.route('egipatskamitologija');
  this.route('prijatelji');
});
