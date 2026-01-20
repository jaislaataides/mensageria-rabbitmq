import { CHANNELS } from './channels.ts';
import { createMessage, type Message } from './message.ts';
import type { ItemPedido } from './pedido.interface.ts';

export function router(msg: Message) {
  const itemPedido: ItemPedido = JSON.parse(msg.payload);

  const tipoProduto = itemPedido.id.startsWith('C')
    ? 'computador'
    : 'smartphone';

  const jobChecarEstoque = createMessage({
    payload: itemPedido,
    header: msg.header,
  });

  if (tipoProduto === 'computador')
    CHANNELS.ChecarEstoqueComputador.send(jobChecarEstoque);
  else CHANNELS.ChecarEstoqueSmartphone.send(jobChecarEstoque);
}

CHANNELS.NovoItemPedido.subscribe(router);
