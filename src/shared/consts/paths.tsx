import { Management, Viewing } from '../../pages';

export const paths = {
  viewing: {
    path: 'viewing',
    name: 'Просмотр',
    element: <Viewing/>,
    pages: {
      project: {
        path: 'project',
        name: 'По проекту',
        fullName: 'По проекту',
      },
      objects: {
        path: 'objects',
        name: 'Объекты',
        fullName: 'Объекты',
      },
      rd: {
        path: 'rd',
        name: 'РД',
        fullName: 'РД',
      },
      mto: {
        path: 'mto',
        name: 'МТО',
        fullName: 'МТО',
      },
      smr: {
        path: 'smr',
        name: 'СМР',
        fullName: 'Строительно-Монтажные работы',
      },
      chart: {
        path: 'chart',
        name: 'График',
        fullName: 'График',
      },
      mim: {
        path: 'mim',
        name: 'МиМ',
        fullName: 'МиМ',
      },
      workers: {
        path: 'workers',
        name: 'Рабочие',
        fullName: 'Рабочие',
      },
      investments: {
        path: 'investments',
        name: 'Капвложения',
        fullName: 'Капвложения',
      },
    },
  },
  management: {
    path: 'management',
    name: 'Управление',
    element: <Management/>,
  },
};