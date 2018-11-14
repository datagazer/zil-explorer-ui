declare interface JsonRpcRequest {
  id: string | number;
  jsonrpc: '2.0';
  method: string;
  params?: any[];
}
