import { styled } from '@/styles/stitches.config';

type Props = {
  smallScreen: boolean,
  icon: boolean,
  type: "Basic" | "Primary" | "Destructive" | "Outline" | "Outline monochrome" | "Plain" | "Plain destructive" | "Plain monochrome" | "Loading",
  disclosure: boolean,
  size: "Medium" | "Slim" | "Large",
  state: "Default" | "Hover" | "Focus" | "Pressed" | "Disabled" | "Depressed"
}
  
const Button: React.FC = (props: Props) => {
  return (
    <Button>
      <Autolayoutbutton>
        <Text>Label</Text>
      </Autolayoutbutton>
    </Button>
  )
}

const Smallscreen=false,Type=Basic,State=Default,Size=Slim,Disclosure=false,Icon=false = styled("div", {
  borderRadius: "0.5rem";
  display: "flex";
  flexDirection: "row";
  justifyContent: "flex-start";
  alignItems: "center";
  padding: "0.1rem";
  gap: "1rem";
}
const Autolayoutbutton = styled("div", {
  borderRadius: "0.4rem";
  display: "flex";
  flexDirection: "row";
  justifyContent: "flex-start";
  alignItems: "center";
  padding: "0.5rem 1.2rem";
  gap: "1rem";
  backgroundColor: "#ffffff";
  border: "0.1rem solid ";
}
const Text1 = styled("div", {
  textAlign: "left";
  verticalAlign: "top";
  fontSize: "14px";
  fontFamily: "SF Pro Text";
  lineHeight: "2rem";
  color: "#202223";
}
