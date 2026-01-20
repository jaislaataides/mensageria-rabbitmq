import { CHANNELS } from './channels.ts';
import { createMessage } from './message.ts';
import type { ItemPedido, Pedido } from './pedido.interface.ts';
import './splitter.ts';
import './router.ts';
import './check-inventory-smartphone.ts';
import './check-inventory-computer.ts';
import './aggregator.ts';

const itemPedido: ItemPedido = {
  id: 'C_001',
  nome: 'Monitor',
  precoUnitario: 1000,
  quantidade: 1,
};

const itemPedido2: ItemPedido = {
  id: 'C_002',
  nome: 'Mouse gamer rgb pro max',
  precoUnitario: 450,
  quantidade: 1,
};

const itemPedido3: ItemPedido = {
  id: 'S_001',
  nome: 'PeraPhone',
  precoUnitario: 8000,
  quantidade: 2,
};

const pedido: Pedido = {
  id: 'P_001',
  idCliente: 'C_001',
  itens: [itemPedido, itemPedido2, itemPedido3],
};

const mensagem = createMessage({ payload: pedido });

// CHANNELS.NovoPedido.subscribe((message) => {
//   console.log('Recebendo a mensagem %o', JSON.parse(message.payload));
// });

CHANNELS.NovoPedido.send(mensagem);
