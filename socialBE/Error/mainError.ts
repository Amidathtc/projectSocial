export enum HTTP {
    OK = 200,
    CREATED = 201,
    BAD = 400
}

interface iError {
    name : string,
    message : string;
    status : HTTP;
    success : boolean
}

export class mainError extends Error {
    public readonly name: string; 
    public readonly message: string; 
    public readonly status: HTTP; 
    public readonly success : boolean = false; 

    constructor (args : iError) {
        super (args.message)

        Object.setPrototypeOf(this , new.target.prototype)

        this.name = args.name;
        this.message = args.message;
        this.status = args.status;
        this.success = args.success;

        if (this.success !== undefined) {
            this.success = args.success
        }

        Error.captureStackTrace(this)
    }
}