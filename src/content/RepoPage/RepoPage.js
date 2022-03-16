import React from 'react';
import RepoTable from './RepoTable';

const headers = [
  {
    key: 'name',
    header: 'Protocolo',
  },
  {
    key: 'createdAt',
    header: 'Envolvidos',
  },
  {
    key: 'updatedAt',
    header: 'Tramitação',
  },
  {
    key: 'issueCount',
    header: 'Interações',
  },
  {
    key: 'stars',
    header: 'Solicitante',
  },
  {
    key: 'links',
    header: 'Tratamento',
  },
];

const rows = [
  {
    id: '1',
    name: '2022/00299',
    createdAt: ' Agepan Transporte ',
    updatedAt: 'Encaminhado, Aguardando Resposta',
    issueCount: ' Consumidor ',
    stars: 'Gelian Nakazato de Almeida',
    links: 'Tratar',
  },
  {
    id: '2',
    name: '2022/00291',
    createdAt: 'Empresa de Saneamento de MS S/A',
    updatedAt: 'Encaminhado, Aguardando Resposta',
    issueCount: 'Consumidor',
    stars: 'Claudio do Nascimento Garcia',
    links: 'Tratar',
  },
  {
    id: '3',
    name: '2022/00272',
    createdAt: 'EXPRESSO QUEIROZ LTDA',
    updatedAt: 'Encaminhado, Aguardando Resposta',
    issueCount: 'Consumidor',
    stars: 'Ulisses Romero',
    links: 'Tratar',
  },
];

const RepoPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <div className="bx--row repo-page__r1">
        <div className="bx--col-lg-16">
          <RepoTable headers={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
};

export default RepoPage;
