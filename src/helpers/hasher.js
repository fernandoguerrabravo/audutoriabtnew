import { Buffer } from 'buffer';
import { sha512 as SHA512 } from 'js-sha512';

export class Hasher {
  static hash = {
    asSHA512: (
      objectToHash,
    ) => SHA512.create().update(objectToHash).hex(),
  };
  static encode = {
    base64: (
      data,
    ) => Buffer.from(data).toString('base64'),
  };

  static decode = {
    Base64: (
      data,
      encoding = 'base64',
    ) => Buffer.from(data, encoding).toString('ascii'),
  };
}
