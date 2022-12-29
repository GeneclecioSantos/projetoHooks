import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

import { initialState, reducer } from "../../store";
import { numberAdd2, login } from "../../store/action";

const UseReducer = (props) => {
  // usamos o dispatch para acionar uma ação / nome padrão quando fazemos isso
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}

        <span className="text">{state.number}</span>

        <div>
          <button className="btn" onClick={() => login(dispatch, "João")}>
            Login
          </button>
          <button className="btn" onClick={() => numberAdd2(dispatch)}>
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberMult7" })}
          >
            *7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberDiv25" })}
          >
            /25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberArredondar" })}
          >
            Arredondar
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberN", payload: 11 })}
          >
            +11
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
