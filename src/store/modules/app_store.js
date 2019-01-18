import { action, observable } from 'mobx';
import _ from 'lodash';

class AppStore {
    @observable data = {}

    @action initData() {
      this.data = {
        appNumber: 10,
        countdown: 20
      }
    }
  
    @action setData(path, newValue) {
      if (Object.prototype.toString.call(_.result(this.data, path)) !== '[object, Object]') {
        _.set(this.data, path, newValue);
      } else {
        _.set(this.data, path, {
          ..._.result(this.data, path),
          ...newValue
        })
      }
    }
}
export default new AppStore()