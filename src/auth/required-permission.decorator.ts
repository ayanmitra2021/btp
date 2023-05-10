import { SetMetadata } from "@nestjs/common/decorators";

export const RequiredPermissions = (...permissions: string[]) => SetMetadata('permissions', permissions);