# UISelector UI 选择器

该类为 UI 对象选择器，可以通过该类搜索筛选获得无障碍节点。

## UISelector.builder

`static builder(): UiSelectorBuilder`

返回一个新的 UI 选择器构造器。

## UISelector.find

`find(): UiObject[]`

根据选择器里面的条件查找一次 UI 节点，返回所有找到的节点。

## UISelector.findOne

`findOne(): UiObject | null`

根据选择器里面的条件查找一次 UI 节点，返回首个找到的节点。

## UISelector.untilFind

`untilFind(timeout: number | undefined): Promise<UiObject[]>`

-   `timeout` 查找超时

根据选择器里面的条件查找一次 UI 节点，并以 Promise 的方式等待返回查找结果。

## UISelector.untilFindOne

`untilFindOne(timeout: number | undefined): Promise<UiObject>`

-   `timeout` 查找超时

根据选择器里面的条件查找一次 UI 节点，并以 Promise 的方式等待返回查找结果。

## UISelector.exists

`exists(): boolean`

判断选择器内的条件的节点是否存在。

## UISelector.wait

`wait(timeout: number | undefined): Promise<void>`

-   `timeout` 查找超时

等待选择器内条件的节点出现。

# UISelectorBuilder UI 选择器构造器

该类为无障碍 UI 节点选择器构造器，用于构造特定条件的 UI 选择器。

## UISelectorBuilder.id

`id(id: string): UiSelectorBuilder`

-   `id` 目标字符串

增加条件字段 `id` 。

## UISelectorBuilder.idEquals

`idEquals(id: string): UiSelectorBuilder`

-   `id` 目标字符串

增加条件字段 `id` 。

## UISelectorBuilder.idContains

`idContains(content: string): UiSelectorBuilder`

-   `content` 目标包含字符串

增加条件字段 `id` 应包含 `content` 。

## UISelectorBuilder.idMatches

`idMatches(regex: string): UiSelectorBuilder`

-   `regex` 目标匹配字符串

增加条件字段 `id` 应匹配 `regex` 。

## UISelectorBuilder.idStartsWith

`idStartsWith(prefix: string): UiSelectorBuilder`

-   `prefix` 目标前缀字符串

增加条件字段 `id` 应以 `prefix` 为前缀。

## UISelectorBuilder.idEndsWith

`idEndsWith(suffix: string): UiSelectorBuilder`

-   `suffix` 目标后缀字符串

增加条件字段 `id` 应以 `suffix` 为后缀。

## UISelectorBuilder.text

`text(text: string): UiSelectorBuilder`

-   `text` 目标字符串

增加条件字段 `text` 。

## UISelectorBuilder.textEquals

`textEquals(text: string): UiSelectorBuilder`

-   `text` 目标字符串

增加条件字段 `text` 。

## UISelectorBuilder.textContains

`textContains(content: string): UiSelectorBuilder;`

-   `content` 目标包含字符串

增加条件字段 `text` 应包含 `content` 。

## UISelectorBuilder.textMatches

`textMatches(regex: string): UiSelectorBuilder`

-   `regex` 目标匹配字符串

增加条件字段 `text` 应匹配 `regex` 。

## UISelectorBuilder.textStartsWith

`textStartsWith(prefix: string): UiSelectorBuilder`

-   `prefix` 目标前缀字符串

增加条件字段 `text` 应以 `prefix` 为前缀。

## UISelectorBuilder.textEndsWith

`textEndsWith(suffix: string): UiSelectorBuilder`

-   `suffix` 目标后缀字符串

增加条件字段 `text` 应以 `suffix` 为后缀。

## UISelectorBuilder.desc

`desc(desc: string): UiSelectorBuilder`

-   `desc` 目标字符串

增加条件字段 `desc` 。

## UISelectorBuilder.descEquals

`descEquals(desc: string): UiSelectorBuilder`

-   `desc` 目标字符串

增加条件字段 `desc` 。

## UISelectorBuilder.descContains

`descContains(content: string): UiSelectorBuilder`

-   `content` 目标包含字符串

增加条件字段 `desc` 应包含 `content` 。

## UISelectorBuilder.descMatches

`descMatches(regex: string): UiSelectorBuilder`

-   `regex` 目标匹配字符串

增加条件字段 `desc` 应匹配 `regex` 。

## UISelectorBuilder.descStartsWith

