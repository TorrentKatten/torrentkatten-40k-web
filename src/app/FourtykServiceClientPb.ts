/**
 * @fileoverview gRPC-Web generated client stub for se.torrentkatten.fourtyk.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as fourtyk_pb from './fourtyk_pb';


export class FourtyKServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateGame = new grpcWeb.MethodDescriptor(
    '/se.torrentkatten.fourtyk.api.FourtyKService/CreateGame',
    grpcWeb.MethodType.UNARY,
    fourtyk_pb.GameDTO,
    fourtyk_pb.GameHandle,
    (request: fourtyk_pb.GameDTO) => {
      return request.serializeBinary();
    },
    fourtyk_pb.GameHandle.deserializeBinary
  );

  createGame(
    request: fourtyk_pb.GameDTO,
    metadata: grpcWeb.Metadata | null): Promise<fourtyk_pb.GameHandle>;

  createGame(
    request: fourtyk_pb.GameDTO,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: fourtyk_pb.GameHandle) => void): grpcWeb.ClientReadableStream<fourtyk_pb.GameHandle>;

  createGame(
    request: fourtyk_pb.GameDTO,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: fourtyk_pb.GameHandle) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/se.torrentkatten.fourtyk.api.FourtyKService/CreateGame',
        request,
        metadata || {},
        this.methodInfoCreateGame,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/se.torrentkatten.fourtyk.api.FourtyKService/CreateGame',
    request,
    metadata || {},
    this.methodInfoCreateGame);
  }

  methodInfoFindGame = new grpcWeb.MethodDescriptor(
    '/se.torrentkatten.fourtyk.api.FourtyKService/FindGame',
    grpcWeb.MethodType.UNARY,
    fourtyk_pb.GameHandle,
    fourtyk_pb.GameDTO,
    (request: fourtyk_pb.GameHandle) => {
      return request.serializeBinary();
    },
    fourtyk_pb.GameDTO.deserializeBinary
  );

  findGame(
    request: fourtyk_pb.GameHandle,
    metadata: grpcWeb.Metadata | null): Promise<fourtyk_pb.GameDTO>;

  findGame(
    request: fourtyk_pb.GameHandle,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: fourtyk_pb.GameDTO) => void): grpcWeb.ClientReadableStream<fourtyk_pb.GameDTO>;

  findGame(
    request: fourtyk_pb.GameHandle,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: fourtyk_pb.GameDTO) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/se.torrentkatten.fourtyk.api.FourtyKService/FindGame',
        request,
        metadata || {},
        this.methodInfoFindGame,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/se.torrentkatten.fourtyk.api.FourtyKService/FindGame',
    request,
    metadata || {},
    this.methodInfoFindGame);
  }

  methodInfoAddResult = new grpcWeb.MethodDescriptor(
    '/se.torrentkatten.fourtyk.api.FourtyKService/AddResult',
    grpcWeb.MethodType.UNARY,
    fourtyk_pb.GameResultDTO,
    fourtyk_pb.GameDTO,
    (request: fourtyk_pb.GameResultDTO) => {
      return request.serializeBinary();
    },
    fourtyk_pb.GameDTO.deserializeBinary
  );

  addResult(
    request: fourtyk_pb.GameResultDTO,
    metadata: grpcWeb.Metadata | null): Promise<fourtyk_pb.GameDTO>;

  addResult(
    request: fourtyk_pb.GameResultDTO,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: fourtyk_pb.GameDTO) => void): grpcWeb.ClientReadableStream<fourtyk_pb.GameDTO>;

  addResult(
    request: fourtyk_pb.GameResultDTO,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: fourtyk_pb.GameDTO) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/se.torrentkatten.fourtyk.api.FourtyKService/AddResult',
        request,
        metadata || {},
        this.methodInfoAddResult,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/se.torrentkatten.fourtyk.api.FourtyKService/AddResult',
    request,
    metadata || {},
    this.methodInfoAddResult);
  }

}

