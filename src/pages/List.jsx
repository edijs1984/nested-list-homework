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

  const category = (catx) => {
    Remove.category(catx);
  };

  const brands = (catx, brandx) => {
    Remove.brand(catx, brandx);
  };

  const product = (catx, brandx, prodx) => {
    Remove.product(catx, brandx, prodx);
  };

  return (
    <div>
      <Modal modal={modal} />
      <Li>
        <ul>
          {value &&
            value.map((categories, catx) => {
              return (
                <Li>
                  {/* categories  */}
                  <span key={categories.id}>
                    {categories.name}
                    <SmButton onClick={() => category(catx)}>Delete</SmButton>
                  </span>

                  {/* categorie brand  */}
                  {categories.brands.map((brand, brandx) => {
                    return (
                      <MotherLi>
                        <Li>
                          <Span key={brand.id}>
                            {brand.name}
                            <SmButton onClick={() => brands(catx, brandx)}>
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
                                  onClick={() => product(catx, brandx, prodx)}
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