`descStartsWith(prefix: string): UiSelectorBuilder`

-   `prefix` 目标前缀字符串

增加条件字段 `desc` 应以 `prefix` 为前缀。

## UISelectorBuilder.descEndsWith

`descEndsWith(suffix: string): UiSelectorBuilder`

-   `suffix` 目标后缀字符串

增加条件字段 `desc` 应以 `suffix` 为后缀。

## UISelectorBuilder.className

`className(className: string): UiSelectorBuilder`

-   `className` 目标字符串

增加条件字段 `className` 。

## UISelectorBuilder.classNameEquals

`classNameEquals(className: string): UiSelectorBuilder`

-   `className` 目标字符串

增加条件字段 `className` 。

## UISelectorBuilder.classNameContains

`classNameContains(content: string): UiSelectorBuilder`

-   `content` 目标包含字符串

增加条件字段 `className` 应包含 `content` 。

## UISelectorBuilder.classNameMatches

`classNameMatches(regex: string): UiSelectorBuilder`

-   `regex` 目标匹配字符串

增加条件字段 `className` 应匹配 `regex` 。

## UISelectorBuilder.classNameStartsWith

`classNameStartsWith(prefix: string): UiSelectorBuilder`

-   `prefix` 目标前缀字符串

增加条件字段 `className` 应以 `prefix` 为前缀。

## UISelectorBuilder.classNameEndsWith

`classNameEndsWith(suffix: string): UiSelectorBuilder`

-   `suffix` 目标后缀字符串

增加条件字段 `className` 应以 `suffix` 为后缀。

## UISelectorBuilder.packageName

`packageName(packageName: string): UiSelectorBuilder`

-   `packageName` 目标字符串

增加条件字段 `packageName` 。

## UISelectorBuilder.packageNameEquals

`packageNameEquals(packageName: string): UiSelectorBuilder`

-   `packageName` 目标字符串

增加条件字段 `packageName` 。

## UISelectorBuilder.packageNameContains

`packageNameContains(content: string): UiSelectorBuilder`

-   `content` 目标包含字符串

增加条件字段 `packageName` 应包含 `content` 。

## UISelectorBuilder.packageNameMatches

`packageNameMatches(regex: string): UiSelectorBuilder`

-   `regex` 目标匹配字符串

增加条件字段 `packageName` 应匹配 `regex` 。

## UISelectorBuilder.packageNameStartsWith

`packageNameStartsWith(prefix: string): UiSelectorBuilder`

-   `prefix` 目标前缀字符串

增加条件字段 `packageName` 应以 `prefix` 为前缀。

## UISelectorBuilder.packageNameEndsWith

`packageNameEndsWith(suffix: string): UiSelectorBuilder`

-   `suffix` 目标后缀字符串

增加条件字段 `packageName` 应以 `suffix` 为后缀。

## UISelectorBuilder.bounds

`bounds(left: number, top: number, right: number, bottom: number): UiSelectorBuilder`

-   `left` 左边界
-   `top` 上边界
-   `right` 右边界
-   `bottom` 下边界

增加条件约束矩形边界。

## UISelectorBuilder.boundsEquals

`boundsEquals(left: number, top: number, right: number, bottom: number): UiSelectorBuilder`

-   `left` 左边界
-   `top` 上边界
-   `right` 右边界
-   `bottom` 下边界

增加条件约束矩形边界。

## UISelectorBuilder.boundsInside

`boundsInside(left: number, top: number, right: number, bottom: number): UiSelectorBuilder`

-   `left` 左边界
-   `top` 上边界
-   `right` 右边界
-   `bottom` 下边界

增加条件约束矩形应在给定边界内。

## UISelectorBuilder.boundsContains

`boundsInside(left: number, top: number, right: number, bottom: number): UiSelectorBuilder`

-   `left` 左边界
-   `top` 上边界
-   `right` 右边界
-   `bottom` 下边界

增加条件约束矩形应在给定边界外。

## UISelectorBuilder.checkable

`checkable(value: boolean | undefined): UiSelectorBuilder`

-   `value` 目标是否满足条件

增加条件是否可勾选。

## UISelectorBuilder.checked

`checked(value: boolean | undefined): UiSelectorBuilder`

-   `value` 目标是否满足条件

增加条件是否勾选。

## UISelectorBuilder.focusable

