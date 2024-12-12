/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common.js";

export declare namespace IXmasTree {
  export type TreeStruct = {
    owner: AddressLike;
    ornamentCount: BigNumberish;
    bgId: BigNumberish;
    ornamentIds: BigNumberish[];
    adorners: AddressLike[];
    minted: boolean;
  };

  export type TreeStructOutput = [
    owner: string,
    ornamentCount: bigint,
    bgId: bigint,
    ornamentIds: bigint[],
    adorners: string[],
    minted: boolean
  ] & {
    owner: string;
    ornamentCount: bigint;
    bgId: bigint;
    ornamentIds: bigint[];
    adorners: string[];
    minted: boolean;
  };
}

export interface XmasTreeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "adorn"
      | "allBgPrices"
      | "allOrnamentPrices"
      | "backgroundBaseURI"
      | "backgroundURI"
      | "batchSetBackgroundPrices"
      | "batchSetOrnamentPrices"
      | "bgCount"
      | "bgPrices"
      | "createTree"
      | "getTree"
      | "nextTreeId"
      | "ornamentBaseURI"
      | "ornamentCount"
      | "ornamentPrices"
      | "ornamentURI"
      | "ownedTreeAt"
      | "ownedTreeCount"
      | "ownedTrees"
      | "owner"
      | "renounceOwnership"
      | "setBaseURIs"
      | "transferOwnership"
      | "withdraw"
      | "xmas"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Adorn" | "OwnershipTransferred" | "TreeCreated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "adorn",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allBgPrices",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allOrnamentPrices",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "backgroundBaseURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "backgroundURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "batchSetBackgroundPrices",
    values: [BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "batchSetOrnamentPrices",
    values: [BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "bgCount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bgPrices",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createTree",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTree",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nextTreeId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ornamentBaseURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ornamentCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ornamentPrices",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ornamentURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ownedTreeAt",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ownedTreeCount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "ownedTrees",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBaseURIs",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "xmas", values?: undefined): string;

  decodeFunctionResult(functionFragment: "adorn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allBgPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allOrnamentPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "backgroundBaseURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "backgroundURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchSetBackgroundPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchSetOrnamentPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bgCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bgPrices", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createTree", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTree", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nextTreeId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ornamentBaseURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ornamentCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ornamentPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ornamentURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownedTreeAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownedTreeCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ownedTrees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBaseURIs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "xmas", data: BytesLike): Result;
}

export namespace AdornEvent {
  export type InputTuple = [
    user: AddressLike,
    treeId: BigNumberish,
    ornamentId: BigNumberish,
    position: BigNumberish,
    ornamentCount: BigNumberish
  ];
  export type OutputTuple = [
    user: string,
    treeId: bigint,
    ornamentId: bigint,
    position: bigint,
    ornamentCount: bigint
  ];
  export interface OutputObject {
    user: string;
    treeId: bigint;
    ornamentId: bigint;
    position: bigint;
    ornamentCount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TreeCreatedEvent {
  export type InputTuple = [
    owner: AddressLike,
    treeId: BigNumberish,
    bgId: BigNumberish
  ];
  export type OutputTuple = [owner: string, treeId: bigint, bgId: bigint];
  export interface OutputObject {
    owner: string;
    treeId: bigint;
    bgId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface XmasTree extends BaseContract {
  connect(runner?: ContractRunner | null): XmasTree;
  waitForDeployment(): Promise<this>;

  interface: XmasTreeInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  adorn: TypedContractMethod<
    [treeId: BigNumberish, ornamentId: BigNumberish],
    [void],
    "nonpayable"
  >;

  allBgPrices: TypedContractMethod<[], [bigint[]], "view">;

  allOrnamentPrices: TypedContractMethod<[], [bigint[]], "view">;

  backgroundBaseURI: TypedContractMethod<[], [string], "view">;

  backgroundURI: TypedContractMethod<[bgId: BigNumberish], [string], "view">;

  batchSetBackgroundPrices: TypedContractMethod<
    [bgIds: BigNumberish[], prices: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  batchSetOrnamentPrices: TypedContractMethod<
    [ornamentIds: BigNumberish[], prices: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  bgCount: TypedContractMethod<[], [bigint], "view">;

  bgPrices: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  createTree: TypedContractMethod<[bgId: BigNumberish], [void], "nonpayable">;

  getTree: TypedContractMethod<
    [treeId: BigNumberish],
    [IXmasTree.TreeStructOutput],
    "view"
  >;

  nextTreeId: TypedContractMethod<[], [bigint], "view">;

  ornamentBaseURI: TypedContractMethod<[], [string], "view">;

  ornamentCount: TypedContractMethod<[], [bigint], "view">;

  ornamentPrices: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  ornamentURI: TypedContractMethod<
    [ornamentId: BigNumberish],
    [string],
    "view"
  >;

  ownedTreeAt: TypedContractMethod<
    [account: AddressLike, index: BigNumberish],
    [bigint],
    "view"
  >;

  ownedTreeCount: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  ownedTrees: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setBaseURIs: TypedContractMethod<
    [backgroundBaseURI_: string, ornamentBaseURI_: string],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  withdraw: TypedContractMethod<[to: AddressLike], [void], "nonpayable">;

  xmas: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "adorn"
  ): TypedContractMethod<
    [treeId: BigNumberish, ornamentId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "allBgPrices"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "allOrnamentPrices"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "backgroundBaseURI"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "backgroundURI"
  ): TypedContractMethod<[bgId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "batchSetBackgroundPrices"
  ): TypedContractMethod<
    [bgIds: BigNumberish[], prices: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "batchSetOrnamentPrices"
  ): TypedContractMethod<
    [ornamentIds: BigNumberish[], prices: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "bgCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "bgPrices"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "createTree"
  ): TypedContractMethod<[bgId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getTree"
  ): TypedContractMethod<
    [treeId: BigNumberish],
    [IXmasTree.TreeStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "nextTreeId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ornamentBaseURI"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ornamentCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ornamentPrices"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "ornamentURI"
  ): TypedContractMethod<[ornamentId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "ownedTreeAt"
  ): TypedContractMethod<
    [account: AddressLike, index: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "ownedTreeCount"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "ownedTrees"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setBaseURIs"
  ): TypedContractMethod<
    [backgroundBaseURI_: string, ornamentBaseURI_: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "xmas"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Adorn"
  ): TypedContractEvent<
    AdornEvent.InputTuple,
    AdornEvent.OutputTuple,
    AdornEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "TreeCreated"
  ): TypedContractEvent<
    TreeCreatedEvent.InputTuple,
    TreeCreatedEvent.OutputTuple,
    TreeCreatedEvent.OutputObject
  >;

  filters: {
    "Adorn(address,uint256,uint256,uint256,uint8)": TypedContractEvent<
      AdornEvent.InputTuple,
      AdornEvent.OutputTuple,
      AdornEvent.OutputObject
    >;
    Adorn: TypedContractEvent<
      AdornEvent.InputTuple,
      AdornEvent.OutputTuple,
      AdornEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "TreeCreated(address,uint256,uint32)": TypedContractEvent<
      TreeCreatedEvent.InputTuple,
      TreeCreatedEvent.OutputTuple,
      TreeCreatedEvent.OutputObject
    >;
    TreeCreated: TypedContractEvent<
      TreeCreatedEvent.InputTuple,
      TreeCreatedEvent.OutputTuple,
      TreeCreatedEvent.OutputObject
    >;
  };
}
