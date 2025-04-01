# fileLog

filelog is a decorator, this could help producing fileLog of some large output of function e.g. odi call. This is particular useful for debug log

## usage

```ts
@fileLog()
function longFnc(){
    return ...
}
```

this should produce a file in `cwd/logs/longFnc-YYYYMMDDHHmmss.ext`

## configuration

```ts
interface IFileLogConfig {
	name?: string = functionName;
	datetimeString?: string = "YYYYMMDDHHmmss";
	ext?: "txt" | "json" | "log" = "log";
}
```
