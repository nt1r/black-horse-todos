# Tasking

## Card 1

### 搭建项目基本架构 - 60min

- 初始化项目框架
- 创建View，Controller和Model模型
- 建立Model初始模型todo
- 单元测试模型

### 创建路由 - 30min

- 引入react router依赖
- 新建一个主页
- 新建一个Not Found页面
- 设置Browser Router

### 页面布局和样式 - 60min

- react页面布局
- 页面样式

## Card 2

### 添加Controller类 - 135min

- 处理新建todo事件
- 处理新建相同todo的情况
- 处理新建todo的内容为空的情况

## Card 3

### 单条待办事项的布局与样式 - 60min

- 前方的checkbox input
- 待办事项的内容
- 后方hover的删除图标

### 列表的布局和样式 - 60min

- 调整布局
- 不存在待办事项的placeholder
- 外部重叠与阴影

### 过滤栏的布局与样式 - 60min

- 前方的todo数量
- 3个过滤标签

## Card 5

### 更改待办事项的状态 - 25min

- 在view层中提供点击checkbox的事件函数，能够判断checkbox的状态，并提供被点击todo的id（10min）
- 在controller层中新建一个更改todo状态的逻辑，接受todo的id作为参数（5min）
- 在model层中的manager中提供一个更改todo状态的接口，以id作为参数（10min）

### 测试用例 - 30min

- 编写controller层的测试用例（10min）
- 编写model层的测试用例（10min）
- 编写集成测试用例（10min）
