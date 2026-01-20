import { createChannel } from './channel.interface';
import { CHANNELS } from './channels';
import { createMessage, type Message } from './message';
import type { Pedido } from './pedido.interface';

export interface CabecalhoItemPedido {
  idPedido: string;
  totalItens: number;
}

export function splitter(msg: Message) {
  const pedido: Pedido = JSON.parse(msg.payload);

  console.debug('[Splitter] Pedido recebido %o', pedido);

  for (const itemPedido of pedido.itens) {
    const novoItemPedidoMsg = createMessage({
      payload: itemPedido,
      header: {
        idPedido: pedido.id,
        totalItens: pedido.itens.length,
      },
    });

    CHANNELS.NovoItemPedido.send(novoItemPedidoMsg);
  }
}

CHANNELS.NovoPedido.subscribe(splitter);
