import React from "react";
import { MotherLi, Span, Li } from "./components/styleVariables";
import { SmButton } from "./components/Button.styles";

//
export const List = ({ data }) => {
  return (
    <div>
      <Li>
        <ul>
          {data &&
            data.map((categories) => {
              return (
                <Li>
                  {/* categories  */}
                  <span key={categories.id}>
                    {categories.name}
                    <SmButton>Delete</SmButton>
                  </span>

                  {/* categorie brand  */}
                  {categories.brands.map((brand) => {
                    return (
                      <MotherLi>
                        <Li>
                          <Span key={brand.id}>
                            {brand.name}
                            <SmButton>Delete</SmButton>
                          </Span>
                        </Li>
                        <ul>
                          {/* products  */}
                          {brand.products.map((prod) => {
                            return (
                              <MotherLi key={prod.id}>
                                {prod.name}
                                <SmButton>Delete</SmButton>
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
