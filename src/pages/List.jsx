import React, { useContext } from "react";
import {
  MotherLi,
  Span,
  Li,
} from "../components/styleComponets/styleVariables";
import { SmButton } from "../components/styleComponets/Button.styles";
import { DataContext } from "../context/DataContext";
import Modal from "../components/Modal";

//
export const List = ({ modal }) => {
  const { Remove, value } = useContext(DataContext);

  const category = (categoryIndex) => {
    Remove.category(categoryIndex);
  };

  const brands = (categoryIndex, brandIndex) => {
    Remove.brand(categoryIndex, brandIndex);
  };

  const product = (categoryIndex, brandIndex, productIndex) => {
    Remove.product(categoryIndex, brandIndex, productIndex);
  };

  return (
    <div>
      <Modal modal={modal} />
      <Li>
        <ul>
          {value &&
            value.map((categories, categoryIndex) => {
              return (
                <Li>
                  {/* categories  */}
                  <span key={categories.id}>
                    {categories.name}
                    <SmButton onClick={() => category(categoryIndex)}>
                      Delete
                    </SmButton>
                  </span>

                  {/* categorie brand  */}
                  {categories.brands.map((brand, brandIndex) => {
                    return (
                      <MotherLi>
                        <Li>
                          <Span key={brand.id}>
                            {brand.name}
                            <SmButton
                              onClick={() => brands(categoryIndex, brandIndex)}
                            >
                              Delete
                            </SmButton>
                          </Span>
                        </Li>
                        <ul>
                          {/* products  */}
                          {brand.products.map((prod, productIndex) => {
                            return (
                              <MotherLi key={prod.id}>
                                {prod.name}
                                <SmButton
                                  onClick={() =>
                                    product(
                                      categoryIndex,
                                      brandIndex,
                                      productIndex
                                    )
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
