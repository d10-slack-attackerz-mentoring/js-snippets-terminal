const funcInner = () => {};

const funcOuter = () => {
  // INSIDE a functions usually we NEVER DEFINE NEW FuNCTIONS
  // Instead we just CALL other functions
  funcInner();
};

const func2 = () => {
  funcInner();
};

funcOuter();
funcInner();
