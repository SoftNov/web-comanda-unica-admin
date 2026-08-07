import Konva from 'konva';

export type FloorPlanTableShape = 'SQUARE' | 'ROUND' | 'RECTANGULAR';

interface ChairPoint {
  x: number;
  y: number;
  rotation: number;
}

const CHAIR_SEAT_COLOR = '#e7e5e4';
const CHAIR_BACKREST_COLOR = '#d6d3d1';
const CHAIR_STROKE = 'rgba(87,83,78,0.45)';
const MAX_CHAIRS = 24;

// Cadeiras redondas ficam distribuídas em círculo ao redor da mesa.
function distributeChairsRound(width: number, height: number, count: number, offset: number): ChairPoint[] {
  if (count <= 0) {
    return [];
  }
  const rx = width / 2 + offset;
  const ry = height / 2 + offset;
  const cx = width / 2;
  const cy = height / 2;
  const points: ChairPoint[] = [];
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    points.push({
      x: cx + rx * Math.cos(angle),
      y: cy + ry * Math.sin(angle),
      rotation: (angle * 180) / Math.PI + 90
    });
  }
  return points;
}

// Cadeiras quadradas/retangulares ficam distribuídas ao longo do perímetro,
// com meio passo de deslocamento para não empilhar duas cadeiras num mesmo canto.
function distributeChairsRect(width: number, height: number, count: number, offset: number): ChairPoint[] {
  if (count <= 0) {
    return [];
  }
  const perimeter = 2 * (width + height);
  const points: ChairPoint[] = [];
  for (let i = 0; i < count; i++) {
    const d = ((i + 0.5) / count) * perimeter;
    if (d < width) {
      points.push({ x: d, y: -offset, rotation: 0 });
    } else if (d < width + height) {
      points.push({ x: width + offset, y: d - width, rotation: 90 });
    } else if (d < 2 * width + height) {
      points.push({ x: width - (d - width - height), y: height + offset, rotation: 180 });
    } else {
      points.push({ x: -offset, y: height - (d - 2 * width - height), rotation: 270 });
    }
  }
  return points;
}

function buildChairNode(size: number): Konva.Group {
  const chair = new Konva.Group({ name: 'table-visual', listening: false });
  chair.add(
    new Konva.Rect({
      x: -size / 2,
      y: -size / 2,
      width: size,
      height: size,
      cornerRadius: size * 0.28,
      fill: CHAIR_SEAT_COLOR,
      stroke: CHAIR_STROKE,
      strokeWidth: 1
    }),
    new Konva.Rect({
      x: -size / 2,
      y: -size / 2 - size * 0.16,
      width: size,
      height: size * 0.22,
      cornerRadius: size * 0.12,
      fill: CHAIR_BACKREST_COLOR,
      stroke: CHAIR_STROKE,
      strokeWidth: 1
    })
  );
  return chair;
}

function buildTableBody(shape: FloorPlanTableShape, width: number, height: number, color: string): Konva.Shape {
  if (shape === 'ROUND') {
    return new Konva.Ellipse({
      x: width / 2,
      y: height / 2,
      radiusX: width / 2,
      radiusY: height / 2,
      fill: color,
      stroke: 'rgba(0,0,0,0.25)',
      strokeWidth: 1,
      name: 'table-visual'
    });
  }
  return new Konva.Rect({
    width,
    height,
    fill: color,
    stroke: 'rgba(0,0,0,0.25)',
    strokeWidth: 1,
    cornerRadius: shape === 'RECTANGULAR' ? 10 : 8,
    name: 'table-visual'
  });
}

export interface FloorPlanTableVisualOptions {
  shape: FloorPlanTableShape;
  width: number;
  height: number;
  capacity: number;
  color: string;
}

// Monta o desenho da mesa junto com as cadeiras ao redor, na quantidade da
// capacidade cadastrada (com um valor padrão para mesas sem capacidade definida).
export function buildFloorPlanTableVisual(options: FloorPlanTableVisualOptions): (Konva.Group | Konva.Shape)[] {
  const { shape, width, height, color } = options;
  const capacity = Math.min(options.capacity > 0 ? options.capacity : 4, MAX_CHAIRS);
  const chairSize = Math.max(10, Math.min(20, Math.min(width, height) * 0.24));
  const offset = chairSize * 0.55;
  const points = shape === 'ROUND'
    ? distributeChairsRound(width, height, capacity, offset)
    : distributeChairsRect(width, height, capacity, offset);

  const chairs = points.map((point) => {
    const chair = buildChairNode(chairSize);
    chair.position({ x: point.x, y: point.y });
    chair.rotation(point.rotation);
    return chair;
  });

  return [buildTableBody(shape, width, height, color), ...chairs];
}
