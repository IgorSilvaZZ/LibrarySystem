import { InputContainer, InputStyled, IconSearch } from "./style";

import searchIcon from "../../assets/searchIcon.png";

const InputSearch = ({
  colorInput,
  widthContainer,
  heightContainer,
  backgroundContainer,
  widthImage,
  placeHolder,
  justifyContainer,
  alignItems,
}) => {
  return (
    <InputContainer
      justifyContainer={justifyContainer}
      alignItems={alignItems}
      width={widthContainer}
      height={heightContainer}
      background={backgroundContainer}
    >
      <IconSearch src={searchIcon} widthImage={widthImage} />
      <InputStyled
        colorInput={colorInput}
        placeholder={placeHolder}
        type='text'
      />
    </InputContainer>
  );
};

export { InputSearch };
