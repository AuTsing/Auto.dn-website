# UIObject UI 对象

该类为无障碍节点的封装，可以通过 UI 选择器获得。

## UIObject.getParent

`getParent(): UiObject | null`

获取该 UI 对象的父对象。

## UIObject.getChild

`getChild(i: number): UiObject | null`

获取该 UI 对象的子对象。

## UIObject.getId

`getId(): string`

获取属性 `id` 。

## UIObject.getDesc

`getDesc(): string`

获取属性 `desc` 。

## UIObject.getClassName

`getClassName(): string`

获取属性 `className` 。

## UIObject.getPackageName

`getPackageName(): string`

获取属性 `packageName` 。

## UIObject.getText

`getText(): string`

获取属性 `text` 。

## UIObject.getDepth

`getDepth(): number`

获取属性 `depth` 。

## UIObject.getIndexInParent

`getIndexInParent(): number`

获取属性 `indexInParent` 。

## UIObject.getDrawingOrder

`getDrawingOrder(): number`

获取属性 `drawingOrder` 。

## UIObject.getRow

`getRow(): number`

获取属性 `row` 。

## UIObject.getRowSpan

`getRowSpan(): number`

获取属性 `rowSpan` 。

## UIObject.getRowCount

`getRowCount(): number`

获取属性 `rowCount` 。

## UIObject.getColumn

`getColumn(): number`

获取属性 `column` 。

## UIObject.getColumnSpan

`getColumnSpan(): number`

获取属性 `columnSpan` 。

## UIObject.getColumnCount

`getColumnCount(): number`

获取属性 `columnCount` 。

## UIObject.getAccessibilityFocused

`getAccessibilityFocused(): boolean`

获取属性 `accessibilityFocused` 。

## UIObject.getChecked

`getChecked(): boolean`

获取属性 `checked` 。

## UIObject.getCheckable

`getCheckable(): boolean`

获取属性 `checkable` 。

## UIObject.getClickable

`getClickable(): boolean`

获取属性 `clickable` 。

## UIObject.getContextClickable

`getContextClickable(): boolean`

获取属性 `contextClickable` 。

## UIObject.getDismissable

`getDismissable(): boolean`

获取属性 `dismissable` 。

## UIObject.getEnabled

`getEnabled(): boolean`

获取属性 `enabled` 。

## UIObject.getEditable

`getEditable(): boolean`

获取属性 `editable` 。

## UIObject.getFocusable

`getFocusable(): boolean`

获取属性 `focusable` 。

## UIObject.getFocused

`getFocused(): boolean`

获取属性 `focused` 。

## UIObject.getLongClickable

`getLongClickable(): boolean`

获取属性 `longClickable` 。

## UIObject.getSelected

`getSelected(): boolean`

获取属性 `selected` 。

## UIObject.getScrollable

`getScrollable(): boolean`

获取属性 `scrollable` 。

## UIObject.getVisibleToUser

`getVisibleToUser(): boolean`

获取属性 `visibleToUser` 。

## UIObject.getPassword

`getPassword(): boolean`

获取属性 `password` 。

## UIObject.getContentInvalid

`getContentInvalid(): boolean`

获取属性 `contentInvalid` 。

## UIObject.getMultiLine

`getMultiLine(): boolean`

获取属性 `multiLine` 。

## UIObject.getBoundsInScreen

`getBoundsInScreen(): Rect`

获取对象的矩形。

## UIObject.getChildCount

`getChildCount(): number`

获取对象的子对象个数。

## UIObject.getChildren

`getChildren(): UiObject[]`

获取对象的子对象。

## UIObject.getAllChildren

`getAllChildren(): UiObject[]`

获取对象的所有子对象（递归获取）。

## UIObject.click

`click(): void`

对对象执行点击操作。

## UIObject.longClick

`longClick(): void`

对对象执行长按操作。

## UIObject.accessibilityFocus

`accessibilityFocus(): void`

对对象执行无障碍聚焦操作。

## UIObject.clearAccessibilityFocus

`clearAccessibilityFocus(): void`

对对象执行取消无障碍聚焦操作。

## UIObject.focus

`focus(): void`

对对象执行聚焦操作。

## UIObject.clearFocus

`clearFocus(): void`

对对象执行取消聚焦操作。

## UIObject.copy

`copy(): void`

对对象执行复制操作。

## UIObject.paste

`paste(): void`

对对象执行粘贴操作。

## UIObject.select

`select(): void`

对对象执行选中操作。

## UIObject.cut

`cut(): void`

对对象执行剪切操作。

## UIObject.collapse

`collapse(): void`

对对象执行折叠操作。

## UIObject.expand

`expand(): void`

对对象执行展开操作。

## UIObject.dismiss

`dismiss(): void`

对对象执行消除操作。

## UIObject.showOnScreen

`showOnScreen(): void`

对对象执行在屏幕展示操作。

## UIObject.scrollForward

`scrollForward(): void`

对对象执行向前滚动操作。

## UIObject.scrollBackward

`scrollBackward(): void`

对对象执行向后滚动操作。

## UIObject.scrollUp

`scrollUp(): void`

对对象执行向上滚动操作。

## UIObject.scrollDown

`scrollDown(): void`

对对象执行向下滚动操作。

## UIObject.scrollLeft

`scrollLeft(): void`

对对象执行向左滚动操作。

## UIObject.scrollRight

`scrollRight(): void`

对对象执行向右滚动操作。

## UIObject.contextClick

`contextClick(): void`

对对象执行内容点击操作。

## UIObject.setSelection

`setSelection(start: number, end: number): void`

-   `start` 需要设置选中的开始位置
-   `end` 需要设置选中的结束位置

对对象执行设置选中操作。

## UIObject.setText

`setText(text: string): void`

-   `text` 需要设置的文本

对对象执行设置文本操作。

## UIObject.setProgress

`setProgress(value: number): void`

-   `value` 需要设置的进度

对对象执行设置进度操作。

## UIObject.scrollTo

`scrollTo(row: number, column: number): void`

-   `row` 需要滚动到的行
-   `column` 需要滚动到的列

对对象执行滚动到操作。
