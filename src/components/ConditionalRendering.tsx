import { ReactNode } from "react";

type ConditionalRenderingProps = {
  renderIf: boolean;
  children: ReactNode;
};
function ConditionalRendering({
  children,
  renderIf,
}: ConditionalRenderingProps) {
  return renderIf ? <>{children}</> : <></>;
}

export default ConditionalRendering;
