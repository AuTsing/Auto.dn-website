# denofa_core 更新日志

## [0.15.2] - 2025-09-16

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
