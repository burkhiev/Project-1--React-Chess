import { Colors } from '../../services/enums/Colors';
import { FigureNames } from '../../services/enums/FigureNames';

export interface IFigure {
    // имя свойства name занято и выделяется как устаревшее(@types/react)
    readonly figureName: FigureNames,
    readonly color: Colors
}
