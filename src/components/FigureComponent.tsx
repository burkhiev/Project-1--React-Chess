import React from 'react';
import classNames from 'classnames';

import { Colors } from '../services/enums/Colors';
import { FigureNames } from '../services/enums/FigureNames';
import { FigureImageSourcesManager } from '../services/FigureImageSourcesManager';
import { getImageContainerCss, getImageCss } from './CellImageCss';

export interface IFigureComponentProps {
  figureName: FigureNames,
  figureColor: Colors
}

export default function FigureComponent(props: IFigureComponentProps) {
  const { figureName, figureColor } = props;
  const figureImg = FigureImageSourcesManager
    .getFigureImageSource(figureName, figureColor);

  const rawImgContainerCss = classNames(getImageContainerCss());
  const rawImgCss = classNames(getImageCss());

  const altText = `${Colors[figureColor]} ${FigureNames[figureName]}`;

  return (
    <div className={rawImgContainerCss}>
      <img src={figureImg} className={rawImgCss} alt={altText} />
    </div>
  );
}
