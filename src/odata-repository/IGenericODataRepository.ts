export abstract class IGenericODataRepository<TResult> {
    abstract query(queryInput: any, queryApi: any, apiEndPoint: string, apiKey: string): Promise<TResult[] | any[]>;

    abstract find(
        findId: number | string | any,
        queryApi: any,
        apiEndPoint: string,
        apiKey: string
    ): Promise<TResult | any>;

    abstract create(input: any, queryApi: any, apiEndPoint: string, apiKey: string): Promise<TResult | any>;

    abstract update(input: any, queryApi: any, apiEndPoint: string, apiKey: string): Promise<TResult | any>;

    abstract delete(input: number | string | any, queryApi: any, apiEndPoint: string, apiKey: string);
}
