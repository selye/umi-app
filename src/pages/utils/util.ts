export function debounce(fn: any, wait: number) {
    let timer: NodeJS.Timeout | null, startTimeStamp = 0
    let context: any, args: any;

    let run = (timerInterval: number) => {
        timer = setTimeout(() => {
            let now = Date.now(); // 当前日期
            let interval = now - startTimeStamp;   // 执行周期
            console.log(startTimeStamp + ":第二次")
            console.log(interval + ":interval")
            
            if (interval < timerInterval) {
                console.log(startTimeStamp + ":第四次")
                startTimeStamp = now;
                run(wait - interval)
            } else {
                console.log(startTimeStamp + ":第三次")
                fn.apply(context, args)
                if (timer) {
                    clearInterval(timer);
                }
                timer = null
            }
        }, timerInterval);
    }

    return function () {
        // @ts-ignore
        context = this;
        args = arguments;
        let now = Date.now();
        startTimeStamp = now;
        console.log(startTimeStamp + ":第一次")
        if (!timer) {
            run(wait)
        }
    }

}