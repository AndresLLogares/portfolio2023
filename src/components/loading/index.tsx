import { LoaderEnum } from "./enum";
import {
  ContainerComponent,
  SpinnerComponent,
  TextLoadingComponent,
} from "../../styles/loading";

export const LoadingComponent = () => {
  return (
    <ContainerComponent>
      <SpinnerComponent />
      <TextLoadingComponent>{LoaderEnum.wait}</TextLoadingComponent>
    </ContainerComponent>
  );
};
