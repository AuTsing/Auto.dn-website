# Auto.dn Core 更新日志

## [0.17.0] - 2025-10-14

-   库名更改为`autodncore`
-   新增接口 `ShellExecResult`
-   新增类型别名 `ProjectCategory` 的选项
-   接口 `ProjectInfo` 移除属性 `name`, `path`, `category`, `entryPoint`, `workingDir`, `configFilePath`, `shortcut`, `permissions`, `args`, `repository`, `updatedAt`, `cachedAt`, `tasks`
-   接口 `ProjectInfo` 新增属性 `project`
-   函数 `execSh` 签名更新
-   函数 `execShSync` 签名更新
-   函数 `execSu` 签名更新
-   函数 `execSuSync` 签名更新
-   函数 `execLibsu` 签名更新
-   函数 `execLibsuSync` 签名更新
-   函数 `execShizuku` 签名更新
-   函数 `execShizukuSync` 签名更新
-   接口 `ShellResultConstructorOptions` 移除
-   类 `ShellResult` 移除
-   修复工程结束后 `PaddleModel` 可能会因没有释放导致内存泄漏的问题

## [0.16.0] - 2025-10-08

-   新增接口 `PaddleDetOptions`
-   新增接口 `PaddleRecOptions`
-   新增接口 `PaddleOcrOptions`
-   新增接口 `PaddleDetResult`
-   新增接口 `PaddleRecResult`
-   新增接口 `PaddleOcrResult`
-   新增类 `PaddleModel`
-   新增函数 `loadPaddleModel`
-   枚举类 `DnnBackend` 移除
-   枚举类 `DnnTarget` 移除
-   接口 `DetectResult` 移除
-   接口 `RecognizeResult` 移除
-   类 `Model` 移除
-   函数 `loadModel` 移除
-   函数 `loadOnnxModel` 移除
-   函数 `loadCaffeModel` 移除
-   函数 `loadDarknetModel` 移除
-   函数 `loadTfliteModel` 移除
-   函数 `loadTensorfloModel` 移除
-   函数 `loadTorchModel` 移除

## [0.15.3] - 2025-09-16

-   命名空间 `Autodn` dts 添加 version

## [0.15.0] - 2025-09-11

-   根命名空间 `Android` 更名为 `Autodn`
-   所有子命名空间移除，成员迁移至 `Autodn`
-   函数 `refresh` 更名为 `refreshImage`
-   函数 `lock` 更名为 `lockImage`
-   函数 `unlock` 更名为 `unlockImage`
-   函数 `run` 更名为 `runProject`
-   函数 `stop` 更名为 `stopProject`，变更为同步函数
-   函数 `stopAll` 更名为 `stopAllProjects`，变更为同步函数
-   函数 `load` 移除
-   函数 `list` 更名为 `listProjects`，变更为异步函数
-   函数 `listRunning` 更名为 `listRunningProjects`
-   函数 `destroy` 更名为 `destroyProject`
-   函数 `getInfo` 更名为 `getProjectInfo`
-   函数 `create` 更名为 `gitClone`
-   函数 `toPackageName` 变更为异步函数
-   函数 `toAppName` 变更为异步函数
-   函数 `launchPackage` 变更为异步函数
-   函数 `launchApp` 变更为异步函数
-   函数 `stopPackage` 变更为异步函数
-   函数 `stopApp` 变更为异步函数
-   函数 `installPackage` 变更为异步函数
-   函数 `uninstallPackage` 变更为异步函数
-   函数 `uninstallApp` 变更为异步函数
-   函数 `getCurrentPackage` 变更为异步函数
-   函数 `getCurrentApp` 变更为异步函数
-   函数 `getRunningPackages` 更名为 `listRunningPackages`，变更为异步函数
-   函数 `getRunningApps` 更名为 `listRunningApps`，变更为异步函数
-   函数 `getDenofaVersion` 更名为 `getAppVersion`
-   函数 `getDenofaCoreVersion` 更名为 `getCoreVersion`
