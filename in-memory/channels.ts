import { createChannel } from './channel.interface';

export const CHANNELS = Object.freeze({
  NovoPedido: createChannel('novo_pedido'),
  NovoItemPedido: createChannel('novo_item_pedido'),
  ChecarEstoqueComputador: createChannel('checar_estoque_computador'),
  ChecarEstoqueSmartphone: createChannel('checar_estoque_smartphone'),
  StatusPedido: createChannel('status_pedido'),
  StatusItemPedido: createChannel('status_item_pedido'),
});
