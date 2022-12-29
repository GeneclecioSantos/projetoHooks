import React, { useCallback, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import UseCallbackButtons from "./UseCallbackButtons";

const UseCallback = (props) => {
  const [count, setCount] = useState(0); //criação do estado

  //   function inc(delta) {
  //     setCount(count + delta); // conta para somar os valores e ir incrementando tudo em um só lugar
  //   }

  //Uma função para fazer a contagem, mas sem renderizar toda hora, mas para isso, no componente você tem que especificar que é React.memo junto com export default => exemplo export default React.memo(UseCallbackButtons)
  const inc = useCallback(
    function (delta) {
      setCount((curr) => curr + delta);
    },
    [setCount]
  );

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />
      <div className="center">
        <span className="text">{count}</span>
        <UseCallbackButtons inc={inc} />
      </div>
    </div>
  );
};

export default UseCallback;
