import { styled } from '@/styles/stitches.config';

type Props = {
  iconFront: boolean
}
  
const Button: React.FC = (props: Props) => {
  return (
    <button className="iconfront-=false">
      <p className="text-1">送信する</p>
    </button>
  )
}

const Iconfront=false = styled("div", {
  borderRadius: "4px";
  display: "flex";
  flexDirection: "row";
  justifyContent: "center";
  alignItems: "center";
  padding: "12px 10px 11px 10px";
  gap: "10px";
  backgroundColor: "$bg-primary-main";
  border: "1px solid $border-primary-main";
}
const Text1 = styled("div", {
  textAlign: "center";
  verticalAlign: "middle";
  typography: "$component-button-large";
  color: "$text---textwhite";
}
