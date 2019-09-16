import { useEffect } from "react";

const useComponentDidMount = fn => useEffect(fn, []);

export default useComponentDidMount;
