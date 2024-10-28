import styled from "styled-components";

// styled-components module안에 직접 declare(선언)
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
  }
}
