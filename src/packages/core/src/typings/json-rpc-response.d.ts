declare interface JsonRpcResponse<T> extends Pick<JsonRpcRequest, 'id' | 'jsonrpc'> {
  result: T;
}
