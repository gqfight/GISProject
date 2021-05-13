import React from 'react'
import ReactDOM from 'react-dom'
class Demo extends React.Component{
  //创建容器
  myRef = React.createRef()
  myRef2 = React.createRef()

  render() {
    return(
        <div>
          <input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/>
          <button onClick={this.showData}>点我提示左侧数据</button>
          <input onBlur={this.showData2} type="text"/>
        </div>
    )
  }
}
ReactDOM.render(
    <Demo/>,
    document.getElementById("root")
)