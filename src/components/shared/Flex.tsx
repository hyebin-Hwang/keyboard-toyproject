import styled from "styled-components"

type alignment = "start" | "end" | "center"

const getAlignment = (value: alignment | undefined) =>
  value === "start" || value === "end" ? "flex-" + value : value

export type FlexProps = {
  axis?: "horizontal" | "vertical"
  space?: string
  alignment?: alignment
  distribution?: alignment
}

/*
  Stack은 flex 레이아웃 원자 컴포넌트다. 
  axis : axis를 통해서 flex-direction을 조정하고, 
  space: space를 통해서 justify-content를 조정한다. 'evenly'를 삽입하면 space-between이고,
  그게 아니라면 flex-start 또는 flex-end 또는 center이다 
  distribution: distribution에 의해서 flex-start, flex-end, center 중에서 하나 선택할 수 있다.
  alignment: 를 통해서 align-items를 조정할 수 있다.
*/
export const Flex = styled.div<FlexProps>`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.axis === "horizontal" ? "row" : "column")};
  justify-content: ${(props) => {
    return props.space === "between" ? "space-between" : getAlignment(props.distribution)
  }};
  align-items: ${(props) => getAlignment(props.alignment)};

  /* 
  flex 레이아웃 컨테이너의 자식박스에 마진값을 적용하는 로직이다.
  space가 evenly이면 마진이 골고루 적용되기 때문에 의미가 없고({}),
  space가 '30px'이고 axis가 horizontal이면 각 자식박스의 marginRight: 30px가 적용된다.
  그리고 마지막 자식 박스의 마진에 0이 적용된다.  
*/
  && {
    > * {
      ${(props) => {
        const space = props.space

        return space === "between"
          ? {}
          : {
              [props.axis === "horizontal" ? "marginRight" : "marginBottom"]: space,
            }
      }}
    }

    > *:last-child {
      ${(props) => ({
        [props.axis === "horizontal" ? "marginRight" : "marginBottom"]: 0,
      })}
    }
  }
`

Flex.defaultProps = {
  axis: "horizontal",
  space: "0px",
}
