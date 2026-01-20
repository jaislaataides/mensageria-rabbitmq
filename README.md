# Mensageria - Simulação Abstrata

Este repositório é uma simulação abstrata de mensageria utilizando `EventEmitter` do Node.js. O objetivo é demonstrar padrões de integração empresarial (Enterprise Integration Patterns) de forma didática, sem depender de um message broker real como RabbitMQ. Um projeto inicial do curso de `Node.js: mensageria e arquitetura orientada a eventos`

## O que é este projeto?

Uma implementação in-memory de conceitos de mensageria, demonstrando três padrões fundamentais:

- **Splitter (Separação)**: Divide uma mensagem complexa em mensagens menores
- **Router (Roteamento)**: Direciona mensagens para canais específicos baseado em regras de negócio
- **Aggregator (Agregação)**: Recombina mensagens relacionadas em uma resposta consolidada

## Fluxo da Aplicação

```
Pedido (com múltiplos itens)
    ↓
[Splitter] - Separa o pedido em itens individuais
    ↓
[Router] - Roteia cada item para o canal apropriado
    ├─→ Computadores → Canal de Estoque de Computadores
    └─→ Smartphones → Canal de Estoque de Smartphones
         ↓
[Verificadores de Estoque] - Processam cada item
    ↓
[Aggregator] - Aguarda todos os itens e confirma o pedido completo
    ↓
Status do Pedido (confirmado)
```

## Estrutura do Projeto

- `in-memory/` - Implementação da simulação de mensageria
  - `channel.interface.ts` - Interface de canal usando EventEmitter
  - `channels.ts` - Definição dos canais disponíveis
  - `message.ts` - Estrutura de mensagem
  - `splitter.ts` - Padrão Splitter
  - `router.ts` - Padrão Router (baseado em tipo de produto)
  - `aggregator.ts` - Padrão Aggregator
  - `check-inventory-*.ts` - Simuladores de verificação de estoque
  - `main.ts` - Ponto de entrada da aplicação

## Como executar

```bash
# Instalar dependências
pnpm install

# Executar a aplicação
pnpm run start

# Verificar tipos
pnpm run typecheck

# Formatar código
pnpm run format
```

## Tecnologias

- TypeScript
- Node.js (EventEmitter)
- tsx (runtime TypeScript)

## Conceitos Demonstrados

Este projeto é ideal para aprender sobre:

- Arquitetura orientada a eventos
- Padrões de integração empresarial (EIP)
- Separação de responsabilidades
- Message-driven architecture
- Conceitos que se aplicam a ferramentas como RabbitMQ, Kafka, AWS SQS, etc.
