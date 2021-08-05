import React, { useContext, useEffect } from "react";
import { MotherLi, Span, Li } from "./components/styleVariables";
import { SmButton } from "./components/Button.styles";
import { DataContext } from "./context/DataContext";

//
export const List = () => {
  const { deleteCategory, deleteBrand, deleteProduct, value } =
    useContext(DataContext);
  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <Li>
        <ul>
          {value &&
            value.map((categories, catx) => {
              return (
                <Li>
                  {/* categories  */}
                  <span key={categories.id}>
                    {categories.name}
                    <SmButton onClick={() => deleteCategory(categories.id)}>
                      Delete
                    </SmButton>
                  </span>

                  {/* categorie brand  */}
                  {categories.brands.map((brand, brandx) => {
                    return (
                      <MotherLi>
                        <Li>
                          <Span key={brand.id}>
                            {brand.name}
                            <SmButton onClick={() => deleteBrand(catx, brandx)}>
                              Delete
                            </SmButton>
                          </Span>
                        </Li>
                        <ul>
                          {/* products  */}
                          {brand.products.map((prod, prodx) => {
                            return (
                              <MotherLi key={prod.id}>
                                {prod.name}
                                <SmButton
                                  onClick={() =>
                                    deleteProduct(prodx, catx, brandx)
                                  }
                                >
                                  Delete
                                </SmButton>
                              </MotherLi>
                            );
                          })}
                        </ul>
                      </MotherLi>
                    );
                  })}
                </Li>
              );
            })}
        </ul>
      </Li>
    </div>
  );
};

export default List;
