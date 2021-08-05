import React from "react";
import { Colors, MotherLi, Span, Li } from "./components/styleVariables";
import { Button, SmButton } from "./components/Button.styles";
import { data } from "./response";

export const List = (props) => {
  const mapped = data.map((item) => item.categories);
  return (
    <div>
      <Li>
        <ul>
          {mapped.map((item) => {
            return item.map((categories) => {
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
            });
          })}
        </ul>
      </Li>
    </div>
  );
};

export default List;
