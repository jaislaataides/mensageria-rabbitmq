import { CHANNELS } from './channels';
import type { Message } from './message';
import type { ItemPedido } from './pedido.interface';

const SISTEMA = '[INVENTARIO (S)]';

export async function checarEstoque(msg: Message) {
  const itemPedido: ItemPedido = JSON.parse(msg.payload);

  console.debug(
    `${SISTEMA} - Checando inventario para o item: `,
    itemPedido.nome,
  );

  //verificacao

  console.debug(
    `${SISTEMA} - item ${itemPedido.nome} existe em estoque :white_check_mark:`,
  );
  CHANNELS.StatusItemPedido.send(msg);
}

CHANNELS.ChecarEstoqueSmartphone.subscribe(checarEstoque);
