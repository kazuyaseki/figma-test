import { styled } from '@/styles/stitches.config';

type Props = {
  state: "default" | "selected",
  badge: "on" | "off"
}
  
const Tab: React.FC = (props: Props) => {
  return (
    <Tab>
      <Content>
        <Text>処方せん</Text>
      </Content>
    </Tab>
  )
}

const State=selected,badge=off = styled("div", {
  borderRadius: "0.4rem 0.4rem 0rem 0rem";
  display: "flex";
  flexDirection: "row";
  justifyContent: "center";
  alignItems: "center";
  padding: "0.4rem 1.6rem";
  backgroundColor: "#ffffff";
  border: "0.4rem solid #009688";
}
const Content = styled("div", {
  display: "flex";
  flexDirection: "row";
  justifyContent: "center";
  alignItems: "center";
  gap: "0.4rem";
}
const Text1 = styled("div", {
  textAlign: "left";
  verticalAlign: "middle";
  fontSize: "15px";
  fontFamily: "Noto Sans JP";
  lineHeight: "100%";
  color: "#252525";
}
