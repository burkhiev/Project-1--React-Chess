/* eslint-disable no-unused-vars */
import { ICell } from './models/cells/ICell';
import { Colors } from './services/enums/Colors';

/**
 * Методы данного типа обрабатывают 2 клетки и
 * возвращают значение, указывающее либо на продолжение
 * обработки(true) либо на её прекращение(false).
 */
export type ChessProcessPredicate = (
  origin: ICell,
  next: ICell,
  color?: Colors
) => boolean;

export type Action = () => void;

export class AppConfirms {
  static confirmRestartGame(): boolean {
    return confirm('Are you sure to start a new game.');
  }
}
