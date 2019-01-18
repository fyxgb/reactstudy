import React, { Component } from 'react';
import { 
  Button,
  Modal
 } from "antd";
import { inject, observer } from 'mobx-react';

const confirm = Modal.confirm;

@inject('appStore')
@observer
class App extends Component {
  constructor(props) {
    super(props)
    props.appStore.initData();
  }

  eatOneApple() {
    this.props.appStore.setData('appNumber', --this.props.appStore.data.appNumber);
  }

  showConfirm() {
    var _self = this;
    confirm({
      title: '提示',
      okText: '确定',
      cancelText: '取消',
      content: '你确定吃掉所有苹果吗？',
      onOk() {
        _self.props.appStore.setData('appNumber', 0);
      },
      onCancel() {
        console.log('取消');
      },
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.props.appStore.setData('appNumber', ++this.props.appStore.data.appNumber);
    }, 20000);
    setInterval(() => {
      this.props.appStore.data.countdown === 1 ? this.props.appStore.setData('countdown', 20)
      : this.props.appStore.setData('countdown', --this.props.appStore.data.countdown);
    }, 1000);
  }

  render() {
    if(this.props.appStore.data.appNumber === 0){
      return (
        <div className="App">
          <header className="App-header count-down-time">
            <div>
              <p>你已吃完所有苹果，距离下次苹果成熟还有</p>
              <span>{this.props.appStore.data.countdown}</span>秒
            </div>
          </header>
        </div>
      );
    }else{
      return (
        <div className="App">
          <header className="App-header">
            <div>
              你目前拥有
              <span>{this.props.appStore.data.appNumber}</span>
              个苹果
            </div>
            <div className="count-down">
            距离下次长出苹果还有<span>{this.props.appStore.data.countdown}</span>秒
            </div>
          </header>
          <article className="App-container">
            <div className="eat-app">
              <Button onClick={this.eatOneApple.bind(this)}>吃一个苹果</Button>
            </div>
            <div className="eat-app">
              <Button type="danger" onClick={this.showConfirm.bind(this)}>吃掉所有苹果</Button>
            </div>
          </article>
        </div>
      );
    }
  }
}

export default App;
