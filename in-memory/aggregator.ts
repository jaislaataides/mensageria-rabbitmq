import { CHANNELS } from './channels';
import { createMessage, type Message } from './message';
import type { ItemPedido } from './pedido.interface';
import type { CabecalhoItemPedido } from './splitter';
import type { StatusPedido } from './status-pedido';

const mapaItensDoPedido = new Map<string, { total: number; atual: number }>();

const SISTEMA = '[Aggregator]';
export function aggregator(msg: Message) {
  const itemPedido: ItemPedido = JSON.parse(msg.payload);
  const { totalItens, idPedido } = JSON.parse(
    msg.header,
  ) as CabecalhoItemPedido;

  console.debug(
    `${SISTEMA} (Pedido=${idPedido}) - item de pedido verificado: ${itemPedido.nome}`,
  );

  const pedido = mapaItensDoPedido.get(idPedido);

  if (pedido) {
    pedido.atual++;
    if (pedido.atual >= pedido.total) confirmaStatusPedido(idPedido);
  } else {
    mapaItensDoPedido.set(idPedido, {
      atual: 1,
      total: totalItens,
    });
  }
}

function confirmaStatusPedido(idPedido: string) {
  const statusPedido: StatusPedido = {
    idPedido,
    podeSerAtendido: true,
  };

  const mensagem = createMessage({ payload: statusPedido });
  CHANNELS.StatusPedido.send(mensagem);
}

CHANNELS.StatusItemPedido.subscribe(aggregator);
