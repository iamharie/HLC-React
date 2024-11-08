# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### useEffect()

- To handle any side effects in recat application
- componentDidMount(): Initial render cycle, dependencies acn be either empty or state or prop.
- componentDidUpdate(): Future render cycle, when dependency changes and that triggred to re-execute.
- componentWillUnmount: Cleaner function.

### memo()

- Wrapping the whole component using memo() hook to prevent re-rendere if the state or prop didn't change.
- memo checks the {pops, state} every time based on this factor and only if they are changed then it re-renders the component/ function.

### useCallback()

### useMemo()

- Wrapper for functions inside the component.

### HTTP Request

- data state
- loading state
- error state
