import { Books } from "../../components/Books";
import { NavBar } from "../../components/NavBar";
import {
  ExploreContainer,
  ItemCategory,
  NameCategory,
  SectionCategory,
  SectionsBooks,
  TitleContainer,
} from "./style";

import { categories } from "../../utils/categories";

const Explore = () => {
  return (
    <div>
      <NavBar isSearch={true} />

      <ExploreContainer>
        <SectionCategory>
          <TitleContainer>Categorias</TitleContainer>
          {categories.map((category) => (
            <ItemCategory key={category.name}>{category.name}</ItemCategory>
          ))}
        </SectionCategory>

        <SectionsBooks>
          <TitleContainer>
            Filtrando por <NameCategory>Todos Generos</NameCategory>
          </TitleContainer>
          <Books isLoan={false} />
        </SectionsBooks>
      </ExploreContainer>
    </div>
  );
};

export default Explore;
