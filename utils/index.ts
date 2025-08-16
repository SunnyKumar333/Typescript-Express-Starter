export interface AppError extends Error{
    statusCode:number 
}

export class InternalServerErrror implements AppError{
    statusCode: number;
    message: string;
    name: string;
    constructor(message:string){
        this.message=message;
        this.statusCode=500;
        this.name="InternalServerError "
    }
}

export class NotFoundError implements AppError{
    name:string;
    message: string;
    statusCode: number;
    constructor(message:string){
        this.name="NotFoundError";
        this.statusCode=404;
        this.message=message;
    }
}
export class BadRequestError implements AppError{
    name:string;
    message: string;
    statusCode: number;
    constructor(message:string){
        this.name="BadRequestError";
        this.statusCode=402;
        this.message=message;
    }
}
