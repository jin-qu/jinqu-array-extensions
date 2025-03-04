import { Ctor, Func1, Func2, IQuery, IQuerySafe, QueryFunc } from "@jin-qu/jinqu";

declare global {
    interface Array<T> extends IQuerySafe<T> {
        q(ctor?: Ctor<T>): IQuery<T>;
        joinWith<TOther, TResult = unknown, TKey = unknown>(
            other: TOther[], thisKey: Func1<T, TKey>, otherKey: Func1<TOther, TKey>,
            selector: Func2<T, TOther, TResult>, ...scopes: any[]): IQuery<TResult>;
        concatWith(other: T[]): IQuery<T>;
        reverseTo(): IQuery<T>;
    }
}

Array.prototype.q = function(ctor?: Ctor<unknown>) {
    return this.asQueryable(ctor);
};

function extendArray(func: string) {
    let f = func;
    if (func === "join" || func === "concat") {
        f += "With";
    } else if (func === "reverse") {
        f += "To";
    }

    Array.prototype[f] = Array.prototype[f] || function(...args: any[]) {
        const q = this.asQueryable();
        return q[func](...args);
    };
}

Object.getOwnPropertyNames(QueryFunc).forEach(extendArray);

declare global {
    interface ArrayConstructor {
        range(start: number, count?: number): IterableIterator<number>;
        repeat<T = unknown>(item: T, count: number): IterableIterator<T>;
    }
}

Array.range = Array.range || function*(start?: number, count?: number) {
    if (count == null) {
        count = start;
        start = 0;
    }
    if (count < 0)
        throw new Error("Specified argument was out of the range of valid values");

    for (let i = 0; i < count; i++)
        yield start + i;
};

Array.repeat = Array.repeat || function*(item, count) {
    if (count < 0)
        throw new Error("Specified argument was out of the range of valid values");

    for (let i = 0; i < count; i++)
        yield item;
};
