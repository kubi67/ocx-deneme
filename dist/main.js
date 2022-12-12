"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const all_exception_filters_1 = require("./libs/exception-filters/all-exception-filters");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new all_exception_filters_1.AllExceptionFilter(httpAdapter));
    app.setGlobalPrefix('/api/v1');
    app.useStaticAssets((0, path_1.resolve)('./src/public'));
    app.setBaseViewsDir((0, path_1.resolve)('./src/views'));
    app.setViewEngine('hbs');
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('OCX CRM BACKEND DB Service')
        .setDescription('BACKEND ENDPOINTS ')
        .setLicense('COPYRIGHT Overcodex', 'OVERCODEX')
        .setVersion('1.1')
        .addTag('Api v1 Endpointss')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/documents', app, document);
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map