import * as jspb from 'google-protobuf'



export class PlayerDTO extends jspb.Message {
  getFaction(): string;
  setFaction(value: string): PlayerDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerDTO.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerDTO): PlayerDTO.AsObject;
  static serializeBinaryToWriter(message: PlayerDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerDTO;
  static deserializeBinaryFromReader(message: PlayerDTO, reader: jspb.BinaryReader): PlayerDTO;
}

export namespace PlayerDTO {
  export type AsObject = {
    faction: string,
  }
}

export class GameDTO extends jspb.Message {
  getName(): string;
  setName(value: string): GameDTO;

  getAttacker(): PlayerDTO | undefined;
  setAttacker(value?: PlayerDTO): GameDTO;
  hasAttacker(): boolean;
  clearAttacker(): GameDTO;

  getDefender(): PlayerDTO | undefined;
  setDefender(value?: PlayerDTO): GameDTO;
  hasDefender(): boolean;
  clearDefender(): GameDTO;

  getResult(): GameResultDTO | undefined;
  setResult(value?: GameResultDTO): GameDTO;
  hasResult(): boolean;
  clearResult(): GameDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameDTO.AsObject;
  static toObject(includeInstance: boolean, msg: GameDTO): GameDTO.AsObject;
  static serializeBinaryToWriter(message: GameDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameDTO;
  static deserializeBinaryFromReader(message: GameDTO, reader: jspb.BinaryReader): GameDTO;
}

export namespace GameDTO {
  export type AsObject = {
    name: string,
    attacker?: PlayerDTO.AsObject,
    defender?: PlayerDTO.AsObject,
    result?: GameResultDTO.AsObject,
  }
}

export class GameHandle extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): GameHandle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameHandle.AsObject;
  static toObject(includeInstance: boolean, msg: GameHandle): GameHandle.AsObject;
  static serializeBinaryToWriter(message: GameHandle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameHandle;
  static deserializeBinaryFromReader(message: GameHandle, reader: jspb.BinaryReader): GameHandle;
}

export namespace GameHandle {
  export type AsObject = {
    uuid: string,
  }
}

export class GameResultDTO extends jspb.Message {
  getAttackerScore(): number;
  setAttackerScore(value: number): GameResultDTO;

  getDefenderScore(): number;
  setDefenderScore(value: number): GameResultDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameResultDTO.AsObject;
  static toObject(includeInstance: boolean, msg: GameResultDTO): GameResultDTO.AsObject;
  static serializeBinaryToWriter(message: GameResultDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameResultDTO;
  static deserializeBinaryFromReader(message: GameResultDTO, reader: jspb.BinaryReader): GameResultDTO;
}

export namespace GameResultDTO {
  export type AsObject = {
    attackerScore: number,
    defenderScore: number,
  }
}