`focusable(value: boolean | undefined): UiSelectorBuilder`

-   `value` 目标是否满足条件

增加条件是否可聚焦。

## UISelectorBuilder.focused

`focused(value: boolean | undefined): UiSelectorBuilder`

-   `value` 目标是否满足条件

增加条件是否聚焦。

## UISelectorBuilder.visibleToUser

`visibleToUser(value: boolean | undefined): UiSelectorBuilder`

-   `value` 目标是否满足条件

增加条件是否用户可见。

## UISelectorBuilder.accessibilityFocused

`accessibilityFocused(value: boolean | undefined): UiSelectorBuilder`

-   `value` 目标是否满足条件

增加条件是否无障碍聚焦。

## UISelectorBuilder.selected

`selected(value: boolean | undefined): UiSelectorBuilder`

-   `value` 目标是否满足条件

增加条件是否已选择。

## UISelectorBuilder.clickable

`clickable(value: boolean | undefined): UiSelectorBuilder`

-   `value` 目标是否满足条件

增加条件是否可点击。

## UISelectorBuilder.longClickable

`longClickable(value: boolean | undefined): UiSelectorBuilder`

-   `value` 目标是否满足条件

增加条件是否可长按。

## UISelectorBuilder.enabled

`enabled(value: boolean | undefined): UiSelectorBuilder`

-   `value` 目标是否满足条件

增加条件是否启用。

## UISelectorBuilder.password

`password(value: boolean | undefined): UiSelectorBuilder`

-   `value` 目标是否满足条件

增加条件是否为密码。

## UISelectorBuilder.scrollable

`scrollable(value: boolean | undefined): UiSelectorBuilder`

-   `value` 目标是否满足条件

增加条件是否可滚动。

## UISelectorBuilder.editable

`editable(value: boolean | undefined): UiSelectorBuilder`

-   `value` 目标是否满足条件

增加条件是否可编辑。

## UISelectorBuilder.contentInvalid

`contentInvalid(value: boolean | undefined): UiSelectorBuilder`

-   `value` 目标是否满足条件

增加条件是否内容无效。

## UISelectorBuilder.contextClickable

`contextClickable(value: boolean | undefined): UiSelectorBuilder`

-   `value` 目标是否满足条件

增加条件是否上下文可点击。

## UISelectorBuilder.multiLine

`multiLine(value: boolean | undefined): UiSelectorBuilder`

-   `value` 目标是否满足条件

增加条件是否复合行。

## UISelectorBuilder.dismissable

`dismissable(value: boolean | undefined): UiSelectorBuilder`

-   `value` 目标是否满足条件

增加条件是否可搁置。

## UISelectorBuilder.depth

`depth(value: number): UiSelectorBuilder`

-   `value` 目标数值

增加条件目标深度。

## UISelectorBuilder.row

`row(value: number): UiSelectorBuilder`

-   `value` 目标数值

增加条件目标所在行数。

## UISelectorBuilder.rowCount

`rowCount(value: number): UiSelectorBuilder`

-   `value` 目标数值

增加条件目标行数。

## UISelectorBuilder.rowSpan

`rowSpan(value: number): UiSelectorBuilder`

-   `value` 目标数值

增加条件目标行占用。

## UISelectorBuilder.column

`column(value: number): UiSelectorBuilder`

-   `value` 目标数值

增加条件目标所在列数。

## UISelectorBuilder.columnCount

`columnCount(value: number): UiSelectorBuilder`

-   `value` 目标数值

增加条件目标列数。

## UISelectorBuilder.columnSpan

`columnSpan(value: number): UiSelectorBuilder`

-   `value` 目标数值

增加条件目标列占用。

## UISelectorBuilder.indexInParent

`indexInParent(value: number): UiSelectorBuilder`

-   `value` 目标数值

增加条件目标在父节点中的索引。

## UISelectorBuilder.drawingOrder

`drawingOrder(value: number): UiSelectorBuilder`

-   `value` 目标数值

增加条件目标绘制顺序。

## UISelectorBuilder.bfs

`bfs(): UiSelectorBuilder`

增加条件使用 BFS 算法。

## UISelectorBuilder.dfs

`dfs(): UiSelectorBuilder`

增加条件使用 DFS 算法。

## UISelectorBuilder.build

`build(): UiSelector`

构造选择器，获得选择器对象。
