export type FunctionComponent = React.ReactElement | null;

type HeroIconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
   React.RefAttributes<SVGSVGElement>;
type IconProps = HeroIconSVGProps & {
   title?: string;
   titleId?: string;
};
export type Heroicon = React.FC<IconProps>;

export enum BridgeType {
   EVM_TO_QUBIC = "evm-qubic",
   QUBIC_TO_EVM = "qubic-evm",
}
