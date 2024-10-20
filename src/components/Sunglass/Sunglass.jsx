// import add, { multy } from "../../Utilits/main";
import { add, multy } from "../../Utilits/main";
import Watch from "../Watch/Watch";

const Sunglass = () => {
  let fNum = 50;
  let lNum = 100;
  const result = add(fNum, lNum);
  console.log(result);
  const result2 = multy(fNum, lNum);
  console.log(result2);
  return (
    <div>
      <h3>sunglass components </h3>
      <Watch></Watch>
    </div>
  );
};

export default Sunglass;
