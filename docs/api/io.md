# io 输入输出

该模块提供对安卓设备的输入输出操作。

## io.toast

`toast(...args: any): void`

-   `args` 任何类型的参数，最终会将其转换为字符串输出。

在屏幕输出 Toast 信息。

```js
const { toast } = Android.io;

toast('Hello from toast!');
```

## io.log 日志

日志对象，可以在应用的日志屏幕输出日志。

## io.log.verbose

`verbose(...args: any): void`

-   `args` 任何类型的参数，最终会将其转换为字符串输出。

输出级别为 `VERBOSE` 的日志。

## io.log.info

`info(...args: any): void`

-   `args` 任何类型的参数，最终会将其转换为字符串输出。

输出级别为 `INFO` 的日志。

## io.log.debug

`debug(...args: any): void`

-   `args` 任何类型的参数，最终会将其转换为字符串输出。

输出级别为 `DEBUG` 的日志。

## io.log.warn

`warn(...args: any): void`

-   `args` 任何类型的参数，最终会将其转换为字符串输出。

输出级别为 `WARN` 的日志。

## io.log.error

`error(...args: any): void`

-   `args` 任何类型的参数，最终会将其转换为字符串输出。

输出级别为 `ERROR` 的日志。

## io.log.assert

`assert(...args: any): void`

-   `args` 任何类型的参数，最终会将其转换为字符串输出。

输出级别为 `ASSERT` 的日志。

## io.log.v

`v(...args: any): void`

-   `args` 任何类型的参数，最终会将其转换为字符串输出。

同 `io.log.verbose`

## io.log.i

`i(...args: any): void`

-   `args` 任何类型的参数，最终会将其转换为字符串输出。

同 `io.log.info`

## io.log.d

`d(...args: any): void`

-   `args` 任何类型的参数，最终会将其转换为字符串输出。

同 `io.log.debug`

## io.log.w

`w(...args: any): void`

-   `args` 任何类型的参数，最终会将其转换为字符串输出。

同 `io.log.warn`

## io.log.e

`e(...args: any): void`

-   `args` 任何类型的参数，最终会将其转换为字符串输出。

同 `io.log.error`

## io.log.a

`a(...args: any): void`

-   `args` 任何类型的参数，最终会将其转换为字符串输出。

同 `io.log.a`

```js
const { log } = Android.io;

log.verbose('Hello from log.verbose!');
log.info('Hello from log.info!');
log.debug('Hello from log.debug!');
log.warn('Hello from log.warn!');
log.error('Hello from log.error!');
log.assert('Hello from log.assert!');
```
