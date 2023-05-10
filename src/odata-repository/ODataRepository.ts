import { Injectable } from "@nestjs/common";
import { resilience } from "@sap-cloud-sdk/resilience";
import { IGenericODataRepository } from "./IGenericODataRepository";

@Injectable()
export class ODataRepository<TResult> implements IGenericODataRepository<TResult> {
    public async query(
        queryInput: any,
        queryApi: any,
        apiEndPoint: string,
        apiKey: string
    ): Promise<TResult[] | any[]> {
        const queryJson: iODataQueryParams = queryInput;
        try {
            const response = await queryApi
                .requestBuilder()
                .getAll()
                .middleware(
                    resilience({
                        timeout: parseInt(process.env.SAP_S4_HANA_ODATA_TIMEOUT_MS),
                        circuitBreaker: true,
                        retry: true,
                    })
                )
                .addCustomQueryParameters(queryJson)
                .addCustomHeaders({
                    APIKey: apiKey,
                })
                .execute({
                    destinationName: apiEndPoint,
                });
            return response;
        } catch (error) {
            throw error;
        }
    }

    public async find(
        findId: number | string | any,
        queryApi: any,
        apiEndPoint: string,
        apiKey: string
    ): Promise<TResult | any> {
        try {
            const response = await queryApi
                .requestBuilder()
                .getByKey(findId)
                .middleware(
                    resilience({
                        timeout: parseInt(process.env.SAP_S4_HANA_ODATA_TIMEOUT_MS),
                        circuitBreaker: true,
                        retry: true,
                    })
                )
                .addCustomHeaders({
                    APIKey: apiKey,
                })
                .execute({
                    url: apiEndPoint,
                });
            return response;
        } catch (error) {
            throw error;
        }
    }

    public async create(input: any, queryApi: any, apiEndPoint: string, apiKey: string): Promise<TResult | any> {
        try {
            const response = await queryApi
                .requestBuilder()
                .create(input)
                .middleware(
                    resilience({
                        timeout: parseInt(process.env.SAP_S4_HANA_ODATA_TIMEOUT_MS),
                        circuitBreaker: true,
                        retry: true,
                    })
                )
                .addCustomHeaders({
                    APIKey: apiKey,
                })
                .execute({
                    url: apiEndPoint,
                });
            return response;
        } catch (error) {
            console.log("Cannot complete create operation because ", error);
            throw error;
        }
    }

    public async update(input: any, queryApi: any, apiEndPoint: string, apiKey: string): Promise<TResult | any> {
        try {
            const response = await queryApi
                .requestBuilder()
                .update(input)
                .middleware(
                    resilience({
                        timeout: parseInt(process.env.SAP_S4_HANA_ODATA_TIMEOUT_MS),
                        circuitBreaker: true,
                        retry: true,
                    })
                )
                .addCustomHeaders({
                    APIKey: apiKey,
                })
                .execute({
                    url: apiEndPoint,
                });
            return response;
        } catch (error) {
            throw error;
        }
    }

    public async delete(input: number | string | any, queryApi: any, apiEndPoint: string, apiKey: string) {
        try {
            const response = await queryApi
                .requestBuilder()
                .delete(input)
                .middleware(
                    resilience({
                        timeout: parseInt(process.env.SAP_S4_HANA_ODATA_TIMEOUT_MS),
                        circuitBreaker: true,
                        retry: true,
                    })
                )
                .addCustomHeaders({
                    APIKey: apiKey,
                })
                .execute({
                    url: apiEndPoint,
                });
            return response;
        } catch (error) {
            throw error;
        }
    }
}
