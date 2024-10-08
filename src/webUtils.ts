export { stringToBuffer, concatBuffers } from "arweave/web/lib/utils";
export { deepHash } from "./deepHash";
import webDriver from "arweave/web/lib/crypto/webcrypto-driver";
import type { JWKInterface } from "./interface-jwk";

export type { CreateTransactionInterface } from "arweave/web/common";
export { default as Transaction } from "arweave/web/lib/transaction";
export { default as Arweave } from "arweave/web";

const driver: typeof webDriver = webDriver["default"] ? webDriver["default"] : webDriver;
export class CryptoDriver extends driver {
  public getPublicKey(_jwk: JWKInterface): string {
    throw new Error("Unimplemented");
  }
}

let driverInstance: CryptoDriver;
export function getCryptoDriver(): CryptoDriver {
  return (driverInstance ??= new CryptoDriver());
}
