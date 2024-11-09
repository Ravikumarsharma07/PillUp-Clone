import ProcedureBigScreen from "./smallComponents/ProcedureBigScreen";
import ProcedureSmallScreen from "./smallComponents/ProcedureSmallScreen";



const Procedure = () => {

  return(
    window.innerWidth > 600 ? <ProcedureBigScreen /> : <ProcedureSmallScreen />
  )

};

export default Procedure;
