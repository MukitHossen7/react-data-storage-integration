import { add, multy } from "../../Utilits/main";

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
    </div>
  );
};

export default Sunglass;
