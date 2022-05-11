interface User {
    i: number;
    UserName: string;
    cookie: string;
    UserAgent: string;
}
declare class JDHelloWorld {
    getCookie(check?: boolean): Promise<string[]>;
    checkCookie(cookie: string): Promise<boolean>;
    exceptCookie(filename?: string): any;
    get(url: string, headers?: any): Promise<unknown>;
    post(url: string, data: any, headers?: any): Promise<object>;
    wait(ms?: number): Promise<unknown>;
    o2s(obj: object): void;
    run(son: {
        main: Function;
    }): Promise<void>;
}
export { User, JDHelloWorld };