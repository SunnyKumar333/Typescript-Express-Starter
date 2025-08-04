import { AsyncLocalStorage } from "async_hooks";
type AsyncLocalStorageType={
    corelationId:string
}
export const asyncLocalStorage=new AsyncLocalStorage<AsyncLocalStorageType>();

export function getCorelationId(){
    const store=asyncLocalStorage.getStore();
    return store?.corelationId || "no-corelationid_found"

}