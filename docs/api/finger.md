# finger 手指

该模块提供模拟手指进行操作等行为。

## finger.accessibility 基于无障碍的操作

基于无障碍的操作需要赋予应用无障碍权限，请先在无障碍设置中开启，如果不赋予权限直接使用以下函数将会导致错误。

## finger.accessibility.click

`click(x: number, y: number): Promise<void>`

-   `x` 需要点击的横坐标
-   `y` 需要点击的纵坐标

模拟点击屏幕。

## finger.accessibility.press

`press(x: number, y: number, duration: number = 1000): Promise<void>`

-   `x` 需要长按的横坐标
-   `y` 需要长按的纵坐标
-   `duration` 长按持续时间，单位为毫秒

模拟长按屏幕。

## finger.accessibility.swipe

`swipe(xFrom: number, yFrom: number, xTo: number, yTo: number, duration: number = 1000): Promise<void>`

-   `xFrom` 需要滑动的起点的横坐标
-   `yFrom` 需要滑动的起点的纵坐标
-   `xTo` 需要滑动的终点的横坐标
-   `yTo` 需要滑动的终点的纵坐标
-   `duration` 长按持续时间，单位为毫秒

模拟滑动屏幕。

## finger.accessibility.home

`home(): void`

模拟点按 Home 键。

## finger.accessibility.back

`back(): void`

模拟点按返回键。

## finger.accessibility.recents

`recents(): void`

模拟点按最近任务键。

## finger.accessibility.notifications

`notifications(): void`

模拟下拉通知栏。

## finger.accessibility.lockScreen

`lockScreen(): void`

模拟点击锁屏键。

## finger.accessibility.powerDialog

`powerDialog(): void`

模拟长按点击电源键。

## finger.accessibility.quickSettings

`quickSettings(): void`

模拟下拉快捷设置栏。

## finger.accessibility.takeScreenshot

`takeScreenshot(): void`

模拟点击截屏键。

## finger.accessibility.toggleSplitScreen

`toggleSplitScreen(): void`

模拟点击分屏键。
