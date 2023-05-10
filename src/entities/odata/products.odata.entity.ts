import { ApiProperty } from "@nestjs/swagger";
//"ProductID":1,"ProductName":"Chai","SupplierID":1,"CategoryID":1,
//"QuantityPerUnit":"10 boxes x 20 bags","UnitPrice":18.0000,"UnitsInStock":39,
//"UnitsOnOrder":0,"ReorderLevel":10,"Discontinued":false

export class Products {
    @ApiProperty()
    ProductID: number;

    @ApiProperty()
    ProductName: string;

    @ApiProperty()
    SupplierID: number;

    @ApiProperty()
    CategoryID: number;

    @ApiProperty()
    QuantityPerUnit: string;

    @ApiProperty()
    UnitPrice: number;

    @ApiProperty()
    UnitsInStock: number;

    @ApiProperty()
    UnitsOnOrder: number;

    @ApiProperty()
    ReorderLevel: number;

    @ApiProperty()
    Discontinued: boolean;
}