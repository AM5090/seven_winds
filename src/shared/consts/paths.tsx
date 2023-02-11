import { Management, Viewing } from "../../pages";

export const paths = {
    viewing: {
        path: 'viewing',
        name: 'Просмотр',
        element: <Viewing/>,
    },
    management: {
        path: 'management',
        name: 'Управление',
        element: <Management/>,
    }
}