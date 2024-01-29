# Javascript로 Wasabi 사용하기

프로젝트에서 사용하는 Wasabi 저장소에 대해 장단점 및 사용기를 정리하기

## Wasabi

기타 클라우드에서 사용하는 file Storage (`S3`, `azure storage`)보다 저렴하게 파일을 저장할 수 있는 원격 저장소이다.

해당 내용은 작은 양의 파일을 저장할 때 효과적이며, 많은 양의 파일을 다루거나 큰 용량의 파일을 다루는 경우 반드시 맞지 않는 경우도 있다고 한다.


## nestjs에 wasabi 적용하기

와사비는 AWS-SDK를 통해 접근할 수 있으며, endpoint를 wasabi service로 변경하여 사용할 수 있다.

AWS-SDK는 v3를 기준으로 작성하였으며, 해당 SDK는 각 서비스 마다 설치 방법이 비슷한 방식을 띄고있어 S3 SDK설치 방법을 기준으로 해당 글을 작성하였다.

```bash
$ npm i @aws-sdk/{설치할 서비스} # ex) npm i @aws-sdk/client-s3
```

해당 명령어를 프로젝트에 입력하며 AWS SDK를 설치할 수 있다.
이제 WASABI 관련 설정을 넣어 적용해보도록 하자

```typescript
import { Module } from '@nestjs/common';
import { WasabiService } from './wasabi.service';
import { S3ClientConfig } from '@aws-sdk/client-s3';

export const WASABI_AWS_CONFIG = 'WASABI_AWS_CONFIG';
export type ConfigProps = S3ClientConfig & { bucket: string };

@Module({})
export class WasabiModule {
  public static init(config: ConfigProps) {
    return {
      module: WasabiModule,
      providers: [
        {
          provide: WASABI_AWS_CONFIG,
          useValue: config,
        },
        WasabiService,
      ],
      exports: [WasabiService],
    };
  }
}
```
nestjs module에 대한 설명은 해당 글에서 다루지 않으며, 모듈 작성에 대한 간략한 설명을 하자면

해당 모듈은 `dynamicModule` 타입으로 타 모듈에서 static method를 호출해 특정 configration을 추가할 수 있도록 구성했다.

해당 와사비의 서비스 모듈은,
```typescript
import { Inject, Injectable, Logger } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { ConfigProps, WASABI_AWS_CONFIG } from './wasabi.module';

@Injectable()
export class WasabiService {
  logger = new Logger('wasabi');
  private readonly client: S3Client;
  private bucket: string;

  constructor(
    @Inject(WASABI_AWS_CONFIG)
    private readonly configuration: ConfigProps,
  ) {
    const { bucket, ...config } = this.configuration;
    this.client = new S3Client(config);
    this.bucket = bucket;
  }

  uploadFile(fileName: string, file: string) {
    const object_upload_params = new PutObjectCommand({
      Bucket: this.bucket,
      Key: fileName,
      Body: file,
    });
    return this.client.send(object_upload_params);
  }

  setBucket(bucketName: string) {
    this.bucket = bucketName;
  }
}
```
서비스에서 해당 모듈은 file을 업로드하기 위한 기능으로만 사용되고, 최초 module연결시 origin, endpoint, cridential등 설정 값을 입력하여 사용 환경을 구성한다.

이후 `uploadFile` method를 통해서 파일 업로드 기능을 사용하고 서비스 내에서 bucket을 변경하는 경우만 예측하여 메서드를 추가 구성했다.

이후 file-upload module을 살펴보면
```typescript
import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { WasabiModule } from 'src/wasabi/wasabi.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    WasabiModule.init({
      region: 'bucket-region',
      endpoint: 'https://s3.ap-northeast-2.wasabisys.com',
      bucket: 'bucket-name',
      credentials: {
        accessKeyId: process.env.WASABI_BUCKET_ACCESSKEY_ID,
        secretAccessKey: process.env.WASABI_BUCKET_SECRETKEY,
      },
    }),
  ],
  providers: [FileService],
  controllers: [FileController],
  exports: [WasabiModule],
})
export class FileModule {}
```
파일 업로드 모듈은 `.env`를 통해 ACCESSKEY_ID, SECRETKEY등을 주입 받게 되며,
region, endpoint 설정도 이 단계에서 주입할 수 있다.

> wasabi document에는 endpoint값이 http protocol을 제거하여 올라와 있는데 해당 프로토콜을 입력하지 않으면 url 에러가 발생하여 서비스 이용이 불가능하다.

AWS-SDK에 대한 사용 경험이 충분하다면 설정하는데 큰 어려움은 없으나, 와사비측 문서가 굉장히 부실하여 SDK 사용법을 잘 모르는 경우에는 꽤 어려운 작업이 될 수 있다.