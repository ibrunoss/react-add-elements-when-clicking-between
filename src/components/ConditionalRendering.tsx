import React from "react";

type ConditionalRenderingProps = {
  renderIf: boolean;
  children: React.ReactNode;
};
function ConditionalRendering({
  children,
  renderIf,
}: ConditionalRenderingProps) {
  return renderIf ? <>{children}</> : <></>;
}

export default ConditionalRendering;
