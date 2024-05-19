import type { NodeProps } from "@xyflow/react";
import { Handle, Position, Node } from "@xyflow/react";

export type PositionLoggerNodeData = {
  label?: string;
};

export function PositionLoggerNode({
  id,
  positionAbsoluteX,
  positionAbsoluteY,
  data,
}: NodeProps<Node<PositionLoggerNodeData>>) {
  const x = `${Math.round(positionAbsoluteX)}px`;
  const y = `${Math.round(positionAbsoluteY)}px`;

  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className="react-flow__node-default">
      {data.label && <div>{data.label}</div>}

      <div>
        {x} {y}
      </div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
